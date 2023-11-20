import express from "express";
import memberController from "../controller/member-controller";
import { authMiddleware } from "../middleware/auth-middleware";
import bahanController from "../controller/bahan-controller";

const privateRouter = express.Router()

privateRouter.use(authMiddleware);

privateRouter.delete('/api/logout', memberController.logout);
privateRouter.get("/api/bahan", bahanController.getAllBahan);
privateRouter.get("api/bahan/:namaBahan", bahanController.searchBahan)

export {
  privateRouter
}