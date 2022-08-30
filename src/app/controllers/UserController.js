class UserController {
    // GET 
    index(req, res) {
        res.render('user')
    }

    show(req, res) {
        res.render('user')
    }

}

module.exports = new UserController