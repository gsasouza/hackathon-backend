"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MarkModel = _interopRequireDefault(require("./mark/MarkModel"));

var _BuildModel = _interopRequireDefault(require("./build/BuildModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var marks, _i, markObj, test, mark, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, name, build;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          marks = [{
            name: ['Prédio Administrativo'],
            latitude: -10.928626,
            longitude: -37.672211,
            type: 'build'
          }, {
            name: ['Vivência', 'RefLAG'],
            latitude: -10.928837,
            longitude: -37.671223,
            type: 'build'
          }, {
            name: ['Biblioteca', 'Salas de Estudo'],
            latitude: -10.928853,
            longitude: -37.670018,
            type: 'build'
          }, {
            name: ['Estacionamento'],
            latitude: -10.928295,
            longitude: -37.669831,
            type: 'build'
          }, {
            name: ['Estacionamento'],
            latitude: -10.929413,
            longitude: -37.670235,
            type: 'build'
          }, {
            name: ['Estacionamento'],
            latitude: -10.926630,
            longitude: -37.669599,
            type: 'build'
          }, {
            name: ['Entrada'],
            latitude: -10.927080,
            longitude: -37.669931,
            type: 'build'
          }, {
            name: ['Departamento de Odontologia', 'Departamento de Farmácia'],
            latitude: -10.927706,
            longitude: -37.672551,
            type: 'build'
          }, {
            name: ['Centro de Simulações e Práticas'],
            latitude: -10.929979,
            longitude: -37.671917,
            type: 'build'
          }];
          _i = 0;

        case 2:
          if (!(_i < marks.length)) {
            _context.next = 48;
            break;
          }

          markObj = marks[_i];
          _context.prev = 4;
          _context.next = 7;
          return _MarkModel.default.find({});

        case 7:
          test = _context.sent;
          console.log(JSON.stringify(test));
          _context.next = 11;
          return new _MarkModel.default({
            latitude: markObj.latitude,
            longitude: markObj.longitude,
            type: markObj.type
          }).save();

        case 11:
          mark = _context.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 15;
          _iterator = markObj.name[Symbol.iterator]();

        case 17:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 26;
            break;
          }

          name = _step.value;
          _context.next = 21;
          return new _BuildModel.default({
            name: name,
            mark: mark._id
          }).save();

        case 21:
          build = _context.sent;
          console.log("Added ".concat(JSON.stringify(mark), " ").concat(JSON.stringify(build)));

        case 23:
          _iteratorNormalCompletion = true;
          _context.next = 17;
          break;

        case 26:
          _context.next = 32;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](15);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 32:
          _context.prev = 32;
          _context.prev = 33;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 35:
          _context.prev = 35;

          if (!_didIteratorError) {
            _context.next = 38;
            break;
          }

          throw _iteratorError;

        case 38:
          return _context.finish(35);

        case 39:
          return _context.finish(32);

        case 40:
          _context.next = 45;
          break;

        case 42:
          _context.prev = 42;
          _context.t1 = _context["catch"](4);
          console.log(_context.t1);

        case 45:
          _i++;
          _context.next = 2;
          break;

        case 48:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[4, 42], [15, 28, 32, 40], [33,, 35, 39]]);
}));

exports.default = _default;
//# sourceMappingURL=addPoints.js.map