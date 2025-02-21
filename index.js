import express from 'express';
import * as path from 'path';
import { allClasses } from './data/characterClasses.js';
import { midgard } from './data/realm.js';
import previewRouter from './routes/preview.js';
import classesRouter from './routes/classes.js';
import racesRouter from './routes/races.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.render('pages/base', {
        headerTitle: 'Midgard',
        headTitle: 'Midgard',
        classData: allClasses,
        preview: true,
        description: midgard.description,
    })
})

app.use('/preview', previewRouter);
app.use('/classes', classesRouter);
app.use('/races', racesRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));