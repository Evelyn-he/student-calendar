const timeSegs = document.querySelector(".timeSegment");
const newEvent = document.createElement("div");




timeSegs.addEventListener('mousedown', e => {
    console.log(e);
    newEvent.style.width="10px";
    newEvent.style.height="10px";
    newEvent.style.backgroundColor="red";
    timeSegs.appendChild(newEvent);
});
