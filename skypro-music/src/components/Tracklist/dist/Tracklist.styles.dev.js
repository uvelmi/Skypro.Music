"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackTitleEx = exports.ActiveTrack = exports.TrackTimeSvg = exports.ErrorTrack = exports.TrackTimeText = exports.TrackAlbumLink = exports.TrackAlbum = exports.TrackAuthorLink = exports.TrackAuthor = exports.TrackTitleSpan = exports.TrackTitleLink = exports.TrackTitleSvg = exports.TrackTitleImage = exports.TrackTitle = exports.PlaylistTrack = exports.PlaylistItem = exports.ContentPlaylist = exports.ContentPlaylistSlider = void 0;

var _styledComponents = require("styled-components");

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    width: 16px;\n    height: 16px;\n    background-color: #b672ff;\n    border-radius: 8px;\n    display: block;\n    animation: ", " 0.6s ease-in-out infinite both;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    0%,\n    to {\n      transform: scale(0.5);\n    }\n    50% {\n      transform: scale(1);\n    }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    width: 14px;\n    height: 12px;\n    margin-right: 17px;\n    fill: transparent;\n    stroke: #696969;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    font-size: 16px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: right;\n    color: #696969;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    color: #696969;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    width: 245px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    color: #ffffff;\n    text-align: left;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    width: 321px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    color: #4e4e4e;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    color: #ffffff;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 18px;\n    height: 17px;\n    fill: transparent;\n    stroke: #4e4e4e;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 51px;\n    height: 51px;\n    padding: 16px;\n    background: #313131;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin-right: 17px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    width: 447px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: block;\n    margin-bottom: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    overflow-y: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    overflow-y: auto;\n    height: calc(100vh - 60px);\n    scrollbar-width: thin;\n    scrollbar-color: #4e4e4e #313131;\n    position: fixed;\n    padding-right: 23px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContentPlaylistSlider = _styledComponents.styled.div(_templateObject());

exports.ContentPlaylistSlider = ContentPlaylistSlider;

var ContentPlaylist = _styledComponents.styled.div(_templateObject2());

exports.ContentPlaylist = ContentPlaylist;

var PlaylistItem = _styledComponents.styled.div(_templateObject3());

exports.PlaylistItem = PlaylistItem;

var PlaylistTrack = _styledComponents.styled.div(_templateObject4());

exports.PlaylistTrack = PlaylistTrack;

var TrackTitle = _styledComponents.styled.div(_templateObject5());

exports.TrackTitle = TrackTitle;

var TrackTitleImage = _styledComponents.styled.div(_templateObject6());

exports.TrackTitleImage = TrackTitleImage;

var TrackTitleSvg = _styledComponents.styled.svg(_templateObject7());

exports.TrackTitleSvg = TrackTitleSvg;

var TrackTitleLink = _styledComponents.styled.a(_templateObject8());

exports.TrackTitleLink = TrackTitleLink;

var TrackTitleSpan = _styledComponents.styled.span(_templateObject9());

exports.TrackTitleSpan = TrackTitleSpan;

var TrackAuthor = _styledComponents.styled.div(_templateObject10());

exports.TrackAuthor = TrackAuthor;

var TrackAuthorLink = _styledComponents.styled.a(_templateObject11());

exports.TrackAuthorLink = TrackAuthorLink;

var TrackAlbum = _styledComponents.styled.div(_templateObject12());

exports.TrackAlbum = TrackAlbum;

var TrackAlbumLink = _styledComponents.styled.a(_templateObject13());

exports.TrackAlbumLink = TrackAlbumLink;

var TrackTimeText = _styledComponents.styled.span(_templateObject14());

exports.TrackTimeText = TrackTimeText;

var ErrorTrack = _styledComponents.styled.div(_templateObject15());

exports.ErrorTrack = ErrorTrack;

var TrackTimeSvg = _styledComponents.styled.svg(_templateObject16());

exports.TrackTimeSvg = TrackTimeSvg;
var bubble_out = (0, _styledComponents.keyframes)(_templateObject17());

var ActiveTrack = _styledComponents.styled.div(_templateObject18(), bubble_out);

exports.ActiveTrack = ActiveTrack;

var TrackTitleEx = _styledComponents.styled.div(_templateObject19());

exports.TrackTitleEx = TrackTitleEx;