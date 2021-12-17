
export function generateRandomSelection(
  images: any[],
  numFlagsShown: number,
  lastThree: number[],
){
  // console.log(`images = ${JSON.stringify(images)}`);
  let selectFromThese = Array.from(Array(images.length).keys());
  // console.log(`selectFromThese before removal = ${
  //  JSON.stringify(selectFromThese.map((i)=>{
  //    if(i<0){
  //      return i;
  //    } else {
  //      return images[i].name;
  //    }
  //  }))}`);
  const skipThese:number[] = [...lastThree];
  skipThese.sort((a,b)=>{return (a<b)?1:-1;});
  // console.log(`skipThese = ${skipThese} from ${selectFromThese}`);
  for(let prev of skipThese){
    if(prev >= 0 && selectFromThese.length > numFlagsShown){
      // console.log(`remove ${prev} as an option`);
      // console.log(`selectFromThese was = ${JSON.stringify(selectFromThese)}`);
      selectFromThese.splice(prev, 1);
      // console.log(`selectFromThese becomes = ${JSON.stringify(selectFromThese)}`);
    }
  }
  // console.log(`selectFromThese after removal = ${
  //  JSON.stringify(selectFromThese)}`);
  // console.log(`selectFromThese after removal = ${
  //  JSON.stringify(selectFromThese.map((i)=>{
  //    if(i<0){
  //      return i;
  //    } else {
  //      return images[i].name;
  //    }
  //  }))}`);
  const selectFromCount = selectFromThese.length;
  const indicesToShow: number[] = [];
  const randsSelected: number[] = [];

  for(let i = 0; i < numFlagsShown; i = i + 1){
    let randNum = Math.random();
    randNum = Math.floor(randNum * (selectFromCount - i));
    // console.log(`randNum = ${randNum}`);
    let sorted:number[] = [...randsSelected];
    sorted.sort((a,b)=>{return a<b?-1:1});
    // console.log(`sorted = ${sorted}`);
    for(let j = 0; j < i; j = j + 1){
      // console.log(`check ${randNum} against ${sorted[j]}`);
      if(randNum >= sorted[j]){
        // console.log(`${randNum} >= ${sorted[j]} so add one`);
        randNum = randNum + 1;
      }
    }
    randsSelected.push(randNum);
    // console.log(`randsSelected = ${randsSelected}`);
    indicesToShow.push(selectFromThese[randNum]);
    // console.log(`indicesToShow = ${indicesToShow}`);
  }

  //console.log(`indicesToShow = ${
  //  JSON.stringify(indicesToShow)
  //}`);
  //console.log(`indicesToShow = ${
  //  JSON.stringify(indicesToShow.map((i)=>{
  //    if(i<0){
  //      return i;
  //    } else {
  //      return images[i].name;
  //    }
  //  })
  //)}`);
  let correctOne = 0;
  while(true){
    correctOne = Math.floor(Math.random() * numFlagsShown);
    const entry = lastThree.find((i)=>{ 
      return i === indicesToShow[correctOne]; 
    });
    if( entry !== undefined ){
      continue;
    } else {
      break;
    }
  }
  // console.log(`correctOne = ${correctOne}`);
  const correctIdx = indicesToShow[correctOne];
  // console.log(`correctIdx = ${correctIdx}`);
  // console.log(`correctIdx = ${correctOne}, lastThree = ${lastThree}`);
  lastThree.push(correctIdx);
  lastThree.splice(0, 1);
  //console.log(`lastThree = ${JSON.stringify(lastThree.map((i)=>{
  //  if(i<0){
  //    return i;
  //  } else {
  //    return images[i].name;
  //  }
  //}))}`);
  const correctIndex = images[correctIdx].name;
  // console.log(`correctIndex = ${correctIndex}`);

  return {
    indicesToShow: indicesToShow,
    correctIndex: correctIndex,
  };
}