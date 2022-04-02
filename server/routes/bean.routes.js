const express = require('express');
const app = express();
const beanRoute = express.Router();
let BeanModel = require('../model/bean.model');


beanRoute.route('/').get((req, res) => {
    BeanModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

beanRoute.route('/get-bean/:id').get((req, res) => {
    BeanModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

beanRoute.route('/create-bean').post((req, res, next) => {
    BeanModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});


beanRoute.route('/update-bean/:id').put((req, res, next) => {
    BeanModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data);
        }
    });
});

beanRoute.route('/delete-bean/:id').delete((req, res, next) => {
    BeanModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            });
        }
    });
});

module.exports = beanRoute;