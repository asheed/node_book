/**
 * Created by woojin on 2017-07-11.
 */
var Users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}, {name:'티아라', age:23}];

console.log('배열 요소의 수 : %d 개', Users.length);
for (var i = 0; i < Users.length; i++) {
    console.log('배열 요수 #' + i + ' : %s', Users[i].name);
}

console.log('\nforEach 구문 사용하기');
// 각 배열의 요소마다, 아래 함수가 실행됨.
Users.forEach(function (item, index) {
    console.log('배열 요소 #' + index + ' : %s', item.name);
})