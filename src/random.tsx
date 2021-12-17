
export function generateRandomSelection(
  images: any[],
  numFlagsShown: number,
){
  const numFlagsTotal = images.length;
  const numbersSelected: number[] = [];

  for(let i = 0; i < numFlagsShown; i = i + 1){
    let randNum = Math.random();
    randNum = Math.floor(randNum * (numFlagsTotal - i));
    // console.log(`randNum = ${randNum}`);
    let sorted:number[] = [];
    sorted = sorted.concat(numbersSelected);
    sorted.sort((a,b)=>{return a<b?-1:1});
    // console.log(`sorted = ${sorted}`);
    for(let j = 0; j < i; j = j + 1){
      // console.log(`check ${randNum} against ${sorted[j]}`);
      if(randNum >= sorted[j]){
        // console.log(`${randNum} >= ${sorted[j]} so add one`);
        randNum = randNum + 1;
      }
    }
    numbersSelected.push(randNum);
    // console.log(`numbersSelected = ${numbersSelected}`);
  }
  // console.log(numbersSelected);

  const correctOne = Math.floor(Math.random() * numFlagsShown);
  const correctPlace = images[numbersSelected[correctOne]].name;
  return {
    numbersSelected: Array.from(numbersSelected),
    correctPlace: correctPlace,
  };
}