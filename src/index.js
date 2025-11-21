"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
      __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function(mod) {
  return (mod && mod.__esModule) ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.proto = exports.makeWASocket = void 0;

const WAProto_1 = require("../proto");
Object.defineProperty(exports, "proto", {
  enumerable: true,
  get: function() {
    return WAProto_1.proto;
  }
});

const Socket_1 = __importDefault(require("./socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../proto"), exports);
__exportStar(require("./utils"), exports);
__exportStar(require("./core/Types"), exports);
__exportStar(require("./core/Store"), exports);
__exportStar(require("./core/Defaults"), exports);
__exportStar(require("./binary"), exports);
__exportStar(require("./wam"), exports);
__exportStar(require("./usync"), exports);

exports.default = Socket_1.default;