"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPaths = exports.load = exports.getLoader = exports.default = void 0;

var _dataloader = _interopRequireDefault(require("dataloader"));

var _graphqlMongooseLoader = require("@entria/graphql-mongoose-loader");

var _PathModel = _interopRequireDefault(require("./PathModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Path = function Path(data) {
  _classCallCheck(this, Path);

  this.id = void 0;
  this._id = void 0;
  this.name = void 0;
  this.description = void 0;
  this.marks = void 0;
  this.id = data.id;
  this._id = data._id;
  this.name = data.name;
  this.description = data.description;
  this.marks = data.marks;
};

exports.default = Path;

var getLoader = function getLoader() {
  return new _dataloader.default(function (ids) {
    return (0, _graphqlMongooseLoader.mongooseLoader)(_PathModel.default, ids);
  });
};

exports.getLoader = getLoader;

var viewerCanSee = function viewerCanSee() {
  return true;
};

var load =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context, id) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (id) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", null);

          case 3:
            _context.next = 5;
            return context.dataloaders.PathLoader.load(id);

          case 5:
            data = _context.sent;
            return _context.abrupt("return", viewerCanSee() ? new Path(data) : null);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", null);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));

  return function load(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.load = load;

var loadPaths =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(context, args) {
    var where, paths;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            where = args.search ? {
              name: {
                $regex: new RegExp("^".concat(args.search), 'ig')
              }
            } : {};
            paths = _PathModel.default.find(where, {
              _id: 1
            }).sort({
              createdAt: -1
            });
            return _context2.abrupt("return", (0, _graphqlMongooseLoader.connectionFromMongoCursor)({
              cursor: paths,
              context: context,
              args: args,
              loader: load
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function loadPaths(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loadPaths = loadPaths;
//# sourceMappingURL=PathLoader.js.map