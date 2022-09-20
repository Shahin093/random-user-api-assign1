const users = require("../users.json");

module.exports.getUsers = (req, res, next) => {
    // console.log(users);
    const randomMonth = users[Math.floor(Math.random() * (users.length - 1)) + 1];
    res.json({ user: randomMonth });
    // res.json(users);
}

module.exports.getAllData = (req, res, next) => {
    res.json(users);
}
module.exports.saveAUser = (req, res, next) => {
    console.log(req.body);
    users.push(req.body);
    res.send(users);
}

 // "id":6,
    // "gender":"famale",
    // "name":"azmira"