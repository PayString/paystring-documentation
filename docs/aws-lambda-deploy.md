---
id: aws-lambda-deploy
title: Deploy a PayID Server on AWS Lambda
sidebar_label: Deploy a PayID Server on AWS Lambda
---

You can deploy a PayID server on AWS Lambda, a setup that allows you to run code without having to deploy or manage a server.

## Requirements

To deploy PayID server on AWS Lambda, you need the following:

- An AWS account.
- A domain, which you control, to use for your PayIDs. This domain will be part of each PayID. **After the stack is added**, you'll have to update your domain to use Amazon's name servers in the Route53 hosted zone that's created for you.
- A certificate imported into Amazon Certificate Manager in the `us-east-1` region.
- A `json` file containing the PayIDs that you want to upload to the S3 (Amazon Simple Storage Service) bucket created by the stack.

Here is an example form:

![stack form](/img/docs/stack-form.png)
