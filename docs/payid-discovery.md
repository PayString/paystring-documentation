---
id: payid-discovery
title: Discover a PayID
sidebar_label: Discover a PayID
---

The PayID Discovery endpoint facilitates finding the PayID URI for a given PayID.

## PayID discovery by a wallet application

Suppose Alice wants to send Bob some XRP from a web-based wallet provider that Alice has an account on. Alice logs in to the wallet provider and enter Bob's PayID, such as `bob$receiver.example.com`, into the wallet UI to start the payment. If the wallet application is set up to use the PayID Discovery endpoint, the wallet application performs a WebFinger query that looks for the PayID Discovery service provider, like this:

```
GET /.well-known/webfinger?resource=payid%3Abob%24receiver.example.com
HTTP/1.1
Host: receiver.example.com
```

If the server for Bob's exchange, where Bob receives currency, supports the PayID Discovery endpoint, it responds like this:

```
 HTTP/1.1 200 OK
 Access-Control-Allow-Origin: *
 Content-Type: application/jrd+json

 {
   "subject" : "payid:bob$receiver.example.com",
   "links" :
   [
     {
       "rel": "https://payid.org/ns/payid-uri-template/1.0",
       "template": "https://receiver.example.com/users/{acctpart}"
     }
   ]
 }
```

Alice's wallet can then use the URL template found in the "template" property to assemble the specified PayId URL. Typically, this template might add a folder structure to the URL, such as `https://receiver.example.com/users/bob`. The server can be set up to use other URL formats, so long as the resulting URL is valid and represents Bob's PayID.

## PayID discovery with a default template

In this case, Alice's wallet application makes the same request as previously, but Bob's server does not support Webfinger, and returns `HTTP/1.1 404 NOT FOUND`.

The wallet application then uses a default template to transform `bob$receiever.example.com`
to `https://receiver.example.com/bob`. The wallet then uses this URL to continue making the payment. Alice's wallet proceeds to make the payment.
