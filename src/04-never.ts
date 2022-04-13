const withoutEnd = () => {
    while (true) {
        console.log('Nunca pares de aprender')
    }
}


const fail = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'es un string';
    } else if (Array.isArray(input)) {
        return 'es un array';
    }
    return fail('no match');
}

console.log(example('hola'));
console.log(example([1,2,3,4,5]));
console.log(example(123456));
console.log(example('Hola despues del fail'));
