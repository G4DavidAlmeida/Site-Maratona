const LocalStrategy = require('passport-local').Strategy
const User = require('../app/model/User')

/** @param {import('passport').PassportStatic} passport */
module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const user = await User.findOne({ email })

        if (!user) {
          return done(null, false, { message: 'Este email não foi cadastrado' })
        }

        if (user.password === password) {
          return done(null, user)
        }

        return done(null, false, { message: 'senha incorreta' })
      } catch (err) {
        console.log(err)
        done(err)
      }
    })
  )

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(async function (id, done) {
    try {
      const user = User.findOne({ id })

      done(null, user)
    } catch (err) {
      console.error(err)
      done(err)
    }
  })
}

/*
const LocalStrategy = require('passport-local').Strategy
// const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// User model
const User = require('../models/User')

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        // Math user
        const user = await User.findOne({ email }, { email: 1, password: 1 })

        if (!user) return done(null, false, { message: 'That email is not registered' })

        // math password
        if (await bcrypt.compare(password, user.password)) {
          return done(null, user)
        }

        return done(null, false, { message: 'Password incorrect' })
      } catch (err) {
        console.error(err)
        done(err)
      }
    })
  )
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    User.findById(id, { _id: 1 }, function (err, user) {
      done(err, user)
    })
  })
}

*/
