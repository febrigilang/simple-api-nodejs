import express from 'express';
import {StatusCodes} from "http-status-codes";
import userService from './services/user.service.js';

const router = express.Router();
const port = 3000;
const STATUS = {
    SUCCESS : 'OK',
    FAILURE : "NO"
}


// create new user
router.post('/', (req,res) => {
    const {body:user} = req;

    if (!user.name){
        return res.status(StatusCodes.BAD_REQUEST).send({
            status : STATUS.FAILURE,
            message : 'Name is Required'
        })
    }

    const newUser = userService.addUser(user);
    res.status(StatusCodes.CREATED).send(
        {
            status: STATUS.SUCCESS,
            message : "Succesfully add new user",
            data :newUser
        }
    );
})


// update user
router.put('/:id', (req,res) => {
    const data = [];
    const {body:user} = req;
    const id = parseInt(req.params.id, 10)

    const updateUser = userService.updateUser(id, user);

    if (updateUser) {
       return  res.status(StatusCodes.CREATED).send(
            {
                status: STATUS.SUCCESS,
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

})

//get all user
router.get('/', (req, res) => {
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

})

//get user by id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id,10)
    const user = userService.getUserById(id);
    if (user){
        res.status(StatusCodes.OK).send(
            {
                status: StatusCodes.OK,
                message : "Succesfully get user",
                data :user
            }
        );
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: StatusCodes.NOT_FOUND,
        message : "User Not Found ",
        data :null
    })
})

//remove user
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id,10)
    const user = userService.removeUser(id)
    if (user){
        res.status(StatusCodes.OK).send(
            {
                status: StatusCodes.OK,
                message : "Succesfully delete user",
                data :null
            }
        );
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: StatusCodes.NOT_FOUND,
        message : "User Not Found ",
        data :null
    })
})


export default router;
