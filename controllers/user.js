import { user } from "../models/user.js";

export const getAllusers = async (req, res) => {
  const users = await user.find({});
  console.log("The users");
  res.json({
    success: true,
    users: users,
  });
};

export const userregister = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("The user registered now : ");
  console.log(name, email, password);

  await user.create({
    name,
    email,
    password,
  });

  res.json({
    success: true,
  });
};

export const getUserbyId = async (req, res) => {
  // const { email } = req.query;
  // console.log(email);
  // const userdetails = await user.findOne({ email });
  // To access dynamic urls
  // console.log("Req . params", req.params);
  const { id } = req.params;
  const userdetails = await user.findById(id);
  console.log("The user details are");
  console.log(userdetails);
  res.json({
    success: 200,
    userdetails,
  });
};

export const updateUser = async (req, res) => {
  // const { email } = req.query;
  // console.log(email);
  // console.log("Req . params", req.params);

  const { id } = req.params;
  const userdetails = await user.findById({ id });
  console.log("The user details to be updated are");
  console.log(userdetails);
  res.json({
    success: 200,
    userdetails,
    message: "updated",
  });
};

export const deleteUser = async (req, res) => {
  // const { email } = req.query;
  // console.log(email);
  // const userdetails = await user.findOne({ email });

  const { id } = req.params;
  const userdetails = await user.findById(id);

  console.log("The User details to be deleted");
  console.log(userdetails);

  res.json({
    success: 200,
    message: "Deleted the details",
  });
};
