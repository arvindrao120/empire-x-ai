import React, { useState, useEffect } from 'react';
import AIStrategyResult from '../../campaigns/strategy/AIStrategyResult';

function AIStrategy() {
  const [strategy, setStrategy] = useState(null)

  useEffect(() => {
    const saved = sessionStorage.getItem('aiStrategy');
    if (saved) {
      setStrategy(JSON.parse(saved));
    }
  }, []);

  const handleEdit = (data) => {
    console.log("Saving strategy...", data);
    setStrategy(data);
  };

  const handleLaunch = (data) => {
    console.log("Launching campaign...", data);
  };

  return (
    <>
      {strategy ? (
        <AIStrategyResult strategy={strategy} />
      ) : (
        <p className="text-gray-400">No strategy found!</p>
      )}
    </>
  );
}

export default AIStrategy;