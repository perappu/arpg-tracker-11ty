const cptotal = async (collection) => {
  let total = 0;

  for (const image of collection) {
      total += image.data.cp;
  }

  return total;
};

module.exports = cptotal;
