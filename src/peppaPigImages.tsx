import CandyCat from './PeppaPigChars/CandyCat.png';
import DaddyPig from './PeppaPigChars/DaddyPig.png';
import GeorgePig from './PeppaPigChars/GeorgePig.png';
import GrampyRabbit from './PeppaPigChars/GrampyRabbit.png';
import GrandpaPig from './PeppaPigChars/GrandpaPig.png';
import GrannyPig from './PeppaPigChars/GrannyPig.png';
import MummyPig from './PeppaPigChars/MummyPig.png';
import RebeccaRabbit from './PeppaPigChars/RebeccaRabbit.png';
import SuzieSheep from './PeppaPigChars/SuzieSheep.png';
import ZoeZebra from './PeppaPigChars/ZoeZebra.png';

export let images:{
  level: number,
  image: any,
  name: string,
}[] = [];

images.push({level: 0, image: CandyCat, name: 'Candy Cat' });
images.push({level: 0, image: DaddyPig, name: 'Daddy Pig' });
images.push({level: 0, image: GeorgePig, name: 'George Pig' });
images.push({level: 0, image: GrampyRabbit, name: 'Grampy Rabbit' });
images.push({level: 0, image: GrandpaPig, name: 'Grandpa Pig' });
images.push({level: 0, image: GrannyPig, name: 'Granny Pig' });
images.push({level: 0, image: MummyPig, name: 'Mummy Pig' });
images.push({level: 0, image: RebeccaRabbit, name: 'Rebecca Rabbit' });
images.push({level: 0, image: SuzieSheep, name: 'Suzie Sheep' });
images.push({level: 0, image: ZoeZebra, name: 'Zoe Zebra' });

export function getPeppaPigImages(level: number): {
  level: number,
  image: any,
  name: string,
}[]{
  return images.filter((im)=>{
    return im.level <= level;
  })
}
/*
const names = [
  'Candy Cat',
  'Daddy Pig',
  'George Pig',
  'Grampy Rabbit',
  'Grandpa Pig',
  'Granny Pig',
  'Mummy Pig',
  'Rebecca Rabbit',
  'Suzie Sheep',
  'Zoe Zebra',
];

let result1 = '';
let result2 = '';
for(const name of names){
  const fileName = name.replace(' ', '');
  const varName = fileName;
  result1 += `import ${varName} from './PeppaPigChars/${fileName}.png';\n`;
  result2 += `images.push({level: 0, image: ${varName}, name: '${name}' });\n`;
}
console.log(result1);
console.log(result2);
*/