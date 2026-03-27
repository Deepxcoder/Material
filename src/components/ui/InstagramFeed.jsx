import React from 'react';

const InstagramFeed = ({ children }) => {
  return (
    <div className="max-w-[640px] mx-auto pt-12 pb-24 px-4">
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default InstagramFeed;
