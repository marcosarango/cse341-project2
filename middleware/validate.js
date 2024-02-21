const validator = require('../helpers/validate');

const saveUsers = (req, res, next) => {
  const validationRule = {
    email: 'required|email',
    username: 'required|string',
    Name: 'required|string',
    ipaddress: 'required|number',
    
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


const saveLaptop = (req, res, next) => {
  const validationRule = {
    email: 'required|email',
    username: 'required|string',
    Name: 'required|string',
    ipaddress: 'required|number',
    
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};
module.exports = {
  saveUsers,
  saveLaptop
};