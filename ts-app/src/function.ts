/*
为函数定义类型：函数类型包含参数类型和返回值类型
注意：返回值类型是函数类型的必要部分，如果函数没有任何返回值，也必须指定返回值类型为void
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
};
//只要参数类型是匹配的，就认为是有效的函数类型，而不在乎参数名是否正确
let myAdd3: (baseValue: number, increment: number) => number = function(x: number, y: number): number {
    return x + y;
};
