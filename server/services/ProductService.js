const UserModel = require("../models/Products");

exports.getAllProducts = async (req, res) => {
  try {
    let data = await UserModel.find();
    res.status(200).send({ data: [...data], success: true });
  } catch (err) {
    console.log(err);
    res.status(404).send({ success: false, msg: err.message });
  }
};

exports.addProduct = async (req, res) => {
  const user = new UserModel(req.body);

  try {
    await user.save();
    res.status(201).send({ data: user["_doc"], success: true });
  } catch (err) {
    console.log(err);
    res.status(400).send({ success: false, msg: err.message });
  }
};
