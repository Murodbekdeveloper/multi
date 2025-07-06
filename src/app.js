// // import express from "express";
// // import database from "./config/database.js";
// // import Routers from "./router/routes.js";


// // const app = express();
// // app.use(express.json());
// // app.use("/api", Routers());
// // app.use((err, req, res, next) => {
// //     res.status((err.status).json({
// //         message:err.message
// //     }));
// // });

// // const initapp = async () => {
// //     try {
// //         await database.initialize();
// //         console.log("Database connect");
// //         app.listen(4000, () => {
// //             console.log("Server is run with port", 4000);
// //         });
// //     } catch (error) {
        
// //     };
// // };
// // initapp();





// // import express from "express";
// // import Routers from "./router/routes.js";
// // import database from "./config/database.js";

// // const app = express();
// // app.use(express.json());
// // app.use("/api", Routers());
// // app.use((err, req, res, next) => {
// //     res.status(err.message).json({
// //         message:err.message,
// //     });
// // });

// // const appitem = async () => {
// //     try {
// //         await database.initialize();
// //         console.log("Database connect");
// //         app.listen(4000, () => {
// //             console.log("Server is run with Port", 4000);
// //         });
// //     } catch (error) {
        
// //     }
// // };
// // appitem();



// // import express from "express";
// // import Routers from "./router/routes.js";
// // import database from "./config/database.js";

// // const server = express();
// // server.use(express.json());
// // server.use("/api", Routers);
// // server.use((err, req, res, next) => {
// //     res.status(err.message).json({
// //         message:err.message
// //     });
// // });

// // const serverItem = async () => {
// //     await database.initialize();
// //     console.log("Database connect");
// //     server.listen(4000, () => {
// //         console.log("Server run with Port", 4000);
// //     });
// // };

// // export default serverItem;


import express from "express";
import Routers from "./router/routes.js";
import CustomerError from "./utils/customer.error.js";


const server = express();
server.use(express.json());
server.use("/api", Routers);
server.use((err, req, res, next) => {
    res.status(err.message).json({
        message:err.message
    });
});

const serveritem = async () => {
    try {
        await import("./config/database.js");
        console.log("Database connect");
        server.listen(2000, () => {
            console.log("Server run with Port 4000"), 4000
        });
    } catch (error) {
        throw new CustomerError(error.message);
    };
};
serveritem();

