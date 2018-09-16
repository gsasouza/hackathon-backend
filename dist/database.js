"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectDatabase;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connectDatabase() {
  return new Promise(function (resolve, reject) {
    _mongoose.default.Promise = global.Promise;

    _mongoose.default.connection.on('error', function (error) {
      return reject(error);
    }).on('close', function () {
      return console.log('Database connection closed.');
    }).once('open', function () {
      return resolve(_mongoose.default.connections[0]);
    });

    _mongoose.default.connect('mongodb://gabriel:gabriel123@ds257752.mlab.com:57752/hackathon-lagarto');
  });
}
//# sourceMappingURL=database.js.map