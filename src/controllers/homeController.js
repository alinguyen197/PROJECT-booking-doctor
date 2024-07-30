import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    res.json(data);
    // console.log(data)
    // res.render("homepage.ejs", {
    //   data: JSON.stringify(data),
    // });
  } catch (error) {
    console.log(error);
  }
};

let getCrudPage = async (req, res) => {
  try {
    res.render("crud/crud.ejs");
  } catch (error) {}
};

module.exports = {
  getHomePage,
  getCrudPage,
};
