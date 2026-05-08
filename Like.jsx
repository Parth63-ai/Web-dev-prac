import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <h1>{liked ? "❤️" : "🤍"}</h1>
      <button onClick={() => setLiked(!liked)}>Click it</button>
    </>
  );
}

export default App;