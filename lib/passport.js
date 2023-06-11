const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const { user_game } = require('../models');


const options = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),

  secretOrKey: 'Ini rahasia ga boleh disebar-sebar',
}

passport.use(new JwtStrategy(options, async (payload, done) => {

  user_game.findByPk(payload.id)
    .then(user => done(null, user))
    .catch(err => done(err, false))
}));

module.exports = passport;