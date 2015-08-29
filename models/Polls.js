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
    choices: [choiceSchema],
    updated_at: String,
    created_at: String
});

////// .pre() method will occur everytime the object is saved 
//PollSchema.pre('save', function (next) {
//    //get the date
//    var currentDate = new Data();
//    //set the last update to now
//    this.updated_at = currentDate;
//    //if the object is new, set the created date to now
//    if (!this.created_at) {
//        this.created_at = currentDate;
//    }
//    next();
//});

//register the model with the global mongoose object so that it can interact with the model anywhere it is imported
mongoose.model('Poll', PollSchema);