"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MarkLoader = _interopRequireWildcard(require("./mark/MarkLoader"));

var PathLoader = _interopRequireWildcard(require("./path/PathLoader"));

var EventLoader = _interopRequireWildcard(require("./event/EventLoader"));

var BuildLoader = _interopRequireWildcard(require("./build/BuidLoader"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = function _default() {
  return {
    MarkLoader: MarkLoader.getLoader(),
    PathLoader: PathLoader.getLoader(),
    EventLoader: EventLoader.getLoader(),
    BuildLoader: BuildLoader.getLoader()
  };
};

exports.default = _default;
//# sourceMappingURL=registerLoaders.js.map