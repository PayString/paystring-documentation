---
id: nginx-ssl-deploy
title: Set Up NGINX Reverse Proxy and SSL
sidebar_label: Set Up NGINX Reverse Proxy and SSL
---

After you set up a PayString server using your preferred [deployment option](intro-deploy.md), you can set up NGINX Reverse Proxy + SSL for load balancing and security.

## NGINX Reverse Proxy + SSL setup

1. Change the PayString server to run on port 8080 (default).
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
5. Change the location parameter in the NGINX conf file to reverse proxy to the PayString server (running on port 8080):
   `try_files $uri $uri/ =404;`
   to:
   ```nginx
   proxy_pass http://127.0.0.1:8080;
   proxy_set_header Host $http_host;
   ```
   **Note:** The second line is required to preserve the original URL, which is used to find the user.
   **Note:** You can expand your certificate to cover any subdomain used in a PayString using:
   `sudo certbot -d zochow.ski,pay.michael.zochow.ski,www.zochow.ski --expand`
6. Restart NGINX.
   `sudo systemctl restart nginx`
7. [Optional] Update the NGINX configuration that catches PayString headers and forwards them to the PayString server; otherwise, send these headers to the web server.

**Note:** You will need to add additional proxy passing statements for each additional network supported, or otherwise use a generic regex to identify all PayString headers.

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
   # modify port to the one used by your PayString server
   if ($http_accept ~ "application/payid*") {
         proxy_pass http://localhost:8080;
   }
   if ($http_accept ~ "application/xrpl-*") {
         proxy_pass http://localhost:8080;
   }

   try_files $uri $uri/ =404;
}
```
