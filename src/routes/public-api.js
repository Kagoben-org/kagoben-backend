import express from "express"
import memberController from "../controller/member-controller.js"
import bahanController from "../controller/bahan-controller.js"
const publicRouter = new express.Router()

publicRouter.post('/api/register', memberController.register);
publicRouter.post('/api/login', memberController.login);
publicRouter.post('/api/add-bahan', bahanController.addBahan)

export { publicRouter }