const User = require('../models/Users')

class MainController {
    // GET 
    home(req, res) {
        // User.find({}, (err, users) => {
        //     if (!err) res.json(users)
        //     else res.status(500).json({ error: err, status: 500 })
        // })

        res.render('home')
    }

    search(req, res) {
        res.render('search')
    }

}

module.exports = new MainController