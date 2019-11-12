interface SquareConfig {
    color?: string; // ?号表示可选属性。可选属性的好处:1.可以对可能存在的属性进行预定义2.可以捕获引用了不存在的属性时的错误
    width?: number;
}
/**
 * 类型检查器不会去检查属性的顺序，只要相应地属性存在并且类型也是对的就可以。
 * @param config
 */
function createSquare(config: SquareConfig): { color: string; area: number } {
    console.log('config::', config); //config:: { color: 'black' }
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: 'black' });
console.log('mySquare::', mySquare); // mySquare:: { color: 'black', area: 100 }
/*
只读属性
*/
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
console.log('p1::', p1); //p1:: { x: 10, y: 20 }
//p1.x=5; //[ts] 无法分配到“x”，因为它是常数或只读属性。
