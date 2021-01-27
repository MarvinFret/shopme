export default function swipe() {
  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    const elements = Array.from(elmnt);
    console.log(elements);
    elements.forEach((el) => {
    //   console.log(el);
      if (el) {
        // otherwise, move the DIV from anywhere inside the DIV:
        el.onmousedown = dragMouseDown;
      }
    });

    function dragMouseDown(e) {
        e.preventDefault();
      e = e.target || window.event;
      
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      e.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      e.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        // e.stopPropagation();
        e.preventDefault();
      let el = e.target;
      console.log(el);
      // calculate the new cursor position:
      pos1 = pos3 - el.clientX;
      pos2 = pos4 - el.clientY;
      pos3 = el.clientX;
      pos4 = el.clientY;
      // set the element's new position:
      el.style.top = el.offsetTop - pos2 + "px";
      console.log( el.style.top);
      el.style.left = el.offsetLeft - pos1 + "px";
    //   el.style.visibility = 'hidden';
    }

    function closeDragElement(e) {
      // stop moving when mouse button is released:
      e.target.onmouseup = null;
      e.target.onmousemove = null;
    }
  }
  dragElement(document.getElementsByClassName("item"));
}
