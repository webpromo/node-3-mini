let allMessages = [];

module.exports = {
  getAllMessages: (req, res) => {
    res.status(200).send(allMessages);
  }
};
