import React from 'react';
import { CameraIcon } from '@heroicons/react/outline';

const ShowNTell = () => {
  return (
    <div className="show-n-tell">
      <CameraIcon className="absolute text-indigo-600 w-96 h-96 z-0 bottom-0 right-0" />
      <h2>Please show us what you did!</h2>
      <p>
        Take a pic of your creation and tag Achieve when you post to Instagram
        or Facebook, or use the hashtag <code>#makermadness</code>, or just
        email us.
        <a href="mailto:director@achievefoundation.org">
          director@achievefoundation.org
        </a>
      </p>
    </div>
  );
};

export default ShowNTell;
