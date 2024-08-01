import CRUDService from "../services/crudService";
let getHomePage = async (req, res) => {
  try {
    res.render("homepage.ejs");
  } catch (error) {
    console.log(error);
  }
};

let getCRUD = async (req, res) => {
  try {
    res.render("crud/crudpage.ejs");
  } catch (error) {}
};

let displayCRUD = async (req, res) => {
  try {
    let users = await CRUDService.getAllUsers();
    res.render("crud/displayCRUD.ejs", { dataTable: users });
  } catch (error) {}
};

let editCRUD = async (req, res) => {
  try {
    const userId = req.query.id;
    if (userId) {
      let user = await CRUDService.getUserInfoById(userId);
      // check user
      if (user) {
        res.render("crud/editCRUD.ejs", { dataTable: user });
      } else {
      }
    } else {
      res.render("user not found");
    }
  } catch (error) {}
};

let postCRUD = async (req, res) => {
  try {
    let message = await CRUDService.createNewUser(req.body);
    res.redirect("/get-crud");
  } catch (error) {}
};

let putCRUD = async (req, res) => {
  try {
    const user = req.body;
    const userId = req.query.id;
    let users = await CRUDService.updateUserData(user, userId);
    // res.render('crud/displayCRUD.ejs', { dataTable:users })
    // dùng redirect thì dùng đường path
    res.redirect("/get-crud");
  } catch (error) {}
};

let deleteCRUD = async (req, res) => {
  try {
    const userId = req.query.id;
    if (userId) {
      await CRUDService.deleteUserData(userId);
      res.redirect("/get-crud");
    } else {
      res.send("User not found");
    }
  } catch (error) {}
};

module.exports = {
  getHomePage,
  getCRUD,
  displayCRUD,
  postCRUD,
  editCRUD,
  putCRUD,
  deleteCRUD,
};
