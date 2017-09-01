'use strict';

var spec = {
  name: 'ECIES',
  message: 'Internal Error on bcccore-ecies Module {0}',
  errors: [{
    name: 'InvalidPadding',
    message: 'Invalid padding: {0}'
  }]
};


module.exports = require('bcccore-lib').errors.extend(spec);

