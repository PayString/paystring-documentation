---
id: aws-lambda-deploy
title: Deploy on AWS Lambda
sidebar_label: Deploy on AWS Lambda
---

:::note
PayString was previously known as PayID.
:::

You can deploy a PayString server on AWS Lambda, a setup that allows you to run code without having to deploy or manage a server.

## Requirements

To deploy PayString server on AWS Lambda, you need the following:

- An AWS account.
- A domain, which you control, to use for your PayStrings. This domain will be part of each PayString. **After you add the stack**, you must update your domain to use Amazon's name servers in the Route53 hosted zone that's created for you.
- A certificate imported into Amazon Certificate Manager (ACM) in the `us-east-1` region. If you do not have such a certificate, you can use ACM to request one.
- If you have existing PayStrings to import, a `json` file containing the PayStrings that you want to upload to the S3 (Amazon Simple Storage Service) bucket created by the stack.

For more information about AWS Lambda and AWS CloudFormation, see:

- [AWS Lambda](https://aws.amazon.com/lambda/)
- [AWS CloudFormation](https://aws.amazon.com/cloudformation/)

## Request or import a certificate to Amazon Certificate Manager (ACM)

If you do not already have a certificate, then you will need to request one in ACM. If you do have one, you will need to import it.

### Step 1: Open ACM in the AWS console in us-east-1

You **must** use the `US East (N. Virginia) us-east-1` region to open ACM and request or import your certificate, or CloudFormation will not create your stack/PayString server correctly. AWS Lambda uses API Gateway for HTTP access which leverages a Cloudfront distribution for pointing a domain to it, and Cloudfront distributions require ACM certificates to exist in `us-east-1`. See: [AWS ACM regions documentation](https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html).

- Open the [ACM console](https://console.aws.amazon.com/acm/home?region=us-east-1).
- Below **Provision Certificates**, click **Get Started**.
- If you already have a certificate, click **Import a certificate**.
- If you do not have a certificate already, make sure **Request a public certificate** is selected, and click **Request a certificate**. Proceed through the steps as described to create the appropriate certificate.

If you import a certificate, enter the appropriate values and proceed with the import. Continue with [Step 6](#step-6-wait-for-pending-validation-and-add-a-cname-at-your-registrar-step-6).

### Step 2: Request a public certificate

![request a public certificate](/img/docs/request-cert-acm-start.png)

### Step 3: Specify your domain name

![specify your domain name](/img/docs/request-cert-step-1.png)

### Step 4: Choose DNS validation

![choose dns validation](/img/docs/request-cert-step-2.png)

### Step 5: Add tags (optional)

![optionally add tags](/img/docs/request-cert-step-3.png)

### Step 5: Review

![review](/img/docs/request-cert-step-4.png)

Click **Confirm and request**.

### Step 6: Add a CNAME at your registrar and wait for pending validation

After you click **Confirm and request** in Step 5, you are at a screen pending validation as shown here:

![pending validation](/img/docs/request-cert-step-5.png)

For the validation to proceed, you must enter the CNAME information at the registrar site for your domain. Go to your registrar site, and use the CNAME information to add a `CNAME` record so ACM can validate that you own the domain. Here's an example of what this looks like for one registrar. The format for your registrar may differ.

![add a cname](/img/docs/request-cert-step-6.png)

### Step 7: Wait for issuance (approximately 30 minutes)

On the AWS site, wait for ACM to display the `CNAME` you added and issue the certificate. When this happens, you should see the status change:

![issued](/img/docs/request-cert-step-7.png)

If the validation is unsuccessful after 72 hours, the process times out. Repeat the steps, ensuring that your values are correct.

### Step 8: Copy the certificate ARN (Amazon Resource Name) for use with this CloudFormation stack

This ARN appears on the page where your certificate is issued, as shown here.

![certificate arn](/img/docs/request-cert-step-8.png)

## Update your domain's nameservers for your PayString domain

When you finish creating the CloudFormation Stack using our template, you next update your nameserver settings on your registrar to use Amazon's.

## Launch your stack

When you have requested or imported a certificate, and configured CNAME as described, you can create and launch the stack.

### Step 1: Create the stack

Click the button below.

[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://us-west-1.console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?templateURL=https://payid-server-template.s3-us-west-2.amazonaws.com/payid-stack.yaml&stackName=my-payid-server)

The **Create Stack** page opens. Select the defaults on the **Create stack** page and click **Next**. The **Specify stack details** page opens.

![specify stack details](/img/docs/stack-form.png)

Enter your stack name and your domain name, and click **Next**. Click through the pages, accepting the defaults.

To use the AWS command line, instead of the AWS console, to launch your stack, see [Launch with AWS Lambda using scripts](#launch-with-aws-lambda-using-scripts). You will achieve the same results using our scripts.

### Step 2: View the nameservers in the stack output, or go to Route53 in the AWS console and click on your hosted zone

If you're still on the CloudFormation page looking at the stack, the `Outputs` tab will list the nameservers you need to use.

![stack outputs](/img/docs/stack-outputs.png)

If you've already closed the tab or navigated away, you can find the same information in [Route53](https://console.aws.amazon.com/route53/v2/hostedzones).

Once you're on this page, click the domain you used in the stack template (in this example, `somedomainyouown.com`):

![hosted zones](/img/docs/hosted-zone-list.png)

### Step 3: Find the nameservers

Click the hosted zone to display the nameservers you need to use with your registrar:

![hosted zone nameservers](/img/docs/hosted-zone-nameservers.png)

### Step 4: Update your registrar with Amazon's nameservers

Paste the values you saw in the previous step into wherever your registrar allows you to change them. For example:

![registrar nameservers](/img/docs/registrar-nameservers.png)

## Test your PayString server

Use [PayString Validator](https://paystringvalidator.com/) to test your PayStrings.

## Launch with AWS Lambda using scripts

If you prefer not to use the AWS CLI, you can use these scripts to request a AWS certificate for your PayString domain and launch the lambda stack on your domain.

- [request-certificate.sh](https://github.com/xpring-eng/payid-lambda/blob/master/request-certificate.sh) - Request a certificate via AWS certificate manager for a given domain.
- [create-stack.sh](https://github.com/xpring-eng/payid-lambda/blob/master/create-stack.sh) - Create the PayString lambda stack on your account for a given domain.

### Prerequisites

- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
- Make sure `aws configure` has been configured with an Access Key created via [IAM--Your Security Credentials](https://console.aws.amazon.com/iam/home?region=us-east-1#/security_credentials).
- You must have a domain and the ability to configure DNS for your domain.

### Usage

#### Request a certificate

Command: `./request-certificate.sh <domain-name>`

Example:

```
$ ./request-certificate.sh hodl.payid.ml

Requesting certificate for hodl.payid.ml
Certificate requested. Please create the following CNAME record for your domain:
_09dee7696e4d458fb16fead080465035.hodl.payid.ml.	CNAME	_b1fddaad4657f8e03167be7b61dc3685.jfrzftwwjs.acm-validations.aws.
```

When the certificate request is completed, create the CNAME for your domain as specified in the output. You have to visit your registrar site, as described in [Steps 6 and 7](#step-6-pending-validation-and-adding-a-cname-at-your-registrar).

Wait for AWS Certificate Manager to issue your certificate before proceeding to the next command.

#### Launch the PayString Lambda stack

Command: `./create-stack.sh <domain-name>`

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

Once completed, update the nameservers for your domain to the ones specified in the output, as described in [Step 3 and 4](#step-3-find-the-nameservers).

## Add PayStrings to your Amazon S3 bucket

When the stack is created, an Amazon S3 bucket titled `{name of stack}-s3bucket-{unique hash}` is also created.

You can add PayStrings by uploading `json` files to this bucket, each of which contains a single user that conforms to [the PayString schema](paystring-schemas#example-single-user-schema). You can upload new files to the bucket via the [Amazon S3 console](https://s3.console.aws.amazon.com/s3/buckets/).

When the stack is created, a test account is provided at `testaccount.json`. The name of the file used to resolve the PayString--`testaccount.json`--is resolved by `mydomain.tld/testaccount`.

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

## Upgrade the AWS Lambda function

To see if there is a release with an upgraded AWS Lambda function, look for [releases](https://github.com/xpring-eng/payid-lambda/releases) with the file `payid-stack.yaml` attached.

The version you have installed is visible in the description of the stack in CloudFormation (for example, `[v1.0] PayString Lambda Server and API Gateway front end`) and also in the `Outputs` of the stack under the name `PayIdLambdaStackVersion`.

To perform an update, click the `Update` button when viewing the stack and upload the version of `payid-stack.yaml` to which you want to upgrade.

![update button](/img/docs/update-button.png)

![update button](/img/docs/update-form.png)

**Note**: This upgrade updates the AWS Lambda function, but it could also update other resources as well in the stack, including API Gateway, Amazon S3, and others. The release notes will outline changes if other resources are altered, but be sure to also look at the changelog to see if other resources may be impacted.
