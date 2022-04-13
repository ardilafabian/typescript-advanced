let unknownVar: unknown;

unknownVar = true;
unknownVar = undefined;
unknownVar = null;

// unknownVar.doSomething()
// unknownVar.toUppercase()

const parse = (str: string): unknown => {
    return JSON.parse(str);
}
