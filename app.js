const init = window.location.href;
const addToList = document.querySelector(".addToList");
const containerApp = document.querySelector(".containerApp");
const overlay = document.querySelector(".overlay");

addToList.addEventListener("click", function () {
  containerApp.style.display = "none";
  overlay.style.display = "block";
  const done = document.querySelector(".done");
  const back = document.querySelector(".lt");
  back.addEventListener("click", () => {
    containerApp.style.display = "";
    overlay.style.display = "none";
  });
  done.addEventListener("click", function () {
    const descriptionInput = document.querySelector(".desc input");
    const amount = document.querySelector("form input");
    const insertHtml = ` <div class="expense__tile">
      <p><i class="fa-solid fa-gift"></i></p>
      <div class="item__description">
        <h3>${
          descriptionInput.value ? descriptionInput.value : "No description"
        }</h3>
        <p>with Peter Bower</p>
      </div>
  
      <p class="money">$${amount.value ? amount.value : 0}.00</p>
      </div>`;
    // Calc Values
    function calc() {
      const allInputs = [document.querySelectorAll(".money")];

      const render = document.querySelector(".amount span");
      render.textContent = allInputs.reduce((acc, el) => {
        Math.abs(el.value) + acc;
        console.log(el.value);
      }, 0);
    }
    calc();

    document
      .querySelector(".expense__list")
      .insertAdjacentHTML("beforeend", insertHtml);
    containerApp.style.display = "";
    overlay.style.display = "none";
  });
});
