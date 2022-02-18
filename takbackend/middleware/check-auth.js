const axios = require('axios');

module.exports = (req, res, next) => {

  try {
    const baseJWTURL = process.env.JWT_BASE_URL;

    axios.get( baseJWTURL + req.headers.authorization ).then(function (response) {

      const authData = response.data;

      if (authData.status && authData.status.code == 401) {

        return res.status(401).json({
          status: {
            message: "Auth Failed!",
            code: 401,
          },
        });

      } else {
        req.userData = {
          email: authData.data.email,
          userId: authData.data.userId,
          mobile: authData.data.mobile,
          orgId: authData.data.orgId,
          wacId: authData.data.wacId,
        };
        next();
      }
    })
      .catch(function (error) {
        console.log("axios error : ", error);
        return res.status(403).json({
          status: {
            message: "Unable to connect to Authentication",
            code: 403,
          },
        });
      });

  } catch (e) {
    console.log(e);
    res.status(401).json({
      status: {
        message: "Auth Failed!",
        code: 401,
      },
    });
  }
};
