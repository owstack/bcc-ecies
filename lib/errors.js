'use strict';

var spec = {
  name: 'ECIES',
  message: 'Internal Error on bcc-ecies Module {0}',
  errors: [{
    name: 'InvalidPadding',
    message: 'Invalid padding: {0}'
  }]
};


module.exports = require('bcc-lib').errors.extend(spec);

