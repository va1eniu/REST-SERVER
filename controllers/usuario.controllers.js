
const getUsers =  (req, res) => {
    res.json({
      message: "homepage",
    });
  }



 const postUsers =  (req, res) => {
    res.json({
      message: "post api",
    });
  }


 const delteUsers =(req, res) => {
    res.json({
      message: "delete",
    });
  }

  const putUsers = (req, res) => {
    res.json({
      message: "put",
    });
  }


 const patchUsers =  (req, res) => {
    res.json({
      message: "patch",
    });
  }
  
  module.exports = {
    getUsers,
    postUsers,
    delteUsers,
    putUsers,
    patchUsers
  }