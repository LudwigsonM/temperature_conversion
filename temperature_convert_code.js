function fToC(temp){
    const Cel = (temp - 32) * 5 / 9;
    const message = `${temp} ${Cel}`;
    return(message);
}

const F = 100
console.log(fToC(F))