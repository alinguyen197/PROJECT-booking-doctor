import db from '../models/index'

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll()    
    // res.json(data)
    // console.log(data)
    res.render("homepage.ejs",{
      data:JSON.stringify(data)
    });
  } catch (error) {
    console.log(error)
  }

};

module.exports = {
  getHomePage,
};
