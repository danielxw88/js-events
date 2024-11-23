//mouse events
const hoverButton=document.getElementById("hoverButton");
const hoverMessage=document.getElementById("hoverMessage");

hoverButton.addEventListener("mouseover",()=>{
    hoverMessage.textContent="your mouse is hovering on the button!";
});
hoverButton.addEventListener("mouseout",()=>{
    hoverMessage.textContent="hover on the button to change the message.";
});
