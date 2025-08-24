import React, { useContext, useEffect, useState } from "react";
import "./styles.css"

const UserContext = React.createContext();
function App() {
  const [userState, setUserState] = useState({
    Namık: true,
    Eda: true,
    Suzan: true,
    Engin: true,
    Samet: true,
  });

  // KODUNUZ BURAYA GELECEK
  return (
    <UserContext.Provider value={{userState,setUserState}}>
      <UserList />
    </UserContext.Provider>
  )
  
}

const UserList = () => {
  const {userState,setUserState} = useContext(UserContext);
  useEffect(() => {
    const interval = setInterval(() => {
      const users = Object.keys(userState);
      const randomUser = users[Math.floor(Math.random() * users.length)];

      setUserState(prevUsers => ({
        ...prevUsers,
        [randomUser] : !prevUsers[randomUser]
      }))
    }, 2000);

    return () => clearInterval(interval);
  },2000)
  // KODUNUZ BURAYA GELECEK
  return (
    <div className="container">
      <div className="content">
        <h1 className=" title">Kullanıcı Durumları</h1>
        <ul>
            {Object.entries(userState).map(([name,isOpen]) => {
          return <li key={name} className="item">
            <p>{name}</p>
            <p>{isOpen ? "🟢" : "🔴" }</p>
             
          </li>
        })}
        </ul>
        
      </div>
    </div>
  )

};

export default App;
