function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// varible
let time = 0;
let timerId = 0;
let timerOut = true;
let count=0;
let match=true;
const cards=document.querySelectorAll(".card");
let openCard=[];
const h=document.getElementById("heart").querySelectorAll(".bi-heart-fill");
let scount=3;
const reset = document.querySelector("#restart");
const timer = document.querySelector("#timer");
const move=document.querySelector("#moves");
//use this function to start the timer
const initClock = () => {
  timerOut = false;
  timerId = setInterval(() => {
    time++;
    timerCount();
  }, 1000);
};
const timerCount = () => {
  const min = Math.floor(time / 60);
  const sec = time % 60;
  if (sec < 10) {
    timer.innerHTML = `${min}:0${sec}`;
  } else {
    timer.innerHTML = `${min}:${sec}`;
  }
};

const stopClock = () => {
  clearInterval(timerId);
};


reset.addEventListener("click", function () {
  stopClock();
  timerOut = true;
  time = 0;
  timerCount();
  for(const element of cards){
    element.classList.remove("open");
   
  }
  count=0;
  move.innerHTML=`${count} moves`;
});



//functions
for(const card of cards){
    card.addEventListener("click",(e)=>{
     if(!e.target.classList.contains("open")){
        e.target.classList.add("open");
        if (timerOut) {
            initClock();
          }
          openCard.push(e.target);
          if(e.target.classList.contains("open")){
            
          }
          
         
          if(openCard.length==2){
            moveCount();
           heart(count);

         
          if(openCard[0].children[0].classList[1]==
            openCard[1].children[0].classList[1]){
                
            isMatch();
        }else{
            isNotMatch();
        } 
        }
     }
            
        
     
          
         
    })
}
   
 
    


function moveCount(){
    count++;
    move.innerHTML=`${count} moves`;
 }
 function heart(count){
switch(count){
case 8:
    h[2].classList.remove("bi-heart-fill"); break;
case 16:
    h[1].classList.remove("bi-heart-fill"); break;
case 24:
    h[0].classList.remove("bi-heart-fill"); 

}

    }

const isMatch=()=>{
    openCard[0].classList.add("match");
    openCard[1].classList.add("match");
    openCard=[];
}
const isNotMatch =()=>{
    setTimeout(function(){
        openCard[0].classList.remove("open");
        openCard[1].classList.remove("open");
        openCard=[];
    },300)
    
}

// event listeners