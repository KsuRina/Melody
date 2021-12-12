$(document).ready(function () {
  var currentFloor = 2; /* переменная где храниться текущий этаж */
  var floorPath = $(".home-image path"); /* каждый отдельй этаж в SVG */
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
  floorPath.on("mouseover", function () { /* функция при наведении мыши на этаж */
    floorPath.removeClass("current-floor");/* удаляем активный класс этажей */
    currentFloor = $(this).attr("data-floor"); /* получаем значение текушего этажа */
    $(".counter").text(currentFloor); /* записываем значение этажа в счетчик справа */
  });

  counterUp.on("click", function () { /* отслеживаем клик по кнопке вверх */
    if (currentFloor < 18) { /* проверяем значение этажа, оно  не должно быть больше 18 */
       currentFloor++; /* прибавляем 1 этаж */
       usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,useGroupping: false }); /* форматируем переменную с этажом, что бы было 01 а не 1 */
       $(".counter").text(usCurrentFloor); /* записываем значение этажа в счетчик с права */
       floorPath.removeClass("current-floor"); /* удаляем активный класс этажей */
       $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); /* подсвечиваем текущий этаж*/
    }
  });

    counterDown.on("click", function () {
    if (currentFloor > 2) {
       currentFloor--;
       usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,useGroupping: false });
       $(".counter").text(usCurrentFloor);
       floorPath.removeClass("current-floor");
       $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); 
    }
  });
});
