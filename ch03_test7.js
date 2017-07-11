/**
 * Created by woojin on 2017-07-11.
 */
// 객체 생성
var Person = {
    age: 20,
    name: '소녀시대',
    add: function (a, b) {
        return a + b;
    }
};

console.log('더하기 : %d', Person.add(10, 20));