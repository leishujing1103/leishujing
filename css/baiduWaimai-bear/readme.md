## css
- transition 过渡 usage: 属性名 时间
  eg:transition: width 1s linear 2s;
  //过渡宽度属性，时长为1s

- setInterval 每隔一个时间段，都做一次，一直循环
  eg:let width = -10;
     let interval = setInterval(() =>{
        width += 10;
        console.log(width);
        process.style.width = width + '%';
        if(width>=100) clearInterval(interval);
    },100);   //每隔100ms 做一次 一直

- setTimeout 隔一个时间段之后，仅做一次
  eg:setTimeout(() =>{},100);    //100ms 之后 做一次 一次