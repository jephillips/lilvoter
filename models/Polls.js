var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
    ip: 'String'
});

var choiceSchema = new mongoose.Schema({
    text: String,
    votes: [voteSchema]
});

var PollSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    choices: [choiceSchema]
});

//PollSchema.methods.vote = function (cb, index) {
//    this.options[index].votes += 1;
//    this.save(cb);
//
//}

//register the model with the global mongoose object so that it can interact with the model anywhere it is imported
mongoose.model('Poll', PollSchema);