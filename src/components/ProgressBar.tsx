'use client'

import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { useRouter } from 'next/navigation';


const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            router.push('https://www.youtube.com');
          }, 1000); // Wait 1 second before redirecting
          return 100;
        }
        const newProgress = oldProgress + 1;
        return Math.min(newProgress, 100);
      });
    }, 50); // 50ms * 100 steps = 5000ms or 5 seconds

    return () => {
      clearInterval(timer);
    };
  }, [router]);

  if (isComplete) {
    return <Spinner color='border-black'/>;
  }

  return (
    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

