let hearts = document.querySelectorAll('.user-comment__heart');
let likesNumbersAll = document.querySelectorAll(".user-comment__likes-number");

//Проверяем есть ли лайки, если их нет не отображаем текст <div class="user-comment__likes">Нравится: <span class="user-comment__likes-number">0</span></div>
likesNumbersAll.forEach(function (item, index) {
  let likesText = item.closest(".user-comment__likes");
  if (item.textContent == 0) {
    likesText.style.visibility = "hidden";
  }
});

//При клике на сердечко добавляем количество лайков на 1, при повторном клике удменьшаем на 1
hearts.forEach(function (item, index) {
  item.onclick = function (e) {
    e.preventDefault();
    const likesWrapper = e.target.closest(".user-comment__wrapper");
    let likesText = likesWrapper.querySelector(".user-comment__likes");
    likesText.style.visibility = "visible";

    let likesNumberContent = likesWrapper.querySelector(".user-comment__likes-number");
    let likesNumberCount = +likesNumberContent.textContent;
    if (item.classList.contains("user-comment__heart--active")) {
      likesNumberCount -= 1;
      item.setAttribute('aria-pressed', false);

      //Проверяем есть ли лайки, если их нет не отображаем текст <div class="user-comment__likes">Нравится: <span class="user-comment__likes-number">0</span></div>
      if (likesNumberCount == 0) {
        likesText.style.visibility = "hidden";
      }
    } else {
      likesNumberCount += 1;
      item.setAttribute('aria-pressed', true);
    }

    likesNumberContent.textContent = likesNumberCount;

    //Меняем класс для сердечка при клике
    item.classList.toggle("user-comment__heart--active");
  };
});
