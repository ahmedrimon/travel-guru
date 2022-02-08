import React from 'react';

const Error = () => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '0',
          paddingBottom: '56%',
          position: 'relative',
        }}
      >
        <iframe
          src="https://giphy.com/embed/JNsDdfwziM7o2yRXqY"
          width="100%"
          height="100%"
          style={{ position: 'absolute' }}
          frameBorder="0"
          class="giphy-embed"
          title="myFrame"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Error;
