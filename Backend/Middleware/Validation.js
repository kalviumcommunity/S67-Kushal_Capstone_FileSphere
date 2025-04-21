module.exports = (req, res, next) => {
    const { password } = req.body;
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!password || !passwordRegex.test(password)) {
      return res.status(400).json({
        Message:
          'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number and one special character.',
      });
    }
  
    next();
  };
  