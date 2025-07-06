// class CustomerError extends Error{
//     constructor(message, status){
//         super(message);
//         this.status = status;
//     };
// };

// export default CustomerError; 




// class CustomerError extends Error{
//     constructor(message, status) {
//         super(message);
//         this.status = status;
//     };
// };

// export default CustomerError;





// class CustomerError extends Error{
//     constructor(message, status) {
//         super(message);
//         this.status = status;
//     };
// };

// export default CustomerError;


// class CustomerError extends Error{
//     constructor(message, status) {
//         super(message);
//         this.status = status;
//     };
// };

// export default CustomerError;



// class CustomerError extends Error{
//     constructor(message, status) {
//         super(message);
//         this.status = status;
//     };
// };
// export default CustomerError;

class CustomerError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default CustomerError;
