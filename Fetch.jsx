import { useEffect, useState } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
   
  return (
    <>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.website}</p>
        </div>
      ))}
    </>
  );
}

export default Fetch;