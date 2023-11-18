import express from "express"
import memberController from "../controller/member-controller.js"

const publicRouter = new express.Router()

publicRouter.post('/api/register', memberController.register);
publicRouter.post('/api/login', memberController.login);

export { publicRouter }