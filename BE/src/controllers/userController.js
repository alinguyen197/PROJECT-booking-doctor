import userService from "../services/userService";
const handleLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(500).json({
        errorCode: 1,
        message: "Missing email or password",
      });
    }
    // check email
    // compare password
    // return userInfor
    // access token : JWT token
    let userData = await userService.handleUserLogin(email, password);

    res.status(200).json({
      errorCode: userData.errorCode,
      message: userData.errorMessage,
      user: userData.user ? userData.user : {},
    });
  } catch (error) {}
};

const getUserPage = (req, res) => {
  try {
    res.status(200).json({ message: 111 });
  } catch (error) {}
};
module.exports = {
  handleLogin,
  getUserPage,
};
