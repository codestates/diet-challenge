const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes"); //메인
const userRouter = require("./routes/users");
const friendRouter = require("./routes/friends");
const postRouter = require("./routes/posts");
const mypageRouter = require("./routes/mypage");

const app = express();

const corsOptions = {
  origin: true, //["https://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH"],
};
app.use(cors(corsOptions));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//<img src="http://localhost:4000/image/43793e4cc63cda2a3f7cf05ff7931b7f" /> 이런 식으로 서버 이미지에 접근 가능.
app.use("/image", express.static("./upload"));
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/friends", friendRouter);
app.use("/posts", postRouter);
app.use("/change", mypageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
