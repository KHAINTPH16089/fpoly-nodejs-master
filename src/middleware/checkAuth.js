import express from "express";
export const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if(isAdmin){
        next();
    }else{
        console.log("alo alo");
    }
}
