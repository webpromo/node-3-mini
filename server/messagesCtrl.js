let allMessages = [];

module.exports = {
    getAllMessages: (req,res) => {
        res.status(200).send(allMessages);
    },
    createMessage: (req,res) => {
        let newMessage = {
            username: req.body.username,
            message: req.body.message
        }
        allMessages.push(newMessage);
// insert session access here
        if(req.session.history) {  // after first time through:
            req.session.history.push(newMessage)
        } else {  /// first time through
            req.session.history = [];
            req.session.history.push(newMessage);
        }
        res.status(200).send(allMessages);
    },
    history: (req,res) => {
        res.status(200).send(req.session.history);
    }
};