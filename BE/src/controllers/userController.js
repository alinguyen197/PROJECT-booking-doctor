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

const getAllUsers = async (req, res) => {
  try {
    const id = req.body.id; // ALL or id : number
    if (!id) {
      return res.status(200).json({
        errorCode: 1,
        message: "Missing required parameters",
        users: [],
      });
    }
    const users = await userService.handleGetAllUser(id);
    res.status(200).json({
      errorCode: 0,
      message: "success",
      users
    });
  } catch (error) {}
};
module.exports = {
  handleLogin,
  getAllUsers,
};
