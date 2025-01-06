import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { deleteNotifications, deleteOneNotification, getNotifications } from "../controller/notificationController.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
router.delete("/:id", protectRoute, deleteOneNotification);

export default router;
