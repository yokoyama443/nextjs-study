// blog/LikeButton.tsx
"use client"

import { useEffect, useState } from 'react';
import {getLikeCount, updateLikeCount} from './LikeButtonFunction';

const LikeButton = () => {
  const [count, setCount] = useState(0);

  const handleLike = async() => {
    // Increment the count
    const nowLikeCount = await getLikeCount() + 1;
    setCount(nowLikeCount);

    // Update the like count in the file
    updateLikeCount();
  };

  useEffect(() => {
    // Get the like count from the file
    (async() => {
      const nowLikeCount : number = await getLikeCount();
      setCount(nowLikeCount);
    })()
  }, []);

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLike}>
        Like
      </button>
      <p>Likes: {count}</p>
    </div>
  );
};

export default LikeButton;
