'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: [true, 'Pirate name is required'] },
  pet: { type: String,  maxlength: [50, 'Only 50 characters or less is allowed'] },
  type: {type: String, required: [true, 'Pirate type is required']},
  pirate_hook: {type: Boolean, default:false},
  gold: {type: Number, default:0},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('pirates', schema);