import A from './BSL/A.png';
import B from './BSL/B.png';
import C from './BSL/C.png';
import D from './BSL/D.png';
import E from './BSL/E.png';
import F from './BSL/F.png';
import G from './BSL/G.png';
import H from './BSL/H.png';
import I from './BSL/I.png';
import J from './BSL/J.png';
import K from './BSL/K.png';
import L from './BSL/L.png';
import M from './BSL/M.png';
import N from './BSL/N.png';
import O from './BSL/O.png';
import P from './BSL/P.png';
import Q from './BSL/Q.png';
import R from './BSL/R.png';
import S from './BSL/S.png';
import T from './BSL/T.png';
import U from './BSL/U.png';
import V from './BSL/V.png';
import W from './BSL/W.png';
import X from './BSL/X.png';
import Y from './BSL/Y.png';
import Z from './BSL/Z.png';

export let images:{
  level: number,
  image: any,
  name: string,
}[] = [];

images.push({level: 0, image: A, name: 'A' });
images.push({level: 0, image: B, name: 'B' });
images.push({level: 0, image: C, name: 'C' });
images.push({level: 0, image: D, name: 'D' });
images.push({level: 0, image: E, name: 'E' });
images.push({level: 0, image: F, name: 'F' });
images.push({level: 0, image: G, name: 'G' });
images.push({level: 0, image: H, name: 'H' });
images.push({level: 0, image: I, name: 'I' });
images.push({level: 0, image: J, name: 'J' });
images.push({level: 0, image: K, name: 'K' });
images.push({level: 0, image: L, name: 'L' });
images.push({level: 0, image: M, name: 'M' });
images.push({level: 0, image: N, name: 'N' });
images.push({level: 0, image: O, name: 'O' });
images.push({level: 0, image: P, name: 'P' });
images.push({level: 0, image: Q, name: 'Q' });
images.push({level: 0, image: R, name: 'R' });
images.push({level: 0, image: S, name: 'S' });
images.push({level: 0, image: T, name: 'T' });
images.push({level: 0, image: U, name: 'U' });
images.push({level: 0, image: V, name: 'V' });
images.push({level: 0, image: W, name: 'W' });
images.push({level: 0, image: X, name: 'X' });
images.push({level: 0, image: Y, name: 'Y' });
images.push({level: 0, image: Z, name: 'Z' });

export function getBSLImages(level: number): {
  level: number,
  image: any,
  name: string,
}[]{
  // console.log('in getBSLImages');
  return images.filter((im)=>{
    return im.level <= level;
  })
}
/*
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

let result1 = '';
let result2 = '';
for(const letter of alphabet){
  result1 += `import ${letter} from './BSL/${letter}.png';\n`;
  result2 += `images.push({level: 0, image: ${letter}, name: '${letter}' });\n`;
}
console.log(result1);
console.log(result2);
*/