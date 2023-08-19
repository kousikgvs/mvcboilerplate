import Express from "express";
import { user } from "../models/user.js";
import { getAllusers } from "../controllers/user.js";
import { getUserbyId } from "../controllers/user.js";
import { userregister } from "../controllers/user.js";
import { updateUser } from "../controllers/user.js";
import { deleteUser } from "../controllers/user.js";
const router = Express.Router();

router.get("/all", getAllusers);

router.post("/new", userregister);

router.route("/userid/:id").get(getUserbyId).put(updateUser).delete(deleteUser);

// router.get("/userid/:id", getUserbyId);

// router.put("/userid/:id", updateUser);

// router.delete("/userid/:id", deleteUser);

export default router;
