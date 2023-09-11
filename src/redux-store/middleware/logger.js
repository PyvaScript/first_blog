export const loggerMiddleware=(store)=>(next)=>(action)=>{
    console.log("Running custom coded middleware");
    console.log("The old state: ",store.getState);
    if(!action.type) {
        return next(action);
    };

    console.log('Middleware action type: ',action.type);
    console.log('Middleware action payload: ',action.payload);

    next(action);

    console.log('The new state: ',store.getState);
};
