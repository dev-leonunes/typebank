import express from 'express';
import userRouter from './routes/userRouter';

const app = express();
app.use(express.json());

app.use(userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening ${port}`)
});