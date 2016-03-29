(function () {
  'use strict';

  var projectBuilder = require('../project_builder');

  /**
   * No-op placeholder method, for handlers we don't need.
   *
   * @returns {void}
   */
  function noop () {
    // Do nothing.
  }

  /**
   * Configure the project by adding required files.
   *
   * @returns {void}
   */
  function configureLicense () {
    projectBuilder.addFile('LICENSE');
  }

  module.exports = {
    init: noop,
    prompt: noop,
    configure: configureLicense
  };
})();