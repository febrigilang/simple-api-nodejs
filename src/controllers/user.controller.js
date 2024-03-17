import {StatusCodes} from "http-status-codes";
import userService from "../services/user.service";


const addUser = (req,res) => {
    const {body:user} = req;

    if (!user.name){
        return res.status(StatusCodes.BAD_REQUEST).send({
            statusCode : StatusCodes.BAD_REQUEST,
            message : 'Name is Required'
        })
    }

    const newUser = userService.addUser(user);
    res.status(StatusCodes.CREATED).send(
        {
            statusCode: StatusCodes.CREATED,
            message : "Succesfully add new user",
            data :newUser
        }
    );
}


// update user

const updateUser = (req,res) => {
    const data = [];
    const {body:user} = req;
    const id = parseInt(req.params.id, 10)

    const updateUser = userService.updateUser(id, user);

    if (updateUser) {
        return  res.status(StatusCodes.OK).send(
            {
                statusCode:StatusCodes.OK.toString() ,
                message : "Succesfully add new user",
                data : updateUser
            }
        );
    } else {
        return res.status(StatusCodes.NOT_FOUND).send(
            {
                statusCode : StatusCodes.NOT_FOUND.toString(),
                message : `User ${id} not found`,
                data : null
            }
        );
    }
}

// get all user
const getAllUser = (req, res) => {
    const users = userService.getAllUser();

    if (users.length){
        res.status(StatusCodes.OK).send(
            {
                status: StatusCodes.OK,
                message : "Succesfully get all user",
                data :users
            }
        );
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: StatusCodes.NOT_FOUND,
        message : "User Not Found ",
        data :null
    })
}

//get user by Id
const getUserById = (req, res) => {
    const id = parseInt(req.params.id,10)
    const user = userService.getUserById(id);
    if (user){
        res.status(StatusCodes.OK).send(
            {
                statusCode: StatusCodes.OK,
                message : "Succesfully get user",
                data :user
            }
        );
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        message : "User Not Found ",
        data :null
    })
}

//delete user
const removeUser = (req, res) => {
    const id = parseInt(req.params.id,10)
    const user = userService.getUserById(id)
    if (user){
        userService.removeUser(id)
        res.status(StatusCodes.OK).send(
            {
                statusCode: StatusCodes.OK,
                message : "Succesfully delete user",
                data :null
            }
        );
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        message : "User Not Found ",
        data :null
    })
}

export default {
    addUser,updateUser, getAllUser, getUserById, removeUser
}