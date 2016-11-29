const builder = (obj) => {
  return Object
    .keys(obj)
    .filter(key => !parseInt(key))
    .reduce((p, c) => {
      p[c] = typeof obj[c] === 'object' ? builder(obj[c]) : obj[c];
      return p;
    }, {});
}

module.exports = function (source) {
  const data = JSON.parse(source);

  const res = builder(data);

  return JSON.stringify(res);
};