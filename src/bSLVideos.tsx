import { MediaData } from './App';

export let videos:any[] = [];

videos.push({
  level: 0, 
  name: 'coffee', 
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="alydedtkwk"><a href="https://www.signbsl.com/sign/coffee">Watch how to sign 'coffee' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>` 
});
videos.push({
  level: 0, 
  name: 'tea', 
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="zl3yaf85hv"><a href="https://www.signbsl.com/sign/tea">Watch how to sign 'tea' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
});
videos.push({
  level: 0, 
  name: 'good morning', 
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="vyweujxrb6"><a href="https://www.signbsl.com/sign/good-morning">Watch how to sign 'good morning' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
});
videos.push({
  level: 0, 
  name: 'hello', 
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="cnyia0upyj"><a href="https://www.signbsl.com/sign/hello">Watch how to sign 'hello' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
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
