// import Joi from "joi";

// class JoiService {
//     async validateAuthRegister(body) {
//         const payload = Joi.object({
//             username: Joi.string().min(5).max(32).required(),
//             password: Joi.string().min(5).max(233).required,
//         });
//         await payload.validateAsync(body);
//     };
//     async validateAuthLogin(body) {
//         const payload = Joi.object({
//             username: Joi.string().min(5).max(43).required(),
//             password: Joi.string().min(5).max(43).required()
//         });
//         await payload.validateAsync(body)
//     };
// };

// export default JoiService





// import Joi from "joi";

// class JoiService {
//     async validateAuthRegister(body) {
//         const token = Joi.object({
//             username: Joi.string().min(5).max(32).required(),
//             password: Joi.string().min(4).max(45).required()
//         });
//         await token.validateAsync(body);
//     };
//     async validateAuthLogin(body) {
//         const token = Joi.object({
//             username: Joi.string().min(5).max(34).required(),
//             password: Joi.string().min(3).max(43).required()
//         });
//         await token.validateAsync(body);
//     };
// };

// export default JoiService;




import Joi from "joi";

class JoiService {
    async validateAuthRegister(body) {
        const token = Joi.object({
            username: Joi.string().min(5).max(34).required(),
            password: Joi.string().min(4).max(24).required()
        });
        await token.validateAsync(body);
    };
    async validateAuthLogin(body) {
        const token = Joi.object({
            username: Joi.string().min(4).max(43).required(),
            password: Joi.string().min(4).max(53).required(),
        });
        await token.validateAsync(body);
    };
};

export default JoiService;