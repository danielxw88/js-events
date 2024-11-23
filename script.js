//mouse events
const hoverButton=document.getElementById("hoverButton");
const hoverMessage=document.getElementById("hoverMessage");

hoverButton.addEventListener("mouseover",()=>{
    hoverMessage.textContent="your mouse is hovering on the button!";
});
hoverButton.addEventListener("mouseout",()=>{
    hoverMessage.textContent="hover on the button to change the message.";
});

//keyboard events
const keyboardInput=document.getElementById("keyboardInput");
const keyMessage=document.getElementById("keyMessage");

keyboardInput.addEventListener("keydown",(event)=>{
    keyMessage.textContent=`you pressed: ${event.key}`;
});

//form events
const form=document.getElementById("form");
const formMessage=document.getElementById("formMessage");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    formMessage.textContent="Submitted successfully!";
});

//focus events
const focusInput=document.getElementById("focusInput");
const focusMessage=document.getElementById("focusMessage");

focusInput.addEventListener("focus",(event)=>{
    focusMessage.textContent="The field is in focus!";
});

focusInput.addEventListener("blur",(event)=>{
    focusMessage.textContent="The field lost focus!";
});

