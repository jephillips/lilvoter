//express-generator boilerplate
var express = require('express');
var router = express.Router();
//make sure mongoose is imported
var mongoose = require('mongoose');
//create handle to Poll model
var Poll = mongoose.model('Poll');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

// GET route for retrieving all polls
//req contains all the info about the request to the server including datafields; res is the object used to respond
router.get('/polls', function (req, res, next) {
    //query the db for all posts
    Poll.find(function (err, poll) {
        //if error, pass to error handler
        if (err) {
            return next(err);
        }
        //else send the posts back to the client
        res.json(poll);
    });
});

// POST route for creating polls
router.post('/polls', function (req, res, next) {
    //create a new poll object in memory before saving to the db
    var body = req.body;
    var choices = body.choices.filter(function (v) {
        return v.text != '';
    })
    var pollobj = {
        title: body.title,
        choices: choices
    };

    var poll = new Poll(pollobj);

    poll.save(function (err, doc) {
        if (err || !doc) {
            return next(err);
        } else {
            res.json(doc);
        }
    });
});

// Middleware route to load a poll by id, using express's param() function
//now any route URL containing :poll will use this function
router.param('poll', function (req, res, next, id) {

    var query = Poll.findById(id);

    query.lean().exec(function (err, poll) {
        if (err) {
            return next(err);
        }
        if (!poll) {
            return next(new Error('cannot find poll'));
        }
        //get some useful stuff for the requested poll
        var userVoted = false;
        var userChoice;
        var totalVotes = 0;
        for (c in poll.choices) {
            var choice = poll.choices[c];
            for (v in choice.votes) {
                var vote = choice.votes[v];
                totalVotes++;
                if (vote.ip === (req.ip || req.header('x-forwarded-for'))) {
                    userVoted = true;
                    userChoice = {
                        _id: choice._id,
                        text: choice.text
                    };
                }
            }
        }
        poll.userVoted = userVoted;
        poll.userChoice = userChoice;
        poll.totalVotes = totalVotes;
        req.poll = poll;
        return next();
    });
});

// GET Route to return a single poll
router.get('/polls/:poll', function (req, res, next) {
    res.json(req.poll);
});

//PUT Route to take the users vote
//assumes that the req contains data.choice
router.put('/polls/:poll/vote', function (req, res, next) {
    Poll.findById(req.poll._id, function (err, poll) {
        var ip = req.header('x-forwarded-for') || req.ip;
        var choice = poll.choices.id(req.body.userChoice);
        console.log('choice is:', choice)
        choice.votes.push({
            ip: ip
        });
        poll.save(function (err, doc) {
            if (err || !doc) {
                return next(err);
            } else {
                var theDoc = {
                    question: doc.question,
                    _id: doc._id,
                    choices: doc.choices,
                    userVoted: false,
                    totalVotes: 0
                };
                for (var i = 0, ln = doc.choices.length; i < ln; i++) {
                    var choice = doc.choices[i];
                    for (var j = 0, jLn = choice.votes.length; j < jLn; j++) {
                        var vote = choice.votes[j];
                        theDoc.totalVotes++;
                        theDoc.ip = ip;
                        if (vote.ip === ip) {
                            theDoc.userVoted = true;
                            theDoc.userChoice = {
                                _id: choice._id,
                                text: choice.text
                            };
                        }
                    }
                }

                res.json(doc);
            }
        });
    });
});



module.exports = router;