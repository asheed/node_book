/**
 * Created by woojin on 2017-07-07.
 */
var os = require('os');

console.log('시스템의 hostname : %s', os.hostname());
console.log('시스템의 메모리 : %d GB / %d GB', os.freemem()/1024/1024/1024, os.totalmem()/1024/1024/1024);
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());