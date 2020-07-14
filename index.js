const randomHex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

module.exports = str => {
  str = randomHex;
  return str;
}
