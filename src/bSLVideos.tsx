import { MediaData } from './App';

export let videos:any[] = [];

videos.push({
  level: 0, 
  name: 'coffee', 
  embedCode: <><blockquote className="signbsldata-embed" data-vidref="alydedtkwk"><a href="https://www.signbsl.com/sign/coffee">Watch how to sign &apos;coffee&apos; in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js"></script></> 
});
videos.push({
  level: 0, 
  name: 'tea', 
  embedCode: <><blockquote className="signbsldata-embed" data-vidref="zl3yaf85hv"><a href="https://www.signbsl.com/sign/tea">Watch how to sign &apos;tea&apos; in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js"></script></> 
});
videos.push({
  level: 0, 
  name: 'good morning', 
  embedCode: <><blockquote className="signbsldata-embed" data-vidref="vyweujxrb6"><a href="https://www.signbsl.com/sign/good-morning">Watch how to sign &apos;good morning&apos; in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js"></script></>
});

videos.forEach((v) => {
  v.image = undefined;
});

export function getBSLVideos(level: number): MediaData[]{
  // console.log('in getBSLImages');
  return videos.filter((im)=>{
    return im.level <= level;
  })
}
