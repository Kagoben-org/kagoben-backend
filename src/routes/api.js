import express from "express";
import memberController from "../controller/member-controller";

const privateRoute = express.Router()


privateRoute.post('/api/logout', memberController.logout);