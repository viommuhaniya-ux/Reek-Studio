import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ videos, autoplay, controls }) => {
    const [currentVideo, setCurrentVideo] = React.useState(0);

    const handleEnded = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    return (
        <div className='video-player' style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <video
                src={videos[currentVideo]}
                onEnded={handleEnded}
                autoPlay={autoplay}
                controls={controls}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
        </div>
    );
};

VideoPlayer.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.string).isRequired,
    autoplay: PropTypes.bool,
    controls: PropTypes.bool,
};

VideoPlayer.defaultProps = {
    autoplay: false,
    controls: true,
};

export default VideoPlayer;