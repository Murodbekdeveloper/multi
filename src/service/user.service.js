// class UserService {
//     constructor(){};
//     async registerService() {};
//     async loginService() {};
// };

import Joi from "joi";
import { dataSource } from "../config/database.js";
import UserSchema from "../entities/user.entity.js";
import CustomerError from "../utils/customer.error.js";
import JoiService from "./joi.service.js";
import JwtService from "./jwt.service.js";


// export default UserService;

// import userSchema from "../entities/user.entity.js";
// import JoiService from "./joi.service.js";
// import JwtService from "./jwt.service.js";



// class UserService {
//     constructor() {
//         this.jwtservice = new JwtService()
//         this.joiservice = new JoiService();
//         this.userRepository = new userSchema()
//     };
//     async registerService(body) {
//         await this.joiservice.validateAuthRegister(body);
//         const existedUser = database.
//     }; 
//     async loginService() {};
// };
// export default UserService;



// class UserService {
//     constructor() {
//         this.joiService = new JoiService();
//         this.jwtService = new JwtService();
//         this.userRepository = new UserSchema();
//     };
//     async RegisterService() {};
//     async LoginService() {};
// };
// export default UserService;



// class UserService {
//     constructor() {
//         this.JoiService = new JoiService;
//         this.JwtService = new JwtService;
//         this.UserRepository = UserSchema;
//     };
//     async RegisterService(body) {
//         try {
//             await this.JoiService.validateAuthRegister(body);
//             const query = dataSource.getRepository("Tajriba");
//             const existedUser = await query.find({username: body.username});
//             if(existedUser) throw new CustomerError("Username already been existed");
//             const hashedToken = await bcrypt.hash(body.password, 12);
//             const user = query.create({ ...body, password: hashedToken});
//             await query.save(user);
//             const token = this.JoiService.validateAuthRegister(user.id);
//             return token;
//         } catch (error) {
//             throw new CustomerError(error.message, 401);
//         };
//     };
//     async LoginService() {};
// };
// export default UserService;


class UserService {
    constructor() {
        this.JwtService = new JwtService;
        this.JoiService = new JoiService;
        this.Repository = UserSchema;
        this.userRepo = dataSource.getRepository(UserSchema)
    };
    async RegisterService(body) {
        await this.JoiService.validateAuthRegister(body);
        
        const existed = await this.userRepo.findOne({where: {username: body.username}});
        if(existed) throw new CustomerError("Username already exists", 400); // 500 -> 400, chunki bu foydalanuvchi nomi borligi bilan bog'liq.
    
        const hashedPassword = await bcrypt.hash(body.password, 12);
        const user = this.userRepo.create({ ...body, password: hashedPassword });
        await this.userRepo.save(user);
    
        try {
            const token = await this.JwtService.generateToken(user.id); // JoiService -> JwtService
            return token;
        } catch (error) {
            throw new CustomerError(error.message, 401);
        }
    }
    
};

export default UserService;



