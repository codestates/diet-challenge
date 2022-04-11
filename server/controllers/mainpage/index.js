//모델로 db와 소통하는데, 이때 소통방식은 sequelize 메소드임.
//모델이 가진 대부분의 메소드들은 promise를 리턴하는 비동기 실행함수임.
const { user, post } = require("../../models");

module.exports = (req, res) => {
  res.send("diet challenge server");
};
