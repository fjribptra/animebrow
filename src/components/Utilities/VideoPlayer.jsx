"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handlePlayer = () => {
        setIsOpen(prevState => !prevState)
    }

    const Player = () => {
        return (
            <>
                <div className="fixed bottom-2 right-2">
                <button 
                onClick={handlePlayer}
                className="fixed right-2 bg-color-secondary text-color-primary px-3 py-1">
                    X
                </button>
                    <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={{width: "300", height: "200"}}
                    onError={() => alert("Video is broken, please try another 😟")}
                    />
                </div>  
            </>
            )
    }

    const OpenPlayer = () => {
        return (
            <>
                <button 
                onClick={handlePlayer}
                className="fixed bottom-5 right-5 px-4 py-2 text-color-secondary bg-color-primary rounded-md">
                    Watch Trailer
                </button>
            </>    
        )
    }

    return (
          isOpen ? <Player /> : <OpenPlayer/>
    )
}

export default VideoPlayer