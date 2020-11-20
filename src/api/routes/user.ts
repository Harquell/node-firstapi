import { Router, Request, Response } from 'express';
import middlewares from '../middlewares';

const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/', middlewares.isAuth, (req: Request, res: Response) => {
    return res.json({ isOk: true }).status(200);
  });
};