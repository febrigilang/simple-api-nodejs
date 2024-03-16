import express from 'express';
import {StatusCodes} from "http-status-codes";

const app = express();
const port = 3000;

app.get('/hello', (req,res) => {
    res.status(StatusCodes.OK); // status OK
    res.send('Hello you');
})

app.listen(port, ()=> {
    console.log(`server started on http://localhost:${port}`)
})