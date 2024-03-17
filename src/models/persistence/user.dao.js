import users from '../data/user.data'

const insert = (details) => {
    const newUser = {id : users.length + 1, ...details}
    users.push(newUser);
    return newUser;
}
 const getById = (userId) => {
     return users.find((user) => {
        if (user.id === userId) {
            return user;
        }
        return null
    });
}

const getAll =() => {
    return users;
}
 const update = (userId, newDetails) => {
    let existingUser = null;
    let userIndex = 0;
    users.map((user,index) => {
        if (user.id === userId) {
            existingUser = user;
            userIndex = index;
        }
     });
    if (!existingUser){
        return false;
    }
    const updateUser = {
        ...existingUser, ...newDetails
    }
    users.splice(userIndex, 1, updateUser);

    return updateUser;
}
 const remove = (userId) => {
    const findUser = (user, index) =>{
        if (user.id === userId){
            users.splice(index, 1);
            return true;
        }
        return false;
    };
   return users.find(findUser);

}

export default {
    insert,
    getAll,
    update,
    getById,
    remove
}

