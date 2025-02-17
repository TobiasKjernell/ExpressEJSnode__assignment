import express from 'express';
import { allRaces } from '../data/characterClasses.js';
import * as helpers from '../helpers/helpers.js'

const racesRouter = express.Router();


//Overview of combat types for races
racesRouter.get('/', (req, res) => {
    console.log(allRaces);
    res.render('pages/home', {
        root: helpers.rootSearch(req.url),
        headTitle: "Races Overview",
        headerTitle: "Races Overview",
        preview: true,
        overviewData: allRaces,
        url: req
    })
})


// racesRouter.forEach((typeOfCombatClass, index) => {
//     classesRouter.get(`/${typeOfCombatClass.toLowerCase()}`, (req, res) => {
//         res.render('pages/home', {
//             root: helpers.rootSearch(req.url),
//             headTitle: typeOfCombatClass,
//             headerTitle: `${typeOfCombatClass}`,
//             preview: false,
//             classData: allClasses.filter(classID => classID.classType === typeOfCombatClass),
//             indexID: index,
//             url: req.baseUrl,
//         })
//     })
// });



export default racesRouter;