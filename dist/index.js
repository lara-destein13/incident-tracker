'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = require('read-excel-file/node');

var _node2 = _interopRequireDefault(_node);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tracker = function () {
    function Tracker() {
        _classCallCheck(this, Tracker);
    }

    _createClass(Tracker, [{
        key: 'run',
        value: async function run() {
            console.log("run");
            var filepath = '/Users/laradestein/git/incident-tracker/test-data/sfs.xlsx';
            var ret = await (0, _node2.default)(filepath);
            console.log(JSON.stringify(ret, null, 4));
        }
    }]);

    return Tracker;
}();

var tracker = new Tracker();
tracker.run();