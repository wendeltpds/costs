import { useState, useCallback } from "react";



const Company = () => {
  const [user, setUser] = useState(0);
  const [user1, setUser1] = useState(0);

  const incrementUser = useCallback(() => {
    setUser((prevUser) => prevUser + 1);
  }, []);
  console.log(user)
  console.log(user1)
  return (
    <div>
      <h1>company</h1>
      <button onClick={incrementUser}>Incrementar user</button>
      <button onClick={() => setUser1((prevUser1) => prevUser1 + 1)}>Incrementar user1</button>
      <p>user: {user}</p>
      <p>user1: {user1}</p>
    </div>
  );
};

export default Company;