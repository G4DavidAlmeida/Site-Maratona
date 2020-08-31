const LocalStrategy = require('passport-local').Strategy

/** @param {import('passport').PassportStatic} passport */
module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      try {

      } catch (err) {
        console.log(err)
        done(err)
      }
    })
  )
}
