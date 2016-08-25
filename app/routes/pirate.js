'use strict';

// dependencies
const express = require('express');
const Pirate = require('../models/pirate');

// instance of express router
const router = express.Router();

// routes ending with /pirates
router.route('/pirates')
  .get((req, res) => {
    Pirate.find({}).sort({ createdAt: -1 })
      .exec((err, task) => {
        if (err){
          return res.send(err);
        }
        return res.json(task);
      });
  })
  .post((req, res) => {

    const pirate = new Pirate({
      name: req.body.name,
      type: req.body.type,
      pirate_hook: req.body.pirate_hook,
      gold: req.body.gold,
      pet:req.body.pet,
    });

    pirate.save((err) => {
      if (err){
        return res.send(err);
      }
      console.log(req);
      console.log(res);
      return res.json({data:pirate, message: 'New Pirate created!' });
    });

  });

// routes starting with /todos/:id
router.route('/pirates/:id')
  .get((req, res) => {
    Pirate.findById(req.params.id, (err, task) => {
      if (err){
        return res.send(err);
      }
      return res.json(task);
    });
  })
  .put((req, res) => {
    Pirate.findByIdAndUpdate(req.params.id, req.body, {new: true},  (err,resa) => {
      if (err){
        return res.send(err);
      }
      return res.json({'data':resa,'message': "its ok"});
    });
  })
  .delete((req, res) => {
    Pirate.remove({ _id: req.params.id }, (err) => {
      if (err){
        return res.send(err);
      }
      return res.json({ message: 'Pirate has been removed!' });
    });
  });
module.exports = router;
