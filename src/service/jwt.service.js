// import jwt from "jsonwebtoken";
// import CustomerError from "../utils/customer.error.js";
// class JwtService {
//     constructor() {};
//     generateToken() {
//         const token = jwt.sign({userid: userId}, "20061214", {
//             expiresIn: "10m",
//         });
//         return token;
//     };
//     verifyToken() {
//         try {
//             const payload = jwt.verify(token, "20061214");
//             return payload;
//         } catch (error) {
//             throw new CustomerError(error.message, 401);
//         };
//     };
// };

// export default JwtService;






// import jwt, { verify } from "jsonwebtoken";
// import CustomerError from "../utils/customer.error.js";

// class JwtService {
//     constructor() {};
//     generateToken() {
//         const token = jwt.sign({userid: userId}, "20061214alone.M", {
//             expiresIn: "10m",
//         });
//     };
//     veritifyToken() {
//         try {
//             const payload = jwt.verify(token, "20061214alone.M");
//             return payload;
//         } catch (error) {
//             throw new CustomerError (error.message, 401);
//         };
//     };
// };

// export default JwtService;





// import jwt from "jsonwebtoken";
// import CustomerError from "../utils/customer.error.js";

// class JwtService {
//     constructor() {};

//     async validateAuthRegister() {
//         const token = jwt.sign({userid: userId}, "20061214alone.M", {
//             expiresIn: "10m",
//         });
//         return token;
//     };
//     async validateAuthLogin() {
//         try {
//             const payload  = jwt.verify(token, "20061214alone.M");
//             return payload;
//         } catch (error) {
//             throw new CustomerError(error.message);
//         };
//     };
// };

// export default JwtService;



import jwt from "jsonwebtoken";
import CustomerError from "../utils/customer.error.js";

class JwtService {
    constructor() {};
    async  validateAuthRegister() {
        const token = jwt.sign({userid: userId}, "20061214alone.M", {
            expiresIn: "10m"
        });
        return token;
    };
    async validateAuthLogin() {
        try {
            const payload = jwt.verify(token, "20061214alone.M");
            return payload;
        } catch (error) {
            throw new CustomerError (error.message);
        };
    };
};

export default JwtService;
