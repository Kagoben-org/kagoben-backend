import express from "express";
import memberController from "../controller/member-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import bahanController from "../controller/bahan-controller.js";
import keranjangController from "../controller/keranjang-controller.js"

const privateRouter = express.Router()

privateRouter.use(authMiddleware);

privateRouter.post('/api/logout', memberController.logout); // logout
privateRouter.get("/api/bahan", bahanController.getAllBahan); // get all bahan in database
privateRouter.get("/api/bahan/:namaBahan", bahanController.searchBahan) // get bahan by search

//keranjang
privateRouter.get("/api/keranjang", keranjangController.getAllKeranjang) // get all keranjang by id
privateRouter.post("/api/keranjang/create", keranjangController.createKeranjang) // create keranjang
privateRouter.get("/api/keranjang/:keranjangId", keranjangController.findKeranjang) //find by kerajang id

export { privateRouter }