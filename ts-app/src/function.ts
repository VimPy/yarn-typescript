/*
为函数定义类型：函数类型包含参数类型和返回值类型
注意：返回值类型是函数类型的必要部分，如果函数没有任何返回值，也必须指定返回值类型为void
ts中函数的形参个数和实参个数必须一致。
*/
function add(x: number, y: number): number {
    //定义函数的返回值类型为number
    return x + y;
}
let myAdd = function(x: number, y: number): number {
    return x + y;
}; //匿名函数

//书写函数的完整类型，函数和返回值类型之前使用=>
let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
}; // 定义一个变量myAdd2,其类型是函数--->(x: number, y: number) => number，对应的es5为：(function(x,y){return number;})
//只要参数类型是匹配的，就认为是有效的函数类型，而不在乎参数名是否正确
let myAdd3: (baseValue: number, increment: number) => number = function(x: number, y: number): number {
    return x + y;
};
//函数的可选参数.注意：可选参数必须跟在必须参数后面。
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + '' + lastName;
    } else {
        return firstName;
    }
}
//函数的默认参数。当没有传这个参数或传的是undefined时使用默认值。带默认值的参数不需要放在必须参数的后面。
function buildName2(firstName: string, lastName = 'Smith') {
    return firstName + '' + lastName;
}
/* 函数buildName和buildName2共享同样的类型(firstName: string, lastName?: string) => string */

//剩余参数。剩余参数可以一个都没有，也可以有任意个
function buildName3(firstName: string, ...restOfName: string[]) {
    //join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
    return firstName + '' + restOfName.join(' ');
}
let employeeName = buildName3('Joseph', 'Samuel', 'Lucas', 'Mackinzie');
console.log('employeeName::', employeeName); // employeeName:: JosephSamuel Lucas Mackinzie
let buildNameFn: (fname: string, ...rest: string[]) => string = buildName3;

//===========================this和箭头函数==============================================
/*
JS里，this的值在函数被调用的时候才会指定。
顶级的非方法式调用会将this视为window。（注意：在严格模式下，this为undefined而不是window）
箭头函数能保存函数创建时的this值，而不是调用时的值。
*/
