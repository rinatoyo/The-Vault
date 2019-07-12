"use strict";
module.exports = function() {
  let myVault = {};
  function setValue(key, value) {
    myVault[key] = value;
  }

  function getValue(key) {
    if (!key || !myVault[key]) {
      return null;
    } else if (myVault[key]) {
      return myVault[key];
    }
  }

  return {
    setValue: setValue,
    getValue: getValue
  };
};
