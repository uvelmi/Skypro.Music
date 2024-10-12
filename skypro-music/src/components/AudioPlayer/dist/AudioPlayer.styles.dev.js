"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VolumeProgressLine = exports.VolumeProgress = exports.VolumeSvg = exports.VolumeImage = exports.VolumeContent = exports.BarVolumeBlock = exports.TrackdPlayDislikeSvg = exports.TrackdPlayDislike = exports.TrackdPlayLikeSvg = exports.TrackdPlay = exports.TrackPlayLikeDis = exports.TrackPlayAlbumLink = exports.TrackPlayAlbum = exports.TrackPlayAuthorLink = exports.TrackPlayAuthor = exports.TrackPlaySvg = exports.TrackPlayImage = exports.PlayerTrackContain = exports.PlayerTrackPlay = exports.PlayerBtnShuffleSvg = exports.PlayerBtnShuffle = exports.PlayerBtnRepeatSvg = exports.PlayerBtnRepeat = exports.PlayerBtnNextSvg = exports.PlayerBtnNext = exports.TrackdPlayPauseSvg = exports.TrackdPlayPause = exports.PlayerBtnPlaySvg = exports.PlayerBtnPlay = exports.PlayerBtnPrevSvg = exports.PlayerBtnPrev = exports.PlayerBtn = exports.PlayerControls = exports.BarPlayer = exports.BarPlayerBlock = exports.BarPlayerProgress = exports.BarContent = exports.Bar = void 0;

var _styledComponents = require("styled-components");

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n    width: 109px;\n\t\tcursor: pointer;\n\t\t&:active {\n\t\t\tstroke: #B672FF;\n\t}\t\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n    width: 109px;\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n    width: 13px;\n    height: 18px;\n    fill: transparent;\n\t\tcursor: pointer;\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n    width: 13px;\n    height: 18px;\n    margin-right: 17px;\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: end;\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n    width: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    padding: 0 92px 0 0;\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n    width: 14.34px;\n    height: 13px;\n    fill: transparent;\n    stroke: #696969;\n\t\tcursor: pointer;\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 28.5px;\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n    width: 14px;\n    height: 12px;\n    fill: transparent;\n    stroke: #696969;\n\t\tcursor: pointer;\n\t\t&:active {\n\t\t\tstroke: #B672FF;\n\t}\t\n\t&:hover {\n\t\t\tstroke: #ACACAC;\n\t}\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n    padding: 5px;\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    margin-left: 26%;\n\t\tcursor: pointer;\n\t\t&:active {\n\t\t\tstroke: #FFFFFF;\n\t}\t\n\t&:hover {\n\t\t\tstroke: #ACACAC;\n\t}\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 24px;\n    color: #ffffff;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n    -ms-grid-row: 2;\n    -ms-grid-column: 2;\n    grid-area: album;\n    min-width: 49px;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    color: #ffffff;\n    white-space: nowrap;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n    -ms-grid-row: 1;\n    -ms-grid-column: 2;\n    grid-area: author;\n    min-width: 49px;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    width: 18px;\n    height: 17px;\n    fill: transparent;\n    stroke: #4e4e4e;\n\t\tcursor: pointer;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    width: 51px;\n    height: 51px;\n    background-color: #313131;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin-right: 12px;\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 2;\n    -ms-grid-column: 1;\n    grid-area: image;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    width: auto;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: auto 1fr;\n    grid-template-columns: auto 1fr;\n    grid-template-areas: 'image author' 'image album';\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    width: 19px;\n    height: 12px;\n    fill: transparent;\n    stroke: #696969;\n\t\tcursor: pointer;\n\t\tstroke: ", ";\n\t&:active {\n\t\t\tstroke: #FFFFFF;\n\t\t\tfill: #FFFFFF;\t\t\t\n\t}\n\t&:hover {\n\t\t\tstroke: #ACACAC;\n\t}\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    width: 18px;\n    height: 12px;\n    fill: transparent;\n    stroke: #696969;\n\t\tcursor: pointer;\n\t\tstroke: ", ";\n\t&:active {\n\t\t\tstroke: #FFFFFF;\n\t\t\tfill: #FFFFFF;\t\t\t\n\t}\n\t&:hover {\n\t\t\tstroke: #ACACAC;\n\t}\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 24px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    width: 15px;\n    height: 14px;\n    fill: inherit;\n    stroke: #d9d9d9;\n\t\tcursor: pointer;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 28px;\n    fill: #a53939;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\nwidth: 22px;\nheight: 20px;\nfill: #d9d9d9;\ncursor: pointer;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\nmargin-right: 23px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width: 22px;\n    height: 20px;\n    fill: #d9d9d9;\n\t\tcursor: pointer;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 23px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width: 15px;\n    height: 14px;\n\t\tcursor: pointer;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 23px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    padding: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    padding: 0 27px 0 31px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    height: 73px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 5px;\n    background: #2e2e2e;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: rgba(28, 28, 28, 0.5);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Bar = _styledComponents.styled.div(_templateObject());

exports.Bar = Bar;

var BarContent = _styledComponents.styled.div(_templateObject2());

exports.BarContent = BarContent;

var BarPlayerProgress = _styledComponents.styled.div(_templateObject3());

exports.BarPlayerProgress = BarPlayerProgress;

var BarPlayerBlock = _styledComponents.styled.div(_templateObject4());

exports.BarPlayerBlock = BarPlayerBlock;

var BarPlayer = _styledComponents.styled.div(_templateObject5());

exports.BarPlayer = BarPlayer;

var PlayerControls = _styledComponents.styled.div(_templateObject6());

exports.PlayerControls = PlayerControls;

var PlayerBtn = _styledComponents.styled.div(_templateObject7());

exports.PlayerBtn = PlayerBtn;
var PlayerBtnPrev = (0, _styledComponents.styled)(PlayerBtn)(_templateObject8());
exports.PlayerBtnPrev = PlayerBtnPrev;

var PlayerBtnPrevSvg = _styledComponents.styled.svg(_templateObject9());

exports.PlayerBtnPrevSvg = PlayerBtnPrevSvg;
var PlayerBtnPlay = (0, _styledComponents.styled)(PlayerBtn)(_templateObject10());
exports.PlayerBtnPlay = PlayerBtnPlay;

var PlayerBtnPlaySvg = _styledComponents.styled.svg(_templateObject11());

exports.PlayerBtnPlaySvg = PlayerBtnPlaySvg;
var TrackdPlayPause = (0, _styledComponents.styled)(PlayerBtn)(_templateObject12());
exports.TrackdPlayPause = TrackdPlayPause;

var TrackdPlayPauseSvg = _styledComponents.styled.svg(_templateObject13());

exports.TrackdPlayPauseSvg = TrackdPlayPauseSvg;
var PlayerBtnNext = (0, _styledComponents.styled)(PlayerBtn)(_templateObject14());
exports.PlayerBtnNext = PlayerBtnNext;

var PlayerBtnNextSvg = _styledComponents.styled.svg(_templateObject15());

exports.PlayerBtnNextSvg = PlayerBtnNextSvg;
var PlayerBtnRepeat = (0, _styledComponents.styled)(PlayerBtn)(_templateObject16());
exports.PlayerBtnRepeat = PlayerBtnRepeat;

var PlayerBtnRepeatSvg = _styledComponents.styled.svg(_templateObject17(), function (_ref) {
  var $active = _ref.$active;
  return $active ? '#FFFFFF' : '#696969';
});

exports.PlayerBtnRepeatSvg = PlayerBtnRepeatSvg;
var PlayerBtnShuffle = (0, _styledComponents.styled)(PlayerBtn)(_templateObject18());
exports.PlayerBtnShuffle = PlayerBtnShuffle;

var PlayerBtnShuffleSvg = _styledComponents.styled.svg(_templateObject19(), function (_ref2) {
  var $active = _ref2.$active;
  return $active ? '#FFFFFF' : '#696969';
});

exports.PlayerBtnShuffleSvg = PlayerBtnShuffleSvg;

var PlayerTrackPlay = _styledComponents.styled.div(_templateObject20());

exports.PlayerTrackPlay = PlayerTrackPlay;

var PlayerTrackContain = _styledComponents.styled.div(_templateObject21());

exports.PlayerTrackContain = PlayerTrackContain;

var TrackPlayImage = _styledComponents.styled.div(_templateObject22());

exports.TrackPlayImage = TrackPlayImage;

var TrackPlaySvg = _styledComponents.styled.svg(_templateObject23());

exports.TrackPlaySvg = TrackPlaySvg;

var TrackPlayAuthor = _styledComponents.styled.div(_templateObject24());

exports.TrackPlayAuthor = TrackPlayAuthor;

var TrackPlayAuthorLink = _styledComponents.styled.a(_templateObject25());

exports.TrackPlayAuthorLink = TrackPlayAuthorLink;

var TrackPlayAlbum = _styledComponents.styled.div(_templateObject26());

exports.TrackPlayAlbum = TrackPlayAlbum;

var TrackPlayAlbumLink = _styledComponents.styled.a(_templateObject27());

exports.TrackPlayAlbumLink = TrackPlayAlbumLink;

var TrackPlayLikeDis = _styledComponents.styled.div(_templateObject28());

exports.TrackPlayLikeDis = TrackPlayLikeDis;

var TrackdPlay = _styledComponents.styled.div(_templateObject29());

exports.TrackdPlay = TrackdPlay;

var TrackdPlayLikeSvg = _styledComponents.styled.svg(_templateObject30());

exports.TrackdPlayLikeSvg = TrackdPlayLikeSvg;
var TrackdPlayDislike = (0, _styledComponents.styled)(TrackdPlay)(_templateObject31());
exports.TrackdPlayDislike = TrackdPlayDislike;

var TrackdPlayDislikeSvg = _styledComponents.styled.svg(_templateObject32());

exports.TrackdPlayDislikeSvg = TrackdPlayDislikeSvg;

var BarVolumeBlock = _styledComponents.styled.div(_templateObject33());

exports.BarVolumeBlock = BarVolumeBlock;

var VolumeContent = _styledComponents.styled.div(_templateObject34());

exports.VolumeContent = VolumeContent;

var VolumeImage = _styledComponents.styled.div(_templateObject35());

exports.VolumeImage = VolumeImage;

var VolumeSvg = _styledComponents.styled.svg(_templateObject36());

exports.VolumeSvg = VolumeSvg;

var VolumeProgress = _styledComponents.styled.div(_templateObject37());

exports.VolumeProgress = VolumeProgress;

var VolumeProgressLine = _styledComponents.styled.input(_templateObject38());

exports.VolumeProgressLine = VolumeProgressLine;