import 'dotenv/config'
import express from 'express';
import userRouter from './routes/userRouter';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());

    app.use(userRouter);

    const port = process.env.PORT || 3000;

    return app.listen(port, () => {
        console.log(`Listening ${port}`)
    })
}).catch((error) => {
    console.log(error);
});