let users = require("../users.json");

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
    users.push(req.body);
    res.send(users);

}
module.exports.updateAUser = (req, res, next) => {
    const { id } = req.params;
    const newData = users.find(user => user.id === Number(id));
    newData.id = id;
    newData.gender = req.body.gender;
    newData.name = req.body.name;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photourl = req.body.photourl;
    res.send(newData);
}

module.exports.deleteAUser = (req, res, next) => {
    // res.send('hii delete');
    const { id } = req.params;
    users = users.filter(user => user.id !== Number(id));
    res.send(users);
}


 // "id":6,
    // "gender":"famale",
    // "name":"azmira"