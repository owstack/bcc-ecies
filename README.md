Bcccore ECIES
======

[![NPM Package](https://img.shields.io/npm/v/bcccore-ecies.svg?style=flat-square)](https://www.npmjs.org/package/bcccore-ecies)
[![Build Status](https://img.shields.io/travis/owstack/bcccore-ecies.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/bcccore-ecies)
[![Coverage Status](https://img.shields.io/coveralls/owstack/bcccore-ecies.svg?style=flat-square)](https://coveralls.io/r/owstack/bcccore-ecies)

A module for [bcccore][bcccore] that implements the [Elliptic Curve Integrated Encryption Scheme (ECIES)][ECIES]. Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.

See [the main bcccore repo](https://github.com/owstack/bcccore) or the [bcccore guide on ECIES](http://bcccore.io/guide/module/ecies/index.html) for more information.

Credit to [@ryanxcharles][ryan] for the original implementation.

## Attribution

This repository was created by copy forking [bitcore-ecies commit fa3e7f0](https://github.com/bitpay/bitcore-ecies/commit/fa3e7f0e0e47c9a6f5ec4e52e06ff8da45912b8c).

## Getting started

ECIES will allow to securely encrypt and decrypt messages using ECDSA key pairs (bitcoin cryptography).

```javascript
var alice = ECIES()
  .privateKey(aliceKey)
  .publicKey(bobKey.publicKey);

var message = 'some secret message';
var encrypted = alice.encrypt(message);

// encrypted will contain an encrypted buffer only Bob can decrypt

var bob = ECIES()
  .privateKey(bobKey)
  .publicKey(aliceKey.publicKey);
var decrypted = bob
  .decrypt(encrypted)
  .toString();
// decrypted will be 'some secret message'
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/bcccore/blob/master/CONTRIBUTING.md) on the main bcccore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/bcccore/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack. Bcccore is a trademark maintained by Open Wallet Stack.

[bcccore]: http://github.com/owstack/bcccore
[ECIES]: http://en.wikipedia.org/wiki/Integrated_Encryption_Scheme
[ryan]: http://github.com/ryanxcharles
