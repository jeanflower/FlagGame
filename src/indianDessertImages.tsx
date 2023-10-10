import Barfi from './indianDeserts/Barfi.png';
import GulabJamun from './indianDeserts/GulabJamun.png';
import Halwa from './indianDeserts/Halwa.png';
import Jalebi from './indianDeserts/Jalebi.png';
import KesarPeda from './indianDeserts/KesarPeda.png';
import Kheer from './indianDeserts/Kheer.png';
import Kulfi from './indianDeserts/Kulfi.png';
import Laddoo from './indianDeserts/Laddoo.png';
import MishtiDoi from './indianDeserts/MishtiDoi.png';
import MysorePak from './indianDeserts/MysorePak.png';
import Rabri from './indianDeserts/Rabri.png';
import Rasagola from './indianDeserts/Rasagola.png';
import RasMalai from './indianDeserts/RasMalai.png';
import SoanPapdi from './indianDeserts/SoanPapdi.png';

export let images:{
  level: number,
  image: any,
  name: string,
}[] = [];

images.push({level: 0, image: Barfi, name: 'Barfi' });
images.push({level: 0, image: GulabJamun, name: 'Gulab Jamun' });
images.push({level: 0, image: Halwa, name: 'Halwa' });
images.push({level: 0, image: Jalebi, name: 'Jalebi' });
images.push({level: 0, image: KesarPeda, name: 'Kesar Peda' });
images.push({level: 0, image: Kheer, name: 'Kheer' });
images.push({level: 0, image: Kulfi, name: 'Kulfi' });
images.push({level: 0, image: Laddoo, name: 'Laddoo' });
images.push({level: 0, image: MishtiDoi, name: 'Mishti Doi' });
images.push({level: 0, image: MysorePak, name: 'Mysore Pak' });
images.push({level: 0, image: Rabri, name: 'Rabri' });
images.push({level: 0, image: Rasagola, name: 'Rasagola' });
images.push({level: 0, image: RasMalai, name: 'Ras Malai' });
images.push({level: 0, image: SoanPapdi, name: 'Soan Papdi' });

export function getIndianDessertImages(level: number): {
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
  'Barfi',
  'Gulab Jamun',
  'Halwa',
  'Jalebi',
  'Kesar Peda',
  'Kheer',
  'Kulfi',
  'Laddoo',
  'Mishti Doi',
  'Mysore Pak',
  'Rabri',
  'Rasagola',
  'Ras Malai',
  'Soan Papdi',
];

let result1 = '';
let result2 = '';
for(const name of names){
  const fileName = name.replace(' ', '');
  const varName = fileName;
  result1 += `import ${varName} from './indianDeserts/${fileName}.png';\n`;
  result2 += `images.push({level: 0, image: ${varName}, name: '${name}' });\n`;
}
console.log(result1);
console.log(result2);
*/