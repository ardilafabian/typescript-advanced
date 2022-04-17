// Fabi => [F,a,b,i] | String => string[]
// [F,a,b,i] => Fabi

function parseStr(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join('') // string
    } else {
        return input.split(''); // string[]
    }
}

// para la repsuesta debemos validar primero el tipo SIEMPRE
const rta = parseStr('Fabi');
console.log('rtaArray', 'Fabi =>', rta);

const rta2 = parseStr(['F', 'a', 'b', 'i']);
console.log('rtaStr', "['F', 'a', 'b', 'i'] =>", rta2);
