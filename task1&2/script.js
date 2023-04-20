const btn = document.querySelector(".btn-test");

const windowHeight = document.documentElement.clientHeight,
  windowWidth = document.documentElement.clientWidth;

btn.addEventListener("click", () => {
  // Задание 1
  btn.classList.toggle("btn--toggle");

  // Задание 2
  alert(
    `Данные о размерах вашего экрана: высота ${windowHeight} , ширина ${windowWidth}`
  );
  // еще одна вариация без обновления страницы
  alert(`Ваше разрешение ${window.innerWidth}x${window.innerHeight}`);
});
