'use strict';

function preloadImages(sources, callback) {

    sources.forEach((item, index) => {
  
      let img = document.createElement('img');
      img.src = item;
      if(index === sources.length - 1){
       img.onload = callback;
      }
          
    });
     
  }

  const sources = [
    "https://en.js.cx/images-load/1.jpg",
    "https://en.js.cx/images-load/2.jpg",
    "https://en.js.cx/images-load/3.jpg"
  ];

  for (let i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random();
  }

  
  
  function testLoaded() {
    let widthSum = 0;
    for (let i = 0; i < sources.length; i++) {
      let img = document.createElement('img');
      img.src = sources[i];
      widthSum += img.width;
    }
    console.log(widthSum); // must be 300
  }

  
  preloadImages(sources, testLoaded);