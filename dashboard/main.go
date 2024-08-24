package main

import (
	"fmt"
	// "main/player"
	"main/server"
	// "main/utility"
	// "os/exec"
	// "path"
	"sync"
	// "os"
    // "path/filepath"
)

//If we provide view of the source, need to include Gorilla Websockets BSD licence

// given peak audio, source files,
// stem tracks, choose which stem tracks dip (how much)
//    which tracks get equalized (what parameters)

// start ws server
// given start stream command, return audio stream

func main() {
	var waitGroup sync.WaitGroup
	waitGroup.Add(1)
	go func() {
		defer waitGroup.Done()
		server.Start()
	}()
	// //check if process is already running
	// //open GUI either way
	// startGUI()
	// //////player.Useit()
	// //run this in go routine
	fmt.Println("Starting WS")
	waitGroup.Wait()

}
