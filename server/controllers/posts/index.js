const fs = require("fs");
const postModel = require("../../models/post");

module.exports = {
  post: (req, res) => {
    res.send("posts/");
  },

  delete: (req, res) => {
    res.send("posts/delete");
  },

  create: async (req, res) => {
    const image = req.file.path;
    console.log("1 :", req.file);
    console.log("2 :", image);

    if (image) res.sendStatus(200);
    else res.sendStatus(400);
    // try {
    //   // blob형태를 base64로 변환
    //   const imgData = fs
    //     .readFileSync(`req.file.path`)
    //     .toString("base64");
    //   // db에 path 저장
    //   await Image.create({ path: imgData });
    //   res.json({ path: imgData });
    // } catch (err) {
    //   res.status(400).json({ success: false, message: err.message });
    // }
  },
};
