const users = [];

const addUser = ({ id, username, room }) => {
  // clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // validate data
  if (!username || !room)
    return {
      error: "Username and room required!",
    };

  // check for existing user
  const existingUser = users.find(
    (user) => user.room === room && user.username === username
  );

  // validate username

  if (existingUser)
    return {
      error: "Username is not available",
    };

  // store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

// remove user from array
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

// get user object
const getUser = (id) => users.find((user) => user.id === id);

// get user list of a room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
