module.exports = function (source) {
  const data = JSON.parse(source);

  const res = Object
    .keys(data)
    .filter(key => !parseInt(key))
    .reduce((p, c) => {
      p[c] = data[c]
      return p;
    }, {});

  return JSON.stringify(res);
};