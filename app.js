const init = window.location.href;
const addToList = document.querySelector(".addToList");
const containerApp = document.querySelector(".containerApp");
const overlay = document.querySelector(".overlay");
addToList.addEventListener("click", (e) => {
  let now;

  containerApp.style.visibility = "hidden";

  const descriptionInput = document.querySelector(".desc input").value;
  const nums = document.querySelectorAll(".num");
  const lt = document.querySelector(".lt");
  lt.addEventListener("click", function (e) {
    window.location.href = init;
  });
  const amount = document.querySelector("form input");
  const done = document.querySelector(".done");

  done.addEventListener("click", function () {
    const insertHtml = ` <div class="expense__tile">
    <p><i class="fa-solid fa-gift"></i></p>
    <div class="item__description">
      <h3>${descriptionInput ? descriptionInput : "Daniel"}</h3>
      <p>with Peter Bower</p>
    </div>

    <p>$${amount.value ? amount.value : 0}</p>
    </div>`;

    document
      .querySelector(".expense__list")
      .insertAdjacentHTML("beforeend", insertHtml);

    document.querySelector(".overlay").style.visibility = "hidden";
    containerApp.style.visibility = "visible";
  });
});
