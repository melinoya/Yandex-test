'use strict';

(function () {
  window.util = {
    createRandom: function (min, max) {
      var randomNumber = Math.round(Math.random() * (max - min) + min);
      return randomNumber;
    }

  };
})();