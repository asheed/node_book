/**
 * Created by woojin on 2017-07-11.
 */
var Person = {};

Person["age"] = 20;
Person["name"] = '소녀시대';
Person.mobile = '010-1000-1004';
Person.add = function (a, b) {
    return a + b;
}

console.log('더하기 : %d', Person.add(10, 20));