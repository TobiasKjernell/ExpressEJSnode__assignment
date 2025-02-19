import express from 'express';
import { allClasses } from '../data/characterClasses.js';
import * as helpers from '../helpers/helpers.js'

const classesRouter = express.Router();
const overallClassTypes = new Set(allClasses.map(classes => classes.classType));

//Overview of combat types for classes
classesRouter.get('/', (req, res) => {
    res.render('pages/base', {
        root: helpers.rootSearch(req.url),
        headTitle: "Classes Overview",
        headerTitle: "Classes Overview",
        preview: true,
        overviewData: Array.from(overallClassTypes),
        url: req
    })
})

//Classes on combat type ( based on /melee && /range)
overallClassTypes.forEach((typeOfCombatClass, index) => {
    classesRouter.get(`/${typeOfCombatClass.toLowerCase()}`, (req, res) => {
        res.render('pages/base', {
            root: helpers.rootSearch(req.url),
            headTitle: typeOfCombatClass,
            headerTitle: `${typeOfCombatClass}`,
            preview: false,
            classData: allClasses.filter(classID => classID.classType === typeOfCombatClass),
            indexID: index,
            url: req
        })
    })
});

//Specific class on combat type ( /races && /classes)
allClasses.forEach((specificClass, index) => {
    classesRouter.get(`/${specificClass.classType.toLowerCase()}/${allClasses[index].name}`, (req, res) => {
        res.render('pages/base', {
            root: helpers.rootSearch(req.url),
            headTitle: specificClass.name,
            headerTitle: specificClass.classType,
            preview: false,
            classData: specificClass,
            specificObject: true,
            url: req
        })
    })
})

export default classesRouter;