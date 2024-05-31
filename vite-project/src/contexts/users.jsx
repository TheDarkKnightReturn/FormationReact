import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ctx = createContext();

const Provider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  const addUsers = (users) => {
    setUsers([...users, users]);
  }

  const removeUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  }
  
  const getUserById = (userId) => users.find(user => `${user.id}` === `${userId}`);

  const getUsersByTermSearch = (searchTerm) => {
    if(searchTerm)
        return users.filter(user => user.name.includes(searchTerm));
    else
        return users;
  }

  return (
    <ctx.Provider value={{users, addUser, removeUser, getUserById, getUsersByTermSearch, addUsers}}>
      {children}
    </ctx.Provider>
  )
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

const useUsers = () => {
  return useContext(ctx);
}

export { Provider, useUsers }
export default useUsers;