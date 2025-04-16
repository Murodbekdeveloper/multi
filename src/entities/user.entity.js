// import { EntitySchema } from "typeorm";

// const userSchema =  new EntitySchema({
//     name: "kings",
//     columns: {
//         id:{
//             primary: true,
//             type: "int",
//             generated: true
//         },
//         username: {
//             type: "varchar(32)",
//             unique: true,
//             nullable: false
//         },
//         password: {
//             type: varchar(32),
//             nullable: false,
//         },
//         balance: {
//             type: "int",
//             default: 1000,
//         },
//         currency: {
//             type: "varchar(32)",
//             default: "UZS"
//         },
//         createAt: {
//             createDate: true
//         },
//         updateAt: {
//             updateDate: true
//         }
//     },
// });

// export default userSchema;



// import { EntitySchema } from "typeorm";

// const userSchema = new EntitySchema({
//     name: "kings",
//     columns: {
//         id: {
//             primary: true,
//             type: "int",
//             generated: true
//         },
//         username: {
//             type: "varchar(32)",
//             unique: true,
//             nullable: false
//         },
//         password: {
//             type: "varchar(32)",
//             nullable: false
//         },
//         balance: {
//             type: "int",
//             default: 1000
//         },
//         currency: {
//             type: "varchar(32)",
//             default: "UZS"
//         },
//     },
// });
// export default userSchema;




// import { EntitySchema } from "typeorm";

// const UserSchema = new EntitySchema({

// });
// export default UserSchema;



// import { EntitySchema } from "typeorm";

// const UserSchema = new EntitySchema({
//     name: "Tajriba",
//     tableName: "sinov",
//     columns: {
//         id: {
//             primary: true,
//             type: "int",
//             generated: true,
//         },
//         username: {
//             type: "varchar(32)",
//             unique: true,
//             nullable: false
//         },
//         password: {
//             type: "varchar(32)",
//             nullable: false,
//         },
//         balance: {
//             type: "int",
//             default: 1000
//         },
//         currency: {
//             type: "varchar(32)",
//             default: "UZS"
//         }
//     }
// });
// export default UserSchema;



import { EntitySchema } from "typeorm";

const UserSchema = new EntitySchema({
    name: "Tajriba",
    tableName: "sinov",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        username: {
            type: "varchar(32)",
            unique: true,
            nullable: false
        },
        password: {
            type: "varchar(32)",
            nullable: false,
        },
        balance: {
            type: "int",
            default: 1000
        },
        currency: {
            type: "varchar(32)",
            default: "UZS"
        }
    }
});
export default UserSchema;