---
id: remote-deployment
title: Deploy on AWS
sidebar_label: Deploy on AWS
---

You can set up a PayID server on AWS (Amazon Web Services).

1. Initialize a `t2.micro` instance on AWS running Ubuntu 18.04m with a minimum of 8 GB SSD. For the purposes of this demo, you can use AWS Free Tier.
   See [Getting Started with Amazon EC2 Linux Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) for more information about setting up your instance.
2. Get an elastic IP address and associate it with your AWS `t2.micro` instance, as described in [Step 1, part 10](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html#ec2-launch-instance).
3. Update the DNS for your PayID domain as shown in the following table. Add any other subdomain you would like to use as a PayID as well.

| Type | Name                 | Value             | TTL         |
| ---- | -------------------- | ----------------- | ----------- |
| A    | @                    | _your-ip-address_ | 600 seconds |
| A    | _your-payID-address_ | _your-ip-address_ | 1/2 Hour    |

4. Set your instance's firewall/security group.
   - Port 80 (TCP) open for all address
   - Port 8081 (Private API access) open for your local IP address only, or closed generally, or only available inside your virtual private cloud. If port 8081 is exposed publicly it allows anybody to update your payment information, potentially leading to a loss of funds.
   - Port 22 (SSH) open
5. SSH into your instance.
   - Right-click on the instance.
   - Click **Connect**.
   - Copy the example command and run it in your local terminal. You must have local access to the private key file associated with your instance.
6. Install git on your instance.
   `sudo apt-get install git`
7. Link the git on your instance to your GitHub account, as described in [Connecting to GitHub with SSH](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh). Follow the instructions for [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
8. Install docker on your instance.
   ```bash
   sudo apt-get update
   sudo apt install docker.io docker-compose
   ```
9. Clone the payid Github repository: `git clone git@github.com:payid-org/payid.git`
10. Set the docker port to 80 by modifying the `docker-compose.yml`:
    - Open the script editor: `nano payid/docker-compose.yml`
    - Go to the `ports` property, and change: `8080:8080` to `80:8080`
11. Run this script to start PayID with a Postgres database: `npm run devEnvUp`

    - To bring this down, run `npm run devDown`

12. Check your IP address and the website in your browser to confirm the server is running. You should see a success page that looks like [this].(https://xpring.money/).
13. Load up your desired PayID to the database using the [private PayID API](readme.md). If you use a subdomain rather than a path, then you must set up a DNS record for the subdomain as described in step 3.
    **Note:** You can add PayIDs for each (pay_id, network, environment) tuple. Use this cURL command to set up a PayID.
    ```bash
    curl --location --request POST 'http://127.0.0.1:8081/users' \
    --header 'PayID-API-Version: 2020-06-16' \
    --header 'Content-Type: application/json' \
    --data-raw '{
     "payId": "<user$domain.com>",
     "addresses": [{
       "paymentNetwork": "XRPL",
       "environment": "MAINNET",
       "details": {
         "address": "<your-address>"
       }
     }]
    }'
    ```
14. From your local computer, run a cURL command to fetch your PayID. For example:

```
curl -X GET 'https://<domain.com/user>' --header 'Accept: application/xrpl-mainnet+json' --header 'PayID-version: 1.0'
```

For other PayID API methods, see the [readme](readme.md).

To convert a PayID address to a URL endpoint, follow these patterns:

- `user$wallet.com` converts to `https://wallet.com/user`
- `user$subdomain.wallet.com/payid` converts to `https://subdomain.wallet.com/payid/user`

**Note:** Public APIs hit port 80 and private APIs hit port 8081 per the config in step 10. Make sure that 8081 is limited so that outsiders cannot modify your server’s database.

For additional network formats, see the [API Reference](https://api.payid.org/?version=latest).

Next, set up NGINX Reverse Proxy + SSL.

## NGINX Reverse Proxy + SSL setup

1. Change the PayID server to run on port 8080 (default).
2. Set up a Server Block on NGINX for your domain, following [these instructions](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04).
3. Install Certbot, as follows.
   ```bash
   apt-get update
   apt-get install software-properties-common
   add-apt-repository ppa:certbot/certbot
   apt-get update
   apt-get install python-certbot-nginx
   ```
4. Generate a certificate (choose to redirect)
   `certbot --nginx`
5. Change the location parameter in the NGINX conf file to reverse proxy to the PayID server (running on port 8080):
   `try_files $uri $uri/ =404;`
   to:
   ```nginx
   proxy_pass http://127.0.0.1:8080;
   proxy_set_header Host $http_host;
   ```
   **Note:** The second line is required to preserve the original URL, which is used to find the user.
   **Note:** You can expand your certificate to cover any subdomain used in a PayID using:
   `sudo certbot -d zochow.ski,pay.michael.zochow.ski,www.zochow.ski --expand`
6. Restart NGINX.
   `sudo systemctl restart nginx`
7. [Optional] Update the NGINX configuration that catches PayID headers and forwards them to the PayID server; otherwise, send these headers to the web server.

   ```bash
   sudo nano /etc/nginx/sites-available/<your-site>
   ```

   ```nginx
   location / {
      proxy_set_header Host $http_host;
      # needed for CORS
      add_header Access-Control-Allow-Origin *;
      add_header Access-Control-Allow-Headers *;

      # proxy passing needed for all supported networks
      # modify port to the one used by your PayID server
      if ($http_accept ~ "application/payid*") {
            proxy_pass http://127.0.0.1:8080;
      }
      if ($http_accept ~ "application/xrpl-*") {
            proxy_pass http://127.0.0.1:8080;
      }

      try_files $uri $uri/ =404;
   }
   ```
