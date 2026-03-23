import React, { useRef, useState } from 'react';

const VideoEmbed = ({ src, type }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    const handleTimeUpdate = () => {
        setProgress(videoRef.current.currentTime / duration * 100);
    };

    return (
        <div>
            <video
                ref={videoRef}
                src={src}
                type={type}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                controls
                style={{ width: '100%' }}
            >
                Your browser does not support the video tag.
            </video>
            <div>
                <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                <span>{Math.floor(duration)} / {Math.floor(videoRef.current.currentTime)} seconds</span>
                <div style={{ width: '100%', background: '#ccc' }}>
                    <div style={{ width: `${progress}%`, background: '#f00', height: '5px' }} />
                </div>
            </div>
        </div>
    );
};

export default VideoEmbed;