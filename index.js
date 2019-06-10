window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

var count=0,k=0;
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      console.log(index);
      count++;
      if(count===1){
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
      k=index;
    }
    else{
      if(k===index){
       sounds[index].currentTime = 0;
      sounds[index].play();

      createBubble(index);
      }
      else{
        sounds[k].pause();
        sounds[index].play();
         createBubble(index);
         k=index;
      }

    }

    });

  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
})
