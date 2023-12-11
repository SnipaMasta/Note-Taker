const router = require('express').Router();
const {v4: uuid} = require('uuid');
const fs = requirer('fs');

//get route
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'))
    res.json(dbJson);
})

//post route
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json','utf8'))
    const newFeedback = {
        title: req.body.title,
        text: req.body.text, 
        id: uuid(),
    };
    dbJson.push(newFeedback)
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson))
    res.json(dbJson)
})