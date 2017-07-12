/**
 * Created by woojin on 2017-07-12.
 */
var Users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}];
console.log('unshift() 호출 전 배열 요소의 수 : %d', Users.length);

// 각 배열의 요소마다, 아래 함수가 실행됨.
Users.forEach(function (item, index) {
    console.log('배열 요소 #' + index + ' : %s', item.name);
});

Users.unshift({name:'티아라', age:23});
console.log('unshift() 호출 후 배열 요소의 수 : %d', Users.length);

// 각 배열의 요소마다, 아래 함수가 실행됨.
Users.forEach(function (item, index) {
    console.log('배열 요소 #' + index + ' : %s', item.name);
});

Users.shift();
console.log('shift() 호출 후 배열 요소의 수 : %d', Users.length);

// 각 배열의 요소마다, 아래 함수가 실행됨.
Users.forEach(function (item, index) {
    console.log('배열 요소 #' + index + ' : %s', item.name);
});