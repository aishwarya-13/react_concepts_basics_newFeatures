import React,{useRef, useState} from "react";

function Video(){
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function onPlay(){
        setIsPlaying(true);
    }

    function onPause(){
        setIsPlaying(false);
    }

    function handleClick(){
        const next = !isPlaying;
        setIsPlaying(!isPlaying);
        if(next){
            videoRef.current.play();
        }else{
            videoRef.current.pause();
        }
    }

    return(
        <div>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video
                width={'250'}
                ref={videoRef}
                onPlay={onPlay}
                onPause={onPause}>
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"/>
            </video>
        </div>
    )
};

export default Video;
