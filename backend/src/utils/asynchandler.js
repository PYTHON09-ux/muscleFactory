const asynchandler= (cb)=> {
    return (req, res, next)=>{
        Promise.resolve(cb(req, res, next))
        .catch((err)=>next(err));
    }
}

export {asynchandler}