var buttonclicked = false;
function clickedmenu(){
    buttonclicked = !buttonclicked;
    console.log("c");

    if(buttonclicked){
      document.getElementById("menudiv").style.height = "410px";
    }
    else{
      document.getElementById("menudiv").style.height = "70px";
    }
}
const debounce = (fn) => {
    let frame;
    return (...params) => {

        if (frame) { 
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
            fn(...params);
        });

    } 
};
const storeScroll = () => {
document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});