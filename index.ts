function Greet(): string {
    return "Welcome in the world of TypeScript";
}

let ans: string = Greet();

console.log(ans);

let sales: number = 12;
let course: string = 'TypeScript';
let is_published: boolean = true;

console.log(sales + ' ' + course + ' ' + is_published);

function calculator(num1: number, num2: number, operation: string): number{
    let ans: number = 0;
    
    if(operation === '+'){
        ans = num1 + num2;
    }

    else if(operation === '-'){
        ans = num1 - num2;
    }

    else if(operation === '*'){
        ans = num1 * num2;
    }

    else if(operation === '/'){
        ans = num1 / num2;
    }
    
    return ans;
}

console.log(calculator(1, 2, '*'));
console.log(calculator(2, 4, '+'));
console.log(calculator(4, 2, '/'));
console.log(calculator(9, 3, '-'));

function vote(age: number): boolean{
    if(age >= 18){
        return true;
    }

    return false;
}

let myAge: boolean = vote(19);

if(myAge === true){
    console.log('You are eligible for voting.');
}

else{
    console.log('You are not eligible for voting.');
}