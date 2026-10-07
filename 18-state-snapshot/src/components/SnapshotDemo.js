import React, { useState } from 'react';

export default function SnapshotDemo() {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleSnapshot() {
    setSnapshot(count);
  }

  function handleRestore() {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  }

  return (
    <section className="demo">
      <h1>State as a Snapshot Demo</h1>
      <p className="counter" aria-live="polite">Count: {count}</p>
      <p>Saved snapshot: {snapshot === null ? 'Not taken yet' : snapshot}</p>
      <div className="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleSnapshot}>Take Snapshot</button>
        <button onClick={handleRestore} disabled={snapshot === null}>Restore Snapshot</button>
      </div>
    </section>
  );
}
