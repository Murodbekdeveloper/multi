// class UserController {
//     constructor() {};
//     async registerController() {};
//     async loginController() {};
// };

import UserService from "../service/user.service.js";

// import UserService from "../service/user.service.js";

// export default UserController;




// class UserController {
//     constructor() {
//         this.userservice = new UserService();
//     };
//     async registerController(req, res, next) {
//         try {
//             const body = req.body;
//             const token = await this.userservice.registerService(body);
//             res.status(201).json({token});
//         } catch (error) {
//             next(error);
//         }
//     };
//     async loginController() {};
// };
// export default UserController;





// class UserController {
//     constructor() {
//         this.userService = new UserService;
//     };
//     async RegisterController(req, res, next) {
//         try {
//             const body = req.body;
//             const token = await this.userService.RegisterService(body);
//             res.status(201).json(token);
//         } catch (error) {
//             next(error);
//         };
//     };
// };
// export default UserController;



// class UserController {
//     constructor() {
//         this.UserService = new UserService();
//     };
//     async RegisterController(req, res, next) {
//         try {
//             const body = req.body;
//             const token = await this.UserService.RegisterService(body);
//             res.status(201).json(token);
//         } catch (error) {
//             next(error);   
//         }
//     };
//     async LoginController(req, res, next) {};
// };

// export default UserController;

import UserService from "../service/user.service.js";

class UserController {
    constructor() {
        this.userService = new UserService();
    };

    async registerController(req, res, next) {
        try {
            const body = req.body;
            const token = await this.userService.registerService(body);
            res.status(201).json(token);
        } catch (error) {
            next(error);   
        }
    };

    async loginController(req, res, next) {
        try {
            const body = req.body;
            const token = await this.userService.loginService(body);
            res.status(200).json(token);
        } catch (error) {
            next(error);
        }
    };
};

export default UserController;
