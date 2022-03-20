"use strict";

const expenses = document.querySelector(".expense__list");
const updateList = document.querySelector(".send");
const navToPage = document.querySelector(".lt");
const overlay = document.querySelector(".overlay");
const containerApp = document.querySelector(".containerApp");
const addToBtn = document.querySelector(".addToList");
let numInput = document.querySelector(".inputNo");

function renderNumbers() {
  const Pad = function ({ el, keys }) {
    {
      keys.forEach((key) => {
        if (!Number(key.textContent)) return;
        else {
          key.addEventListener("click", function () {
            el.querySelector(".inputNo").value += Number(key.textContent);
          });
        }
      });
    }

    {
      document.querySelector(".del").addEventListener("click", function () {
        el.querySelector(".inputNo").value = el
          .querySelector(".inputNo")
          .value.substring(0, el.querySelector(".inputNo").value.length - 1);
      });
    }
  };
  Pad({
    el: document.querySelector(".overlay"),
    keys: document.querySelectorAll(".login-text__key"),
  });
}

renderNumbers();

function changeLayer() {
  addToBtn.addEventListener("click", function () {
    containerApp.style.display = "none";
    overlay.style.display = "block";
    document.querySelector(".desc input").focus();
  });
  navToPage.addEventListener("click", function () {
    containerApp.style.display = "block";
    overlay.style.display = "none";
  });
  updateList.addEventListener("click", function () {
    containerApp.style.display = "block";
    overlay.style.display = "none";
  });
}
changeLayer();

function processData() {
  updateList.addEventListener("click", function () {
    let itemDesc = document.querySelector(".desc input").value;
    const insertHtml = `
  <div class="expense__tile">
  <p><i class="fa-solid fa-gift"></i></p>
  <div class="item__description">
  <h3>${itemDesc ? itemDesc : "No Description"}</h3>
  <p>with Peter Bower</p>
  </div>
  <p>$<span class="money">${numInput.value}</span> .00</p>
  </div>`;
    expenses.insertAdjacentHTML("beforeend", insertHtml);
    function parseBalance() {
      if (document.querySelectorAll(".expense__tile").length > 1) {
        try {
          document.getElementById("unq").textContent = [
            ...document.querySelectorAll(".money"),
          ].reduce((acc, item) => acc + Number(item.textContent), 0);
        } catch (error) {
          console.log("One input is invalid");
        }
      }
      document.querySelector(".desc input").value = numInput.value = "";
    }
    parseBalance();
  });
}
processData();
