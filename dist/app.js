"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koa = _interopRequireDefault(require("koa"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _koaConvert = _interopRequireDefault(require("koa-convert"));

var _kcors = _interopRequireDefault(require("kcors"));

var _koaGraphql = _interopRequireDefault(require("koa-graphql"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _graphqlPlaygroundMiddleware = require("graphql-playground-middleware");

var _schema = _interopRequireDefault(require("./schema"));

var _registerLoaders = _interopRequireDefault(require("./registerLoaders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = new _koa.default();
var router = new _koaRouter.default();
router.all('/playground', (0, _graphqlPlaygroundMiddleware.koaPlayground)({
  endpoint: '/graphql'
}));

var graphqlSettingsPerReq =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req) {
    var dataloaders;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dataloaders = (0, _registerLoaders.default)();
            return _context.abrupt("return", {
              graphiql: true,
              schema: _schema.default,
              context: {
                req: req,
                dataloaders: dataloaders
              },
              formatError: function formatError(error) {
                console.log(error.message);
                console.log(error.locations);
                console.log(error.stack);
                return {
                  message: error.message,
                  locations: error.locations,
                  stack: error.stack
                };
              }
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function graphqlSettingsPerReq(_x) {
    return _ref.apply(this, arguments);
  };
}();

var graphqlServer = (0, _koaConvert.default)((0, _koaGraphql.default)(graphqlSettingsPerReq)); // graphql standard route

router.all('/graphql', graphqlServer);
app.use((0, _kcors.default)());
app.use(router.routes()).use(router.allowedMethods());
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map