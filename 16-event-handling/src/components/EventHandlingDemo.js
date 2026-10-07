import React, { useState } from 'react';

export default function EventHandlingDemo() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <section className="demo">
      <h1>Event Handling Demo</h1>
      <p className="counter" aria-live="polite">Count: {count}</p>
      <button onClick={handleButtonClick}>Increase Count</button>
    </section>
  );
}
