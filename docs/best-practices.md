---
id: payid-best-practices
title: PayID Security Best Practices
sidebar_label: PayID Security Best Practices
---

The PayID protocol is flexible and supports a wide range of implementations. To ensure security, follow these best practices.

## Private API

The Private PayID API does not currently include authentication. Therefore, this API **MUST** only be exposed to trusted IP ranges, and **MUST NOT** be exposed publicly.

## Use TLS (Transport Layer Security) 1.3

To ensure security, both the PayID client and the PayID server must use the latest TLS 1.3, as described in [RFC 8446](https://tools.ietf.org/html/rfc8446). TLS 1.3 is faster and safer than its predecessors, and offers these advantages:

- Reduces handshake latency
- Encrypts more of the handshake
- Improves resiliency to cross-protocol attacks
- Removes legacy features

**Note:** TLS 1.3 (RFC 8446) and its implementations provide considerable flexibility in the selection of cipher suites. Cryptographic algorithms weaken over time as cryptanalysis improves: algorithms that are considered strong today may become weak tomorrow. Therefore, you must prepare to phase out such algorithms over time, and replace with more secure cipher suites as those become available.

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
