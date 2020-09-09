---
id: aws-lambda-deploy
title: Deploy a PayID Server on AWS Lambda
sidebar_label: Deploy a PayID Server on AWS Lambda
---

You can deploy a PayID server on AWS Lambda, a setup that allows you to run code without having to deploy or manage a server.

## Requirements

- An AWS account.
- A domain that you want to use for your PayIDs.
- [A certificate imported into Amazon Certificate Manager in the `us-east-1` region](#how-do-i-get-a-certificate-in-amazon-certificate-manager).
- **After the stack is added**, you'll have [to update your domain to use Amazon's name servers in the Route53 hosted zone that's created for you](#how-do-i-update-my-domains-nameservers-for-my-payid-domain).
- A `json` file containing the PayIDs that you want to upload to the S3 (Amazon Simple Storage Service) bucket created by the stack.(#how-do-i-add-payids).

Here is an example form:

![stack form](./help-images/stack-form.png)

## Use Amazon's name servers

If you have the domain and certificate, and you want to use Amazon's name servers, then click **Launch Stack** to get started.

[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://us-west-1.console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?templateURL=https://payid-server-template.s3-us-west-2.amazonaws.com/payid-stack.yaml&stackName=my-payid-server)

If you want to use the AWS command line to create your stack, we provide scripts to make the process easier. [Check out our instructions for using them.](#launching-using-scripts)

## Add a certificate to Amazon Certificate Manager (ACM)

### Step 1: Open ACM in the AWS console in us-east-1

You **must** use the `us-east-1` region to open ACM and add your certificate, or the CloudFormation will not create your stack/PayID server correctly. The AWS Lambda uses API Gateway for HTTP access which leverages a Cloudfront distribution for pointing a domain to it, and Cloudfront distributions require ACM certificates to exist in `us-east-1`. See: [AWS ACM regions documentation](https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html).

Open the [ACM console](https://console.aws.amazon.com/acm/home?region=us-east-1).

### Step 2: Request a public certificate

![request a public certificate](./help-images/cert/request-cert-acm-start.png)

### Step 3: Specify your domain name

![specify your domain name](./help-images/cert/request-cert-step-1.png)

### Step 4: Choose DNS validation

![choose dns validation](./help-images/cert/request-cert-step-2.png)

### Step 5: Add tags (optional)

![optionally add tags](./help-images/cert/request-cert-step-3.png)

### Step 5: Review

![review](./help-images/cert/request-cert-step-4.png)

### Step 6: Pending validation and adding a CNAME at your registrar

At this point, you've gone as far as you can in the AWS console and will be in a state pending validation as shown below:

![pending validation](./help-images/cert/request-cert-step-5.png)

You'll need to use that information with your registrar to add a `CNAME` record so ACM can validate that you own the domain. Here's an example of what this looks like for one registrar:

![add a cname](./help-images/cert/request-cert-step-6.png)

### Step 7: Wait for issuance (approximately 30 minutes)

Wait for ACM to display the `CNAME` you added and issue the certificate. When this happens, you should see the status change:

![issued](./help-images/cert/request-cert-step-7.png)

### Step 8: Copy the certificate ARN (Amazon Resource Name) for use with this CloudFormation stack

![certificate arn](./help-images/cert/request-cert-step-8.png)

## Update your domain's nameservers for your PayID domain

When you finish creating the CloudFormation Stack using our template, you next update your nameserver settings on your registrar to use Amazon's.

### Step 1: View the nameservers in the stack output, or go to Route53 in the AWS console and click on your hosted zone

If you're still on the CloudFormation page looking at the stack, the `Outputs` tab will list the nameservers you need to use.

![stack outputs](./help-images/nameservers/stack-outputs.png)

If you've already closed the tab or navigated away, you can find the same information in [Route53](https://console.aws.amazon.com/route53/v2/hostedzones).

Once you're on this page, click on the domain you used in the stack template (in this example, `somedomainyouown.com`):

![hosted zones](./help-images/nameservers/hosted-zone-list.png)

### Step 2: Find the nameservers

Click on the hosted zone to display the nameservers you need to use with your registrar:

![hosted zone nameservers](./help-images/nameservers/hosted-zone-nameservers.png)

### Step 3: Update your registrar with Amazon's nameservers

Paste the values you saw in the previous step into wherever your registrar allows you to change them. For example:

![registrar nameservers](./help-images/nameservers/registrar-nameservers.png)

## Launch with AWS Lambda using scripts

Several scripts are provided to make it simple to request a AWS certificate for your PayID domain and launch the payid lambda stack on your domain.

- [request-certificate.sh](request-certificate.sh) - to request a certificate via AWS certificate manager for a given domain.
- [create-stack.sh](create-stack.sh) - to create the PayID lambda stack on your account for a given domain.

### Prequisites

- You must install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
- Make sure `aws configure` has been configured with an Access Key created via [IAM--Your Security Credentials](https://console.aws.amazon.com/iam/home?region=us-east-1#/security_credentials).
- You must have a domain and the ability to configure DNS for your domain.

### Usage

#### Request a certificate

Commamd: `./request-certificate.sh <domain-name>`

Example:

```
$ ./request-certificate.sh hodl.payid.ml

Requesting certificate for hodl.payid.ml
Certificate requested. Please create the following CNAME record for your domain:
_09dee7696e4d458fb16fead080465035.hodl.payid.ml.	CNAME	_b1fddaad4657f8e03167be7b61dc3685.jfrzftwwjs.acm-validations.aws.
```

When the certificate request is completed, create the CNAME for your domain as specified in the output.

Wait for AWS Certificate Manager to issue your certificate before proceeding to the next command.

#### Launch the PayID Lambda stack

Commamd: `./create-stack.sh <domain-name>`

Example:

```
$ ./create-stack.sh hodl.payid.ml

Creating stack hodl-payid-ml-payid-stack in AWS...

Waiting for changeset to be created..
Waiting for stack create/update to complete
Successfully created/updated stack - hodl-payid-ml-payid-stack

Created successfully
Please update the Nameservers for your domain to
nameserver1	ns-1288.awsdns-33.org
nameserver2	ns-852.awsdns-42.net
nameserver3	ns-1593.awsdns-07.co.uk
nameserver4	ns-8.awsdns-01.com
```

Once completed, update the nameservers for your domain to the ones specified in the output.

## Add PayIDs to your Amazon S3 bucket

When the stack is created, an Amazon S3 bucket titled `{name of stack}-s3bucket-{unique hash}` is also created.

You can add PayIDs by uploading `json` files to this bucket, each of which contains a single user that conforms to [the PayID schema](https://docs.payid.org/payid-schemas#example-single-user-schema). You can upload new files to the bucket via the [Amazon S3 console](https://s3.console.aws.amazon.com/s3/buckets/).

When the stack is created, a test account is provided at `testaccount.json`:

```
{
    "addresses":[
        {
            "paymentNetwork":"XRPL",
            "environment":"TESTNET",
            "addressDetailsType":"CryptoAddressDetails",
            "addressDetails":{
                "address":"T772A73My52QaUonaai6VE4X98zLu7VBQSXJKLYimjXDAJi"
            }
        }
    ]
}
```

The name of the file used to resolve the PayID--`testaccount.json`--is resolved by `mydomain.tld/testaccount`.

## Upgrade the AWS Lambda function

To see if there is a release with an upgraded AWS Lambda function, look for [releases](https://github.com/xpring-eng/payid-lambda/releases) with the file `payid-stack.yaml` attached.

The version you have installed is visible in the description of the stack in CloudFormation (for example, something like `[v1.0] PayID Lambda Server and API Gateway front end`) and also in the `Outputs` of the stack under the name `PayIdLambdaStackVersion`.

To perform an update, click the `Update` button when viewing the stack and upload the version of `payid-stack.yaml` to which you want to upgrade.

![update button](./help-images/upgrade/update-button.png)

![update button](./help-images/upgrade/update-form.png)

**Note**: This upgrade updates the Lambda function, but it could also update other resources as well in the stack, including API Gateway, Amazon S3, and others. The release notes will outline changes if other resources are altered, but be sure to also look at the changelog to see if other resources may be impacted.