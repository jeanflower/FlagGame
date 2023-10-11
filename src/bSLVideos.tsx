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
  videos.push({
  level: 0,
  name: 'Deaf',
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="6ainjypbkq"><a href="https://www.signbsl.com/sign/deaf">Watch how to sign 'deaf' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
  });
  videos.push({
  level: 0,
  name: 'Children',
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="jiasohnwh0"><a href="https://www.signbsl.com/sign/children">Watch how to sign 'child' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
  });
  videos.push({
  level: 0,
  name: 'Brother',
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="ndiyahmjq7"><a href="https://www.signbsl.com/sign/brother">Watch how to sign 'brother' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
  });
  videos.push({
  level: 0,
  name: 'Sister',
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="111b9bvj8b"><a href="https://www.signbsl.com/sign/sister">Watch how to sign 'sister' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
  });
  videos.push({
  level: 0,
  name: 'Boy',
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="qowci6kzaj"><a href="https://www.signbsl.com/sign/boy">Watch how to sign 'boy' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
  });
  videos.push({
  level: 0,
  name: 'Son',
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="wxvpmfvote"><a href="https://www.signbsl.com/sign/son">Watch how to sign 'son' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
  });
  videos.push({
  level: 0,
  name: 'Girl',
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="hnmaas5kpr"><a href="https://www.signbsl.com/sign/girl">Watch how to sign 'girl' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
  });
  videos.push({
  level: 0,
  name: 'Daughter ',
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="wlnbqhcfsd"><a href="https://www.signbsl.com/sign/daughter">Watch how to sign 'daughter' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
  });
  videos.push({
  level: 0,
  name: 'Parents',
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="pcwkchadkn"><a href="https://www.signbsl.com/sign/parents">Watch how to sign 'parent' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
  });
  videos.push({
  level: 0,
  name: 'Work',
  embedCode: `<blockquote class="signbsldata-embed" data-vidref="d6of7cpq0q"><a href="https://www.signbsl.com/sign/work">Watch how to sign 'work' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>`
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
