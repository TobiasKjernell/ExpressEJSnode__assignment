import express from 'express';
import { allRaces } from '../data/characterClasses.js';
import * as helpers from '../helpers/helpers.js'

const racesRouter = express.Router();

//Overview of combat types for races
racesRouter.get('/', (req, res) => {
    res.render('pages/home', {
        root: helpers.rootSearch(req.url),
        headTitle: "Races Overview",
        headerTitle: "Races Overview",
        preview: true,
        overviewData: allRaces,
        url: req
    })
})

allRaces.forEach((typeOfCombatClass, index) => {
    racesRouter.get(`/${typeOfCombatClass.name.toLowerCase()}`, (req, res) => {
        res.render('pages/home', {
            root: helpers.rootSearch(req.url),
            headTitle: typeOfCombatClass.name,
            headerTitle: `${typeOfCombatClass.name}`,
            preview: false,
            classData: typeOfCombatClass,
            specificObject: true,
            url: req
        })
    })
});

export default racesRouter;