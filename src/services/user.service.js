import userDao from '../models/persistence/user.dao.js'

const getUserById = (userId) => {
   return userDao.getById(userId)
}
const addUser = (details) => {
    return userDao.insert(details);
}
const updateUser = (userId, details) => {
    return userDao.update(userId, details);
}
const removeUser = (userId) => {
   return userDao.remove(userId);
}

const getAllUser = () => {
    return userDao.getAll();
}

export default {
    getUserById,
    getAllUser,
    addUser,
    updateUser,
    removeUser
}