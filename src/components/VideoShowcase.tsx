import React from 'react';

const videos = [
  { id: 1, title: "Video 1", src: "https://example.com/video1.mp4" },
  { id: 2, title: "Video 2", src: "https://example.com/video2.mp4" },
  { id: 3, title: "Video 3", src: "https://example.com/video3.mp4" },
];

const VideoShowcase: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {videos.map(video => (
        <div key={video.id} style={{ margin: '10px' }}>
          <h4>{video.title}</h4>
          <video width="300" controls>
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoShowcase;
