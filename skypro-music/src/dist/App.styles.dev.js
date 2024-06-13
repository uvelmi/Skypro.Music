"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = exports.Container = exports.Wrapper = void 0;

var _styledComponents = require("styled-components");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    max-width: 1920px;\n    height: 100vh;\n    margin: 0 auto;\n    position: relative;\n    background-color: #181818;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    min-height: 100%;\n    overflow: hidden;\n    background-color: #383838;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.styled.div(_templateObject());

exports.Wrapper = Wrapper;

var Container = _styledComponents.styled.div(_templateObject2());

exports.Container = Container;

var Main = _styledComponents.styled.main(_templateObject3());

exports.Main = Main;