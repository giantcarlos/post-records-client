import React, { useState, useEffect} from 'react'

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [login, setLogin] = useState(false);
    const [records, setRecords] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        fetch("https://post-records-server.onrender.com/records")
        .then(res => res.json())
        .then(data => setRecords(data))
    }, [])

    useEffect(() => {
      fetch("https://post-records-server.onrender.com/collection")
      .then(res => res.json())
      .then(data => setCollection(data))
   }, [])

   const handleLogin = () => {
    login === false ? setLogin(true) : setLogin(false);
   }

return (
    <UserContext.Provider value={{ login, setLogin, handleLogin, records, setRecords, collection, setCollection }}>
        {children}
    </UserContext.Provider>
)
}

export { UserContext, UserProvider }; 