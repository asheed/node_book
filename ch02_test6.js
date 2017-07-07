/**
 * Created by woojin on 2017-07-07.
 */
var nconf = require('nconf');
nconf.env();

console.log('NODE_PATH변수의 값 : %s', nconf.get('NODE_PATH'));