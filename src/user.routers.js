import express from 'express';
import {StatusCodes} from "http-status-codes";
import userService from './services/user.service.js';
import userController from './controllers/user.controller.js'
import {expressYupMiddleware} from "express-yup-middleware";
import * as Yup from 'yup';

const router = express.Router();

// yup schema
const addNewUser = {
    schema: {
        body: {
            yupSchema: Yup.object().shape({
                name: Yup.string().required('name is required'),
                country : Yup.string().required('Country is required')
            }),
        },
    },
}

const updateUser = {
    schema: {
        body: {
            yupSchema: Yup.object().shape({
                name: Yup.string().required('name is required'),
                country : Yup.string().required('Country required')
            }),
        },
    },
}



// create new user
router.post('/', expressYupMiddleware({schemaValidator : addNewUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),userController.addUser )
// update user
router.put('/:id', expressYupMiddleware({schemaValidator : addNewUser, expectedStatusCode: StatusCodes.BAD_REQUEST}), userController.updateUser)
//get all user
router.get('/', userController.getAllUser)
//get user by id
router.get('/:id', userController.getUserById)
//remove user
router.delete('/:id', userController.removeUser)


export default router;
