'use strict';

(function () {
  const MAX_HOUR = 23;
  const MAX_MIN = 59;
  const NUMBER_WITH_ZERO = 9;
  const MINIMAL_NUMBER = 0;
  var date = new Date();
  var hour = date.getHours();
  var cities = ['Астрахань','Абакан','Анапа','Азов','Ангарск', 'Барнаул','Белгород','Батайск','Брянск','Бор', 'Воронеж','Вологда','Волгоград','Владивосток','Владимир',
  'Гатчина','Георгиевск','Грозный','Губкин','Гуково', 'Дзержинск','Дмитров','Долгопрудный','Домодедово','Дубна', 'Евпатория','Ейск','Екатеринбург','Елец','Ессентуки', 'Железногорск','Жигулевск','Жуковский', 'Заречный','Зеленогорск','Зеленодольск','Златоуст', 'Иваново','Ижевск','Иркутск','Ишим','Ишимбай', 'Йошкар-Ола', 'Казань','Калининград','Калуга','Когалым','Кострома', 'Лениногорск','Лесосибирск','Липецк','Лиски','Люберцы', 'Магадан','Магнитогорск','Махачкала','Москва','Мурманск', 'Нефтеюганск','Нижневартовск','Новосибирск','Норильск','Ноябрьск', 'Октябрьский','Омск','Орел','Оренбург','Орск', 'Пенза','Пермь','Петрозаводск','Прокопьевск','Псков', 'Ревда','Ржев','Рубцовск','Рыбинск','Рязань', 'Самара','Севастополь','Смоленск','Сочи','Ставрополь', 'Тобольск','Тверь','Томск','Тула','Тюмень', 'Узловая','Ульяновск','Уссурийск','Уфа', 'Феодосия','Фрязино', 'Хабаровск','Ханты-Мансийск','Хасавюрт','Химки', 'Чебоксары','Челябинск','Череповец','Черкесск','Черногорск', 'Шадринск','Шали','Шахты','Шуя', 'Щекино', 'Щелково', 'Электросталь','Элиста','Энгельс', 'Южно-Сахалинск','Юрга', 'Якутск','Ялта','Ярославль'];
  var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var createTime = function (min, max) {
    var newTime = window.createRandom(min, max);
    if (newTime <= NUMBER_WITH_ZERO) {
      newTime = '0' + newTime;
    }
    return newTime;
  }

  // plan time  
  var createPlan = function () {
    var planTime = createTime(hour, MAX_HOUR) + ':' + createTime(MINIMAL_NUMBER, MAX_MIN);
    return planTime;
  };

  // fact time
  var createFact = function () {
    var factTime = window.createRandom(0, 1);
    
    if (factTime === 0)  {
      factTime = null; 
    } else {
      var planTime = createPlan().split('');
      var planHour = parseInt(planTime[0] + '' + planTime[1], 10);      
      var planMinute = parseInt(planTime[3] + '' + planTime[4], 10);
      factTime = createTime(planHour, MAX_HOUR) + ':' + createTime(planMinute, MAX_MIN);
    }
    return factTime;
  };

  // city
  var createCity = function () {
    var city = cities[window.createRandom(0, cities.length - 1)];
    return city;
  }

  // number
  var createFlight = function () {
    var flightLetters = letters[window.createRandom(0, letters.length - 1)] + letters[window.createRandom(0, letters.length - 1)];
    var flightNumbers = window.createRandom(10, 9999);
    var flight = flightLetters + ' ' + flightNumbers;
    return flight;
  };

  // функция для создания объекта-строчки
  window.createInfo = function () { 
    var fullInfo = {
      plan: createPlan(),
      fact: createFact(),
      city: createCity(),
      flight: createFlight()
    }

    return fullInfo;
  };

})();
