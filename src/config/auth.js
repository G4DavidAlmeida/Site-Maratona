module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) return next()
    else {
      req.flash('error_msg', 'Você deve estar conectado antes de acessar esta página')
      res.redirect('/')
    }
  }
}
