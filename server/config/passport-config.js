let LocalStrategy = require('passport-local').Strategy


function initialize(passport) {
    let authenticateUser = (user, password, done) => {
        if (user == null) {
            return done(null, false, {message: "No user with that name found."})
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'user'}), authenticateUser)
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}