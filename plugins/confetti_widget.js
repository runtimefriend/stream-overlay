//https://foolishdeveloper.com/css-confetti-animations-code/

import confetti from "https://cdn.skypack.dev/canvas-confetti";
const doItNow = (evt, hard) => {
  const direction = Math.sign(lastX - evt.clientX);
  lastX = evt.clientX;
  const particleCount = hard ? r(122, 245) : r(2, 15);
  confetti({
    particleCount,
    angle: r(90, 90 + direction * 30),
    spread: r(45, 80),
    origin: {
      x: evt.clientX / window.innerWidth,
      y: evt.clientY / window.innerHeight
    }
  });
};
const doIt = (evt) => {
  doItNow(evt, false);
};

const doItHard = (evt) => {
  doItNow(evt, true);
};

let lastX = 0;
const butt = document.querySelector("button");
butt.addEventListener("mousemove", doIt);
butt.addEventListener("click", doItHard);

function r(mi, ma) {
  return parseInt(Math.random() * (ma - mi) + mi);
}

window.runtimefriends.confetti = new class {
    constructor( ){
        this.DURATION = 20
        this.timeout = null
        this.hide()
        stamp_button.addEventListener("click",this.send)
    }
    parse( message ){
        message = message.split("|")
        if ( message.length == 1 ){
            this.show(message[0])
        }
    }
    show( title ){
        stamp_widget.style.display = "block"
        stamp_title.innerText = title
        if ( this.timeout ) {
            clearTimeout( this.timeout )
        }
        this.timeout = setTimeout( this.hide , this.DURATION * 1000 )
    }
    hide(){
        stamp_widget.style.display = "none"
    }
    send(){
        ws.send(`stamp|${stamp_title_input.value}`)
        //console.log('sending')
        //document.body.dispatchEvent(new Event('send', {detail: 'test'}))
        //chyron_input.value//send this to the overlay
    }
    //tangents
}()