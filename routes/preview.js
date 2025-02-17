import express from 'express';
import { allClasses } from '../data/characterClasses.js';
import * as helpers from '../helpers/helpers.js'

const previewRouter = express.Router();

previewRouter.get('/', (req, res) => {
    res.redirect('../')
})

allClasses.forEach((previewClass, index) => {
    previewRouter.get(`/${previewClass.name.replaceAll(" ", "").toLowerCase()}`, (req, res) => {
        res.render('pages/home',{
            root: helpers.rootSearch(req.url),
            headTitle: previewClass.name,
            headerTitle: previewClass.name,
            classData: allClasses,
            indexID: index,
            preview: true,
            url: req
        })
    });
})

export default previewRouter;
