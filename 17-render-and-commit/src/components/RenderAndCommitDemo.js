import React, { useState } from 'react';

export default function RenderAndCommitDemo() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <section className="demo">
      <h1>Render and Commit Demo</h1>
      <p className="counter" aria-live="polite">Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </section>
  );
}
