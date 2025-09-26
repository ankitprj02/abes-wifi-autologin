const _0x4d132b = _0xdd10;
function _0xdd10(_0x2849fa, _0x3cdf2f) {
  const _0x466ebe = _0x466e();
  return (
    (_0xdd10 = function (_0xdd101a, _0x57d438) {
      _0xdd101a = _0xdd101a - 0xb1;
      let _0x56366e = _0x466ebe[_0xdd101a];
      return _0x56366e;
    }),
    _0xdd10(_0x2849fa, _0x3cdf2f)
  );
}
function _0x466e() {
  const _0x1ec0c8 = [
    "132110QxlffC",
    "91ShkURh",
    "runtime",
    "9CmBqhK",
    "1246250FXavtT",
    "value",
    "#password",
    "local",
    "storage",
    "username",
    "get",
    "1Yidlnb",
    "2721400DztxFl",
    "onload",
    "2989370SjcLBk",
    "3492687rMUjwA",
    "1132JgJgzP",
    "318678ZcwWiJ",
    "querySelector",
    "5928BMYtaf",
  ];
  _0x466e = function () {
    return _0x1ec0c8;
  };
  return _0x466e();
}
(function (_0x5425e1, _0x1cd930) {
  const _0x45ff44 = _0xdd10,
    _0x448cc9 = _0x5425e1();
  while (!![]) {
    try {
      const _0x52ba3f =
        (-parseInt(_0x45ff44(0xb4)) / 0x1) * (parseInt(_0x45ff44(0xbd)) / 0x2) +
        (parseInt(_0x45ff44(0xbc)) / 0x3) * (parseInt(_0x45ff44(0xb9)) / 0x4) +
        parseInt(_0x45ff44(0xc1)) / 0x5 +
        (-parseInt(_0x45ff44(0xba)) / 0x6) * (parseInt(_0x45ff44(0xbe)) / 0x7) +
        parseInt(_0x45ff44(0xb5)) / 0x8 +
        (-parseInt(_0x45ff44(0xc0)) / 0x9) * (parseInt(_0x45ff44(0xb7)) / 0xa) +
        parseInt(_0x45ff44(0xb8)) / 0xb;
      if (_0x52ba3f === _0x1cd930) break;
      else _0x448cc9["push"](_0x448cc9["shift"]());
    } catch (_0xbe8829) {
      _0x448cc9["push"](_0x448cc9["shift"]());
    }
  }
})(_0x466e, 0x64441),
  chrome[_0x4d132b(0xb1)][_0x4d132b(0xc4)][_0x4d132b(0xb3)](
    [_0x4d132b(0xb2), "password"],
    function (_0x924e3b) {
      const _0x371bbb = _0x4d132b,
        { username: _0x20cc30, password: _0x1bda18 } = _0x924e3b;
      _0x20cc30 &&
        _0x1bda18 &&
        (window[_0x371bbb(0xb6)] = function () {
          const _0x3f68dd = _0x371bbb,
            _0x5a6c09 = document[_0x3f68dd(0xbb)]("#username"),
            _0x139a2e = document[_0x3f68dd(0xbb)](_0x3f68dd(0xc3));
          _0x5a6c09 &&
            _0x139a2e &&
            ((_0x5a6c09[_0x3f68dd(0xc2)] = _0x20cc30),
            (_0x139a2e[_0x3f68dd(0xc2)] = _0x1bda18),
            chrome[_0x3f68dd(0xbf)]["sendMessage"]({ action: "executeLogin" }));
        });
    }
  );
