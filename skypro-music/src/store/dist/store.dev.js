"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _audioReducer = require("./reducers/audioReducer");

var _reduxThunk = require("redux-thunk");

var _default = (0, _toolkit.configureStore)({
  reducer: {
    track: _audioReducer.trackReducer
  } // middleware: [thunk],

});

exports["default"] = _default;