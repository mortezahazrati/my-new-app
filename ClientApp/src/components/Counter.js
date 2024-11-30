import { useState } from "react";

export function Counter() {
  const [currentCount, setCurrentCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live="polite">
        Current count: <strong>{currentCount}</strong>
      </p>

      <button
        className="btn btn-primary"
        onClick={() => setCurrentCount((prev) => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
}
