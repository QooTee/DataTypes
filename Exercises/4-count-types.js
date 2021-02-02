'use strict';

const countTypesInArray = arrayInput => {
  const counters = {};
  for (const value of arrayInput) {
    const type = typeof value;
    const count = counters[type] || 0;
    counters[type] = count + 1;
  }
  return counters;
};

module.exports = { countTypesInArray };
