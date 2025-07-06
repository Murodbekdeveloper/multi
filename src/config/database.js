// import typeorm from "typeorm";

// const database = new typeorm.DataSource({
//     type: "postgres",
//     host: "localhost",
//     database: "tortinchidars",
//     username: "postgres",
//     password: "20061214alone.M",
//     synchronize: true,
//     entities: [process.cwd() + "/**/*.entity{.js}"],
// });

// export default database;




// import typeorm from "typeorm";

// const database = new typeorm.DataSource({
//     type: "postgres",
//     host: "localhost",
//     database: "postgres",
//     username: "tortinchidars",
//     port: 5432,
//     password: "20061214alone.M",
//     synchronize: true,
//     entities: [process.cwd() + "/**/*.entity{.js}"],
// });
// export default database;




// import typeorm from "typeorm";


// const database = new typeorm.DataSource({
//     type: "postgres",
//     host: "localhost",
//     database: "postgres",
//     port: 5432,
//     name: "tortinchidars",
//     password: "20061214alone.M",
//     synchronize: true,
//     entities: [process.cwd() + "/**/*.entity{.js}"]
// });

// export default database;




// import typeorm from "typeorm";

// const database = new typeorm.DataSource({
//     type: "postgres",
//     host: "localhost",
//     database: "tajriba",
//     port: 5432,
//     username: "postgres",
//     password: "20061214alone.M",
//     autoLoadEntities: true,
//     logging: true,
//     synchronize: true,
//     entities: [process.cwd() + "/**/*.entity{.js}"]
// });

// export const dataSource = await database.initialize();




// import typeorm from "typeorm";

// const database = new typeorm.DataSource({
//     type: "postgres",
//     host: "localhost",
//     database: "tortinchidars",
//     username: "postgres",
//     port: 5432,
//     password: "20061214alone.M",
//     autoLoadEntities: true,
//     logging: true,
//     synchronize: true,
//     entities: [process.cwd() + "/**/*.entity{.js}"]
// });

// export const dataSource = await database.initialize();



import typeorm from "typeorm";

const database = new typeorm.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "20061214alone.M",
    database: "kings",
    synchronize: true,
    logging: true,
    autoLoadEntities: true, 
    entities: [process.cwd() + "/src/**/*.entity.js"] 
});

export const dataSource = await database.initialize();
