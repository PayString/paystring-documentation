---
id: payid-best-practices
title: Security Requirements and Best Practices
sidebar_label: Security Requirements and Best Practices
---

The PayID protocol is flexible and supports a wide range of implementations. To ensure security, follow these best practices.

## Requirements

When implementing PayID, you must meet the following requirements.

### Limit Private API exposure

The [Private PayID API](https://api.payid.org/?version=latest#7a19329b-80eb-451f-bbb8-d9656892a788) does not currently include authentication. Therefore, this API **MUST** only be exposed to trusted IP ranges, and **MUST NOT** be exposed publicly.

### Set CORS (Cross-Origin Resource Sharing) Headers

PayID servers should be easily accessible. To allow browser scripts to hit a PayID server, you should set the following CORS headers.

The PayID reference implementation server already sets these headers, but if you are rolling your own implementation or using a reverse proxy like nginx, you should ensure these headers are set or passed through.

```http
Access-Control-Allow-Origin: '*'
Access-Control-Allow-Methods: 'POST, GET, OPTIONS'
Access-Control-Allow-Headers: 'PayID-Version'
Access-Control-Expose-Headers: 'PayID-Version, PayID-Server-Version'
```

If you want to verify whether CORS is correctly set up for your PayID server, you can modify the following HTML file to point to your PayID server, open it up in a web browser, and inspect the console.

```html
<html>
  <script>
    const headers = new Headers()
    headers.append('Accept', 'application/xrpl-mainnet+json')
    headers.append('PayID-Version', '1.0')

    fetch(new Request('https://xpring.money/alice'), {
      method: 'GET',
      headers,
      mode: 'cors',
    })
      .then((response) => response.json())
      .then(console.log)
  </script>
</html>
```

### Cache-Control

Because the PayID server deals with payment addresses, you want to ensure that payment addresses don't get cached. That way, the payment address is always up to date, and money won't be set to the incorrect address.

The PayID reference implementation server already sets this header, but if you are rolling your own implementation or using a reverse proxy like nginx, you should ensure this header is set or passed through.

```http
Cache-Control: no-store
```

### Use TLS 1.3

As stated in the requirements, your implementation of PayID must use TLS. To ensure security, both the PayID client and the PayID server should use the latest TLS 1.3, as described in [RFC 8446](https://tools.ietf.org/html/rfc8446). TLS 1.3 is faster and safer than its predecessors, and offers these advantages:

- Reduces handshake latency
- Encrypts more of the handshake
- Improves resiliency to cross-protocol attacks
- Removes legacy features

**Note:** TLS 1.3 (RFC 8446) and its implementations provide considerable flexibility in the selection of cipher suites. Cryptographic algorithms weaken over time as cryptanalysis improves: algorithms that are considered strong today may become weak tomorrow. Therefore, you must prepare to phase out such algorithms over time, and replace with more secure cipher suites as those become available.

## Best practices for PayID implementation

The following best practices are strongly recommended.

### Harden Docker

Consider adding further Docker hardening steps, such as using the `no-new-privileges` security option to help prevent privilege escalation attacks through the misuse of `setuid` and `setgid` programs.

### Recommendations for open-source implementation libraries

Many open-source implementation libraries support TLS 1.3. See the comprehensive list [on Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_TLS_implementations).

Use an existing library rather than rolling your own implementation.

Among the various options available, use an Elliptic-Curve Cryptography (ECC) implementation for these reasons:

- Short keys: ECC provides greater security for a given key-size.

- Better performance: The smaller key size also makes possible more compact implementations for a given level of security. This means faster cryptographic operations. ECC has very fast key generation and signature algorithms.

- Efficient implementations: ECC exponentiation operations have extremely efficient, compact hardware implementations available, and these offer potential reductions in the implementation footprint even beyond those due to the smaller key length alone.

#### Key exchange recommendations

Use the Elliptic-Curve-Diffie-Hellman (ECDH) key exchange in ephemeral mode as it provides forward secrecy, as explained in [RFC 8442, Section 7.4.2](https://tools.ietf.org/html/rfc8446#section-7.4.2). Use one of the following curves:

- secp256r1 or NIST P-256 (must be supported for key exchange for any TLS-compliant application)

- X25519 (should be supported for key exchange for any TLS-compliant application)

Each of these curves provides a 128-bit security level. For a 192-bit security level, use curve secp384r1.

**Note:** Arguably, the extra security provided by P-384 is unnecessary, because the more efficient P-256 curve already provides security that cannot be broken through a sufficiently large accumulation of computing power.

#### Digital signature algorithm recommendations

Use one of the following digital signature algorithms:

- ecdsa_secp256r1_sha256 (This digital signature algorithm must be supported by any TLS-compliant application.)
- ecdsa_secp384r1_sha384

#### Cipher suites recommendations

Use one of the following cipher suites:

- TLS_AES_128_GCM_SHA256 (This cipher suite must be implemented for any TLS-compliant application.)

- TLS_AES_256_GCM_SHA384 and TLS_CHACHA20_POLY1305_SHA256 (these are SHOULD be implemented cipher suites )

#### Additional Recommendations

Do not use the 0-RTT (Zero Round Trip Time Resumption (0-RTT) mode of operation. 0-RTT encryption keys do not provide
full-forward secrecy, and the server cannot guarantee uniqueness of the handshake (non-replayability) without keeping potentially undue amounts of state. See [RFC 8446, Appendix E.1.3](https://tools.ietf.org/html/rfc8446#appendix-E.1.3).
