const calcAverage = (a,b,c)=>{
    return (a+b+c)/3;
}
let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(22,34,27);

const checkWinner = (avgDolphins,avgKoalas)=>{
    if(avgDolphins >= 2*avgKoalas) console.log(`Dolhins win (${avgDolphins} vs ${avgKoalas})`);
    else if(avgKoalas >= 2* avgDolphins) console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    else console.log('No team Wins...');
}

//Test Team 1
checkWinner(avgDolphins,avgKoalas);