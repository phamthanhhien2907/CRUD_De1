var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//Connection mongoodb
mongoose.connect("mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

//Schema
let custommerSchema = mongoose.Schema({
    phone: {
        type: Number,
    },
    password: {
        type: String,
    },
    register: {
        type: String,
    },
    fname: {
        type: String,
    },
    type: {
        type: Number,
    },
})

let CustommerTwo = mongoose.model('CustommerTwo', custommerSchema)


/* GET home page. */
router.get('/', function(req, res, next) {
    CustommerTwo.find({}, (error, data) => {
            console.log(data)
            res.render('index', { custommertwos: data })
        })
        // res.render('index', { title: 'Lê Hồng Phương' });
});
router.get('/form-add', function(req, res, next) {
    res.render('form-add', {})
})
router.post('/add', function(req, res, next) {
    CustommerTwo.create(req.body);
    res.redirect('/')
})
router.get('/form-update/:id', function(req, res, next) {
    CustommerTwo.findById(req.params.id, (error, data) => {
        res.render('form-update', { custommertwo: data })
    })
})
router.post('/update', function(req, res, next) {
    CustommerTwo.findByIdAndUpdate(req.body.id, req.body, (error, data) => {
        res.redirect('/')
    })
})
router.get('/form-delete/:id', function(req, res, next) {
    CustommerTwo.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/')
    })
})
module.exports = router;