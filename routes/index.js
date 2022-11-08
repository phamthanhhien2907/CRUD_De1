var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
let user3Schema = mongoose.Schema({
  IdDistrict: {
    type: String,
  },
  IdVillage: {
    type: String,
  },
  Address: {
    type: String,
  },
  IsGetNotification: {
    type: String,
  },
  IsVerified: {
    type: String,
  },
  IsGetOpen: {
    type: String,
  },
});
let User = mongoose.model("User", user3Schema);
/* GET home page. */
router.get("/", function (req, res, next) {
  User.find({}, (Error, data) => {
    res.render("index", { user3s: data });
  });
});
//from-add
router.get("/form-add", function (req, res, next) {
  res.render("form-add", {});
});

router.post("/add", function (req, res, next) {
  User.create(req.body);
  res.redirect("/");
});

//  form-update
router.get("/form-update/:id", function (req, res, next) {
  User.findById(req.params.id, (error, data) => {
    res.render("form-update", { lop: data });
  });
});
// req.body.id update
router.post("/update", function (req, res, next) {
  console.log("Quant", req.body);
  User.findByIdAndUpdate(req.body.id, req.body, (Error, data) => {
    res.redirect("/");
  });
});

//lệnh

router.get("/form-delete/:id", function (req, res, next) {
  User.findByIdAndDelete(req.params.id, (Error, data) => {
    res.redirect("/");
  });
});

module.exports = router;
