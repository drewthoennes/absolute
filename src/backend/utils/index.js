const jwt = require('jsonwebtoken');

function authorize(req) {
  return new Promise((resolve, reject) => {
    if (!req) {
      return reject('Missing req or params');
    }

    if (!req.headers.authorization) {
      return reject('Missing necessary authorization');
    }

    let token = req.headers.authorization;

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    if (!token) {
      return reject('Invalid token');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return reject('Invalid token');
      }

      return resolve(decoded);
    });
  });
}

module.exports = {authorize};
