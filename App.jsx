// Q-1
// import { useState } from "react";

// function App() {
//   const [liked, setLiked] = useState(false);

//   return (
//     <>
//       <h1>{liked ? "❤️" : "🤍"}</h1>
//       <button onClick={() => setLiked(!liked)}>Click it</button>
//     </>
//   );
// }

// export default App;

// Q-2

// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);
   
//   return (
//     <>
//       {users.map(user => (
//         <div key={user.id}>
//           <p>{user.name}</p>
//           <p>{user.website}</p>
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;






















