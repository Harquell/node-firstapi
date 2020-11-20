//TODO: JWT token

import { RequestHandler } from "express";

const isAuth = function(_req: any, _res: any, next: () => void) {
    console.log('ISAUTH CALLED');
    next();
}

export default isAuth;