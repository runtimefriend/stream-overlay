package main

import (
	"fmt"
	// "main/player"
	"main/server"
	"main/utility"
	"os/exec"
	"path"
	"sync"
)

//If we provide view of the source, need to include Gorilla Websockets BSD licence

// given peak audio, source files,
// stem tracks, choose which stem tracks dip (how much)
//    which tracks get equalized (what parameters)

// start ws server
// given start stream command, return audio stream

func startGUI() {
	home := utility.GetRootPath()

	/*ex, err := os.Executable()
	if err != nil {
		panic(err)
	}
	exPath := filepath.Base(filepath.Dir(ex))
	fmt.Println(exPath)*/
	configPath := path.Join(home, "/Source/stem-player/GUI")
	fmt.Println(path.Join(configPath, "GUI.html"))
	commandOutput, err2 := exec.Command("open", path.Join(configPath, "GUI.html")).Output()
	if err2 != nil {
		fmt.Println( err2 )
		//handle GUI not opening
	} else {
		fmt.Println( commandOutput )
	}
}

func main() {
	var waitGroup sync.WaitGroup
	waitGroup.Add(1)
	go func() {
		defer waitGroup.Done()
		server.Start()
	}()
	//check if process is already running
	//open GUI either way
	startGUI()
	//////player.Useit()
	//run this in go routine
	fmt.Println("Hello, World!")
	waitGroup.Wait()

}
