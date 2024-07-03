// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const comments = require('./comments');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(expressValidator());

app.get('/comments', (req, res) => {
    res.send(comments.getComments());
});

app.post('/comments', (req, res) => {
    req.checkBody('comment', 'Invalid comment').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        return res.status(400).json({ errors: errors });
    }

    comments.addComment(req.body.comment);
    res.send(comments.getComments());
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});ine