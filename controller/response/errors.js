const badReq = () =>{
    return {"status":"Bad Request", "code":400}
}

const notFound = () =>{
    return {"status":"Not Found", "code":404}
}

const serverErr = () =>{
    return {"status":"Server Error", "code":500}
}

const dupErr = () =>{
    return {"status":"Duplicate Error","code":400}
}

module.exports = {badReq, notFound, serverErr, dupErr}