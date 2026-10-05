//Loads Node.js built-in tools. 
const http = require('http'); //Creates a web server. 
const fs = require('fs'); //Reads the files. 
const url = require('url'); //Separates parts of the URL.
const querystring = require('querystring'); //Reads answers from the URL. 
const { info } = require('console');

//There are 3groups of possible name; renane then to 'name', so tht it won't conflict with the generated names. 
const name = {
    a: {
        first: [
            'Ned', 'Sansa', 'Arya', 'Bran', 'John'
        ],
        last: [
            'Stark', 'Stark', 'Stark', 'Stark', 'Snow'
        ]
    },
    b: {
        first: [
            'Tyrion', 'The Hound', 'Tyrion', 'Euron', 'Margaery'
        ],
        last: [
            'Lannister', 'Clegane', 'Lannister', 'Greyjoy', 'Tyrell'
        ]
    },
    c: {
        first: [
            'Danerys', 'Jamie', 'Cersei', 'Theon', 'Robert'
        ],
        last: [
            'Targaryen', 'Lannister', 'Lannister', 'Greyjoy', 'Baratheon'
        ]
    }
};

// Pick a random item and pass it into the function. 
function listMaker(list) {
    return list[Math.floor(Math.random() * list.length)];
}

//Find which answer letter was selected most often. Only gives one letter winner. 
function mostSelected(answered) { 
    const counts = {
        a: 0,
        b: 0,
        c: 0
    };
    //Take a look at each answer and increase it by 1. 
    answered.forEach(function (answer) {
        if (counts[answer] !== undefined) {
            counts[answer] += 1; // count how many times a, b, c comes out.
        }
    });
    //Start with 'a', then compare the others against it. 
    let winner = 'a';
    if (counts.b > counts[winner]) {
        winner = 'b';
    }
    if (counts.c > counts[winner]) {
        winner = 'c';
    }

    return winner;
}
//This function will run whenever the server recieves a request. 
//The REQUEST will hold all information about the incoming request. 
//The RESPONSE lets us send back a response to the broswer. 
const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname; //Pathname: /api
    const params = querystring.parse(url.parse(req.url).query); //Turns the params into an objet containing th answers. 
    console.log(page);

    if (page == '/') {
        //Send this HTML when someone visits the home page. 
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (page == '/api') {
        //Collect the five answers sents by the browswer JS. 
        const answer = [params.a1, params.a2, params.a3, params.a4, params.a5]
        //Find the most commin answer letter
        const letter = mostSelected(answer); 
        //Use the letter to find it's group in the name object. 
        const group = name[letter]; 
        //To independently pick a 'first and last name'. 
        const generateName = listMaker(group.first) + ' ' + listMaker(group.last);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        //Send an object with a 'name'property. 
        //Your broswer Javascript reads this as data.name.
        res.end(JSON.stringify({ name: generateName }));
    } else if (page === '/CSS/wuTang.css') {
        fs.readFile('CSS/wuTang.css', function (err, data) {
            if (err) {
                res.writeHead(500);
                res.end('Could not load CSS.');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    } else if (page === '/JS/wuTang.js') {
    fs.readFile('JS/wuTang.js', function (err, data) {
        if (err) {
            res.writeHead(500);
            res.end('Could not load JavaScript.');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(data);
    });
    } else {
        //404 means the request port wasn't found.
        res.writeHead(404);
        res.end('Not found');
        return;
    }
});
//Starts accepting requests in port 8000.
server.listen(8001);
