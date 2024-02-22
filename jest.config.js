/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {

    testEnvironment: "jsdom",
  
  };
  
  module.exports = {
    "testEnvironment": "jsdom",
    globals: {
       TextEncoder: require('util').TextEncoder,
       TextDecoder: require('util').TextDecoder,
       config
    }
  } 