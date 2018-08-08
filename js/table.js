'use strict';

(function () {  
  const ROWS_QUANTITY = 10;
  var tableBody = document.querySelector('tbody');
  var template = document.querySelector('#row');
  var row = template.content.querySelector('tr'); 
  var delay = document.querySelector('#delay');
  var search = document.querySelector('#number');
  var rowsData = [];
  var newData = [];
  
  // очистка таблицы
  var clearTable = function () {
    tableBody.querySelectorAll('tr').forEach(function (it) {
      it.remove();
    });
  }

  // функция для сортировки массива по возрастанию
  var compareNum = function (a, b) {
    if (a.plan > b.plan) return 1;
    if (a.plan < b.plan) return -1;
  };

  // создание одной строки для таблицы
  var createRow = function () {
    for (var i = 0; i < ROWS_QUANTITY; i++) {
      var newInfo = window.createInfo();
      rowsData.push(newInfo);
    }
  };

  // функция для создания всех строчек в таблице
  var makeRows = function (el) {
    var rowClone = row.cloneNode(true);
    rowClone.querySelector('.row__plan').textContent = el.plan;
    rowClone.querySelector('.row__fact').textContent = el.fact;
    rowClone.querySelector('.row__city').textContent = el.city;
    rowClone.querySelector('.row__number').textContent = el.flight;
    tableBody.appendChild(rowClone);
  } 

  // создание данных для строчек в таблице
  createRow();

  // сортировка массива по возрастанию
  rowsData.sort(compareNum);

  // создание строчек в таблице
  rowsData.forEach(makeRows);

  // сортировка по задержке рейсов
  var sortDelay = function () {   

    if (delay.checked) {
      clearTable();
      rowsData.forEach(function (it) {
        if (it.fact !== null) {
          newData.push(it);
          console.log(newData);
        }        
      });
      newData.forEach(makeRows);
    } else {
      clearTable();
      newData = [];
      rowsData.forEach(makeRows);
    }
  };

  // поиск по номеру рейса
  var searchNumber = function (arr) {     
    var filter = search.value.toUpperCase();
    var found;
    arr.forEach(function (it) {
      if (it.flight.indexOf(filter) > -1) {
        found = true;
      }
      if (found) {
        makeRows(it);
        found = false;
      } 
    })
  };

  // отвлеживание клика по задержке
  delay.addEventListener('click', sortDelay);

  // отслеживание ввода в поле поиска
  search.addEventListener('keyup', function () {   
    clearTable();
    if (!delay.checked) {
      searchNumber(rowsData);
    } else {
      searchNumber(newData);
    }
  });
})();