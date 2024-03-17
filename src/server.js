import express from 'express';
import userRoutes from "./user.routers";
import mainRoutes from "./main.routes";

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api/v1',mainRoutes)
app.use('/api/v1/users', userRoutes)

app.listen(port, ()=> {
    console.log(`server started on http://localhost:${port}`)
})