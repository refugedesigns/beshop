const asyncHandler = require("express-async-handler");
const { isValidToken, attachAccessToken } = require("../utils");
const { UnauthenticatedError } = require("../errors");
const Token = require("../models/token.model")

const authenticateUser = asyncHandler(async(req, res, next) => {
    const { refreshToken, accessToken } = req.signedCookies;


    if(accessToken) {
        const payload = isValidToken(accessToken) 

        if(payload.user.id === req.user._id) {
            return next();
        }
    }else if(refreshToken) {
      const payload = isValidToken(refreshToken);

      if (!payload) {
        throw new UnauthenticatedError("Authentication Invalid");
      }

      const existingToken = await Token.findOne({
        user: payload.user.id,
        refreshToken: user.refreshToken,
      });

      if (!existingToken || !existingToken.isValid) {
        throw new UnauthenticatedError("Authentication Invalid");
      }

      attachAccessToken({ res, user });

      next();
    }else {
        throw new UnauthenticatedError("Session timeout, please login first");
    }

})

module.exports = authenticateUser