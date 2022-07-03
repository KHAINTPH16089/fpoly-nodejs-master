import express from "express";
import Product from "../modules/product";

export const creat = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
}

export const list = async (req, res) => {
    try {
        const product = await Product.find({}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không tìm thấy sản phẩm"
        })
    }
}

export const get = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được sản phẩm"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được sản phẩm"
        })
    }
}

export const update = async (req, res) => {
    const conditions = {_id: req.params.id};
    const update = ({name: "rau update"});
    try {
        const product = await Product.findOneAndUpdate(conditions, update).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được sản phẩm"
        })
    }
}