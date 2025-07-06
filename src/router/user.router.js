// import { Router } from "express";

import { Router } from "express";
import UserController from "../controller/user.controller.js";

// import { Router } from "express";

// import { Router } from "express";

// const UserRouter = Router();
// UserRouter.post("/auth/register", (req, res) => 1);
// UserRouter.post("/auth/login", (req, res) => 1);


// export default UserRouter;





// const UserRouter = Router();
// UserRouter.post("/auth/register", (req, res) => 1);
// UserRouter.post("/auth/login", (req, res) = 1);

// export default UserRouter;




// const UserRouter = Router();
// export default UserRouter;



const UserRouter = Router();
const controller = new UserController();

UserRouter.post("/auth/register", (req, res,next) => controller.registerController(req, res,next));
UserRouter.post("/auth/login", (req, res) => controller.loginController(req, res));

export default UserRouter;
