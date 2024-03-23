import { Request, Response } from "express";

const userRegister = async (req: Request, res: Response): Promise<{}> => {
    const mensagem: string = 'Tudo ok!';
    console.log(mensagem);
    return res.status(200).json({ mensagem: mensagem });
};

export default userRegister;