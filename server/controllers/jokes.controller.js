const Joke = require('../models/jokes.model');


// get all jokes
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allJokes => res.json( allJokes ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// get one single joke
module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne()
    .then(oneSingleJoke => res.json({ joke: oneSingleJoke}))
    .catch(err => res.json({ message: "Sometjing went wrong", err: err }));
}

// create a joke
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// update a joke
module.exports.updateExistingJoke = (req, res) => {
  Joke.updateOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updateJoke => res.json({ joke: updateJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// delete a function
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", err: err}))
}



