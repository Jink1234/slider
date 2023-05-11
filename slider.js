const left=document.querySelector(".left");
const right=document.querySelector(".right");
const slider=document.querySelector(".slider")
const images=document.querySelectorAll(".image")
const bottom =document.querySelector(".bottom")

let slidenumber=1;
const length = images.length;

for (let i = 0; i < length; i++) {
    const div=document.createElement("div");
    div.className="button";
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor="White";

const changeBg=()=>{
  buttons.forEach((button)=>[
    button.style.backgroundColor="transparent"
  ])
}

buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>{
     changeBg();
     slider.style.transform = `translateX(-${i * 800}px)`;
     slidenumber=i+1;
     button.style.backgroundColor="white";
    })
})


const nextSlide = ()=>{
    slider.style.transform=`translateX(-${800 * slidenumber}px)`;
        slidenumber++;

};
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slidenumber - 2) * 800}px)`;
    slidenumber--;
  };

const getFirstSlide =()=>{
    slider.style.transform=`translateX(0px)`;
    slidenumber =1;
};

const getLasttSlide =()=>{
    slider.style.transform=`translateX(-${800 * (length-1)}px)`;
    slidenumber = length;
};

right.addEventListener("click",()=>{
    slidenumber < length ? nextSlide() : getFirstSlide();
    changeBg();
    buttons[slidenumber-1].style.backgroundColor="white";
   
})

left.addEventListener("click",()=>{
    console.log("first")
    slidenumber > 1 ? prevSlide() : getLasttSlide();
    changeBg();
    buttons[slidenumber-1].style.backgroundColor="white";
})
