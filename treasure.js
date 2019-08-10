// получение случайных значений
var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

// Расстояние от клика до таргета
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// Сообщаем игроку, насколкьо он близок к целе 
var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Sahara Desert!";
    } else if (distance < 20) {
        return "You're HOT";
    } else if (distance < 40) {
        return "Really warm";
    } else if (distance < 80) {
        return "Getting warmer...";
    } else if (distance < 160) {
        return "Icey!";
    } else if (distance < 320) {
        return "You're COLD";
    } else {
        return "North Pole!";
    }
};

// Создаем переменные
var width = 400;
var height = 400;
var clicks = 0;

//  Случайная позиция клада
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

//  Обработчик кликов

$("#map").click(function (event) {
    clicks++;
    // Получаем расстояние от места клика до клада
    var distance = getDistance(event, target);
    // Преобразуем расстояние в подсказку
    var distanceHint = getDistanceHint(distance);
    // Записываем элекмент в новую подсказку
    $("#distance").text(distanceHint);
    // Проверка на выигрыш
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
});

$("html").click(function (event) {
    $("#mouse").offset({
        left: event.pageX,
        top: event.pageY
    });
});