function getRandomNumber(startNum: number, endNum: number): number {
    const randomRange = endNum - startNum + 1;
    return Math.floor(Math.random() * randomRange) + startNum;
}

function getRandomOperation(): string {
    const operations = ["+", "-", "*", "/"];
    return operations[getRandomNumber(0, 3)];
}

export {
    getRandomNumber,
    getRandomOperation
};