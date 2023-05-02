(function () {
  'use strict';

  function _mergeNamespaces(n, m) {
    m.forEach(function (e) {
      e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
        if (k !== 'default' && !(k in n)) {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    });
    return Object.freeze(n);
  }

  var libA = {};

  Object.defineProperty(libA, "__esModule", {
    value: true
  });
  var foo_1 = libA.foo = libA.default = void 0;
  var _default$1 = 'this is default';
  libA.default = _default$1;
  var foo = 'named export (foo)';
  foo_1 = libA.foo = foo;

  var _default = libA.default;

  var namespace = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    default: _default,
    get foo () { return foo_1; }
  }, [libA]);

  console.log({ _default, namespace, foo: foo_1 });

})();
