'use strict';

(function () {
  window.infoFromServer = [];

  var getFromServer = function (arr) {
    window.infoFromServer = arr.slice();
    return window.infoFromServer;
  };

  window.backend.load('', getFromServer, window.showError);
})();