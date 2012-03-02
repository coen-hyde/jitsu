/*
 * usage.js: Text for `jitsu help`.
 *
 * (C) 2010, Nodejitsu Inc.
 *
 */
 
var colors = require('colors');

module.exports = [
  '          ___  __'.cyan,
  '    /  /  /   /_  /  /'.cyan,
  ' __/  /  /   __/ /__/'.cyan,
  '',

  'Flawless deployment of Node.js apps to the cloud',
  'open-source and fully customizable.',
  'https://github.com/nodejitsu/jitsu',
  '',

  'Usage:'.cyan.bold.underline,
  '',
  '  jitsu <resource> <action> <param1> <param2> ...',
  '',

  'Common Commands:'.cyan.bold.underline,
  '',

  'To install a pre-built application'.cyan,
  '  jitsu install',
  '',

  'To sign up for Nodejitsu'.cyan,
  '  jitsu signup',
  '',

  'To log into Nodejitsu'.cyan,
  '  jitsu login',
  '',

  'Deploys current path to Nodejitsu'.cyan,
  '  jitsu deploy',
  '',

  'Creates a new application on Nodejitsu'.cyan,
  '  jitsu create',
  '',

  'Lists all applications for the current user'.cyan,
  '  jitsu list',
  '',

  'Additional Commands'.cyan.bold.underline,
  '  jitsu apps',
  '  jitsu logs',
  '  jitsu env',
  '  jitsu conf',
  '  jitsu users',
  '  jitsu databases',
  '  jitsu snapshots',
  '  jitsu logout'
];