//https://foolishdeveloper.com/css-confetti-animations-code/
import confetti from "https://cdn.skypack.dev/canvas-confetti";

window.runtimefriends.confetti = new class {
    constructor( ){
        this.on = false
        this.lastX = 0
        confetti_toggle.addEventListener("click",this.toggle)
    }
    parse( message ){
        message = message.split("|")
        if ( message.length == 3 ){
          this.makeConfetti( parseFloat(message[0]),parseFloat(message[1]),parseFloat(message[2]))
        }
    }
    show( ){
      confetti_widget.style.display = "block"
    }
    /*hide(){
        stamp_widget.style.display = "none"
    }*/
    toggle( event ){
      event.stopPropagation()
      this.on = !this.on
      if ( this.on ){
        confetti_toggle.innerText = "Turn Off"
        confetti_toggle.style.backgroundColor = "#88ff00"
        document.body.addEventListener("click", window.runtimefriends.confetti.sendConfetti);
      } else {
        confetti_toggle.innerText = "Turn On"
        confetti_toggle.style.backgroundColor = "#ff3300"
        document.body.removeEventListener("click", window.runtimefriends.confetti.sendConfetti);
      }
    }
    send(x,y,direction){
        ws.send(`confetti|${x}|${y}|${direction}`)
        //console.log('sending')
        //document.body.dispatchEvent(new Event('send', {detail: 'test'}))
        //chyron_input.value//send this to the overlay
    }
    //tangents

    sendConfetti(event) {
      //let vector = 
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight

      var deltaX = 0.5 - x
      var deltaY = y - 0.5
      const direction = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

      window.runtimefriends.confetti.send(x, y, direction)
      window.runtimefriends.confetti.makeConfetti(x,y,direction)
    };

    makeConfetti(x, y, direction) {
      const particleCount = window.runtimefriends.confetti.random(122, 245);
      confetti({
        particleCount,
        angle: direction,
        spread: window.runtimefriends.confetti.random(45, 80),
        origin: {
          x: x ,
          y: y ,
        }
      });
    };

    random(minimum, maximum) {
      return parseInt(Math.random() * (maximum - minimum) + minimum);
    }
}()