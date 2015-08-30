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
    var poll = new Poll(req.body);

    poll.save(function (err, poll) {
        if (err) {
            return next(err);
        }

        res.json(poll);
    });

});

// Middleware route to load a poll by id, using express's param() function
//now any route URL containing :poll will use this function
router.param('poll', function (req, res, next, id) {

    var query = Poll.findById(id);

    query.exec(function (err, poll) {
        if (err) {
            return next(err);
        }
        if (!poll) {
            return next(new Error('cannot find poll'));
        }

        req.poll = poll;
        return next();
    });
});

// GET Route to return a single poll
router.get('/polls/:poll', function (req, res, next) {
    res.json(req.poll);
});

//PUT Route to take the users vote
router.put('/polls/:poll/vote', function (req, res, next) {
    req.poll.vote(function (err, poll) {
        if (err) {
            return next(err);
        }

        res.json(poll);

    })

})



module.exports = router;