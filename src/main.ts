// main.ts


const developer = 'Developer';

export function hello(who: string = developer): string {
    return `Hello, ${who}`;
}

let result: string = hello();
console.log(result);
