import React from 'react';
import './index.scss';

const Iframe = ({ source }) => {

  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    // basic bootstrap classes. you can change with yours.
    <div className="Iframe">
      <div className="Iframe-main">
        <iframe src={src} title={src} id='Screen' name='scree'></iframe>
      </div>
    </div>
  );
};

export default Iframe;