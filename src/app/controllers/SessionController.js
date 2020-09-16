const passport = require('passport')
const { validationResult } = require('express-validator')

class SessionController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * */
  async store (req, res, next) {
    const result = validationResult(req)

    if (!result.isEmpty()) {
      return res.status(400)
        .render('login', {
          errors: result.array(),
          ...req.body
        })
    }

    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/',
      failureFlash: true
    })(req, res, next)
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * */
  async destroy (req, res) {
    req.logout()
    req.flash('success_msg', 'Você saiu da conta')
    return res.redirect('/')
  }
}

module.exports = new SessionController()
