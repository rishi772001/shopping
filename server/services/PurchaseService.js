const purchaseModel = require("../models/Purchase");

exports.getAllPurchase = async (req, res) => {
  try {
    let data = await purchaseModel.find().populate("products");
    res.status(200).send({ data: [...data], success: true });
  } catch (err) {
    console.log(err);
    res.status(404).send({ success: false, msg: err.message });
  }
};

exports.addPurchase = async (req, res) => {
  const purchase = new purchaseModel(req.body);

  try {
    await purchase.save();
    res.status(201).send({ data: purchase["_doc"], success: true });
  } catch (err) {
    console.log(err);
    res.status(400).send({ success: false, msg: err.message });
  }
};
