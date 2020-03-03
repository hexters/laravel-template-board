window._ = require('lodash');

try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');
  require('bootstrap');
  require('@fortawesome/fontawesome-free/js/all');
  
} catch (e) {}