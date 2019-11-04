/**
 * Demo: es6语法
 */
let param = {
    a: 'hello',
    c: 'yarn',
};
let param2 = {
    b: 'typescript',
};
Object.assign(param, param2);
console.log('param::', param);
/**
 * 1.基础类型
 */
//布尔值
let isDone: boolean = false;
//数字
let age: number = 37;
//字符串
let name: string = `Gene`;
//模板字符串
let sentence: string = `Hello, my name is ${name}.
I'll be ${age + 1} years old next month.`;
console.log('sentence::', sentence);
//数组
let list: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];
let x: [string, number];
x = ['hello', 10];
x[3] = 'world';
console.log('x::', x); //x:: [ 'hello', 10, <1 empty item>, 'world' ]
//元组Tuple
let x2: [string, number];
x2 = ['hello', 10];
x2[3] = 'world'; //当给元素赋值时，可以接受(string | number)类型
console.log('x2::', x2);
//枚举
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;
console.log('c::', c); //c:: 1,默认从0开始

enum Color2 {
    Red,
    Green = 6,
    Blue,
} //数字型可以只初始化一个，其他类型不能只初始化一个
let c2: Color2 = Color2.Red;
console.log('c2::', c2); //c2:: 0
console.log('--------------------');
let c2_1: Color2 = Color2.Blue;
console.log('c2_1::', c2_1); //c2_1:: 7
console.log('--------------------');
let colorName: string = Color2[6];
console.log('colorName::', colorName); //colorName:: Green

enum Color3 {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
}
let c3: Color3 = Color3.Red;
console.log('c3::', c3); //c3:: red
console.log('--------------------');
let colorName2: string = Color3[2];
console.log('colorName2::', colorName2); //colorName2:: undefined
//any
//有时候需要为那些在编程阶段还不清楚类型的变量指定一个类型，这些值可能来自于动态的内容。
//这种情况下，可以使用any类型来标记这些变量，从而使这些变量在编译阶段通过类型检查器的检查。
let notSure: any = 4;
notSure = true;
notSure = undefined;
console.log('notSure::', notSure); //notSure:: undefined
notSure = null;
console.log('notSure::', notSure); //notSure:: null
//使用any类型定义一个包含了不同类型的数据
let arr: any[] = [1, true, 'free'];
//void
//void表示没有任何类型。当一个函数没有返回值时，使用void；当一个变量声明为void类型时，它的值只能是undefined或null
function warnUser(): void {
    console.log('This is a warning message');
}
/**
 * 2.变量声明
 */
/**
 * setTimeout 0 的作用
 * JavaScript 引擎是单线程处理任务的。它把任务放到队列中，不会同步去执行，必须在完成一个任务后才开始另外一个任务。
 * 正常情况下javascript都是按照顺序执行的。但是我们可能让该语句后面的语句执行完再执行本身，这时就可以用到setTimeout延时0ms来实现了。
 * alert(1);
 * setTimeout("alert(2)", 0);
 * alert(3);
 * alert(4);
 * 虽然延时了0ms,但是执行顺序为：1, 3, 4, 2
 * 这样就保证setTimeout里面的语句在某一代码段中最后执行。
 */

// for(var i=0;i<10;i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 100*i);
// }
/*
结果：
10
10
10
10
10
10
10
10
10
10
*/
// for (let i = 0; i < 10; i++) {
//     //当let声明出现在循环体里时，不仅是在循环里引入了一个新的变量环境，而是针对每次迭代都会创建这样一个新作用域。
//     setTimeout(() => {
//         console.log(i);
//     }, 100 * i);
// }
/*结果：
0
1
2
3
4
5
6
7
8
9
*/
//展开操作符
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log('bothPlus::', bothPlus);

let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
let search = { food: 'rich', ...defaults };
console.log('search::', search); //{ food: 'spicy', price: '$$', ambiance: 'noisy' }
