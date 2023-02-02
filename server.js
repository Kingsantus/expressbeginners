const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

//express read app.get like a waterfall from up to down
//express accept regular expressions || regex
//regex here is must begin with(^) /, end with / ($), | or index(.html)? html is not mandatory
app.get('^/$|/index(.html)?', (req, res) => {
    // to send a file like html
    res.sendFile(path.join(__dirname, 'views', 'index.html'));;
})
app.get('/new-page(.html)?', (req, res) => {
    // to send a file like html
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})

//redirecting page route
app.get('/old-page(.html)?', (req, res) => {
    // to redirect a file like html
    res.redirect(301,'./new-page.html'); //302 by default
})

//route handlers
// we can chain handles
app.get('/hello(.html)?', (req, res, next)=> {
    console.log('attempt to load hello.html');
    next()
}, (req, res)=>{
    res.send('Hello World');
})

//chaining route handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('three');
    res.send('Finished!');
}

app.get('/chain(.html)?', [one, two, three]);


//ensuring that all route not in your directory end up in 404
app.get('/*', (req, res)=> {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));