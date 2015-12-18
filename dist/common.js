"use strict";

var elem = $("#result");

function appendValue() {
  var type = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
  var val = arguments.length <= 1 || arguments[1] === undefined ? "<br />" : arguments[1];

  $(elem).append(type + ": " + val + "<br />");
}

function asyncOperation(val) {
  return Promise.delay(5000).then(function () {
    return val + 5;
  });
}

function promisesExample() {
  var type = "Promises";
  appendValue(type);
  asyncOperation(5).then(function (val) {
    appendValue(type, val);
    return asyncOperation(val);
  }).then(function (val) {
    appendValue(type, val);
    return asyncOperation(val);
  }).then(function (val) {
    appendValue(type, val);
    appendValue(type, "Done!");
  });
}

promisesExample();
appendValue("After Promises...");

Promise.spawn(regeneratorRuntime.mark(function generatorExample() {
  var type, val;
  return regeneratorRuntime.wrap(function generatorExample$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = "Generators";
          _context.next = 3;
          return asyncOperation(5);

        case 3:
          val = _context.sent;

          appendValue(type, val);
          _context.next = 7;
          return asyncOperation(val);

        case 7:
          val = _context.sent;

          appendValue(type, val);
          _context.next = 11;
          return asyncOperation(val);

        case 11:
          val = _context.sent;

          appendValue(type, val);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, generatorExample, this);
}));

appendValue("After Generators");

function asyncExample() {
  var type, val;
  return regeneratorRuntime.async(function asyncExample$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        type = "Async/Await";

        appendValue(type);
        _context2.next = 4;
        return regeneratorRuntime.awrap(asyncOperation(5));

      case 4:
        val = _context2.sent;

        appendValue(type, val);
        _context2.next = 8;
        return regeneratorRuntime.awrap(asyncOperation(val));

      case 8:
        val = _context2.sent;

        appendValue(type, val);
        _context2.next = 12;
        return regeneratorRuntime.awrap(asyncOperation(val));

      case 12:
        val = _context2.sent;

        appendValue(type, val);
        appendValue(type, "Done!");

      case 15:
      case "end":
        return _context2.stop();
    }
  }, null, this);
}

asyncExample();
appendValue("After Async Example");