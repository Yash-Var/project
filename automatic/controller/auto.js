const auto = require("../models/auto");
const getAllMember = async (req, res) => {
  try {
    const member = await auto.find({});
    // console.log(member);
    res.status(200).json({ member });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleMenber = async (req, res) => {
  try {
    console.log(req.params);
    const { e: Name } = req.params;
    // const {id:Name}=req.params
    const autos = await auto.findOne({ name: Name });
    if (!autos) {
      return res.send(404).send(`no such name`);
    }
    res.status(200).json({ autos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createAuto = async (req, res) => {
  const task = await auto.create(req.body);
  res.status(201).json({ task });
};

const deleteAuto = async (req, res) => {
  try {
    console.log(req.params);
    const { e: Name } = req.params;
    // const {id:Name}=req.params
    const autos = await auto.findOneAndDelete({ name: Name });
    if (!autos) {
      return res.send(404).send(`no such name`);
    }
    res.status(200).json({ autos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateAuto = async (req, res) => {
  try {
    console.log(req.params);
    const { e: Name } = req.params;
        const autos = await auto.findOneAndUpdate({ name: Name }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!autos) {
      return res.send(404).send(`no such name`);
    }
    res.status(200).json({ autos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllMember,
  getSingleMenber,
  createAuto,
  deleteAuto,
  updateAuto
};
