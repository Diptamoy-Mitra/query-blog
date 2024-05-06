//we use it in the place of errors in the routes
export const errorHandler=(statuscode, message)=>{
    const error=new Error();  //creating new error object
    error.statusCode=statuscode; //setting status code
    error.message=message; //setting message
    return error;
}