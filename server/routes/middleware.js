const multer = require("multer");

module.exports = {
  imageFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error("Only image files are allowed!"));
    }
    cb(null, true);
  },

  storage: multer.diskStorage({
    // 서버에 저장될 위치
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    // 서버에 저장될 때 파일 이름
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
};
