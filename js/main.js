// validation for form
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          console.log("notvalidation");
          event.preventDefault();
          event.stopPropagation();
        } else {
          console.log("Done validation");
        }
        form.classList.add("was-validated");
        // event.preventDefault(); if data valid dont refresh page
      },
      false
    );
  });
})();
// additional validation
let submit = document.querySelector("#submit");
let form = document.querySelector("#form");
let Name = document.querySelector("#Name");
let Email = document.querySelector("#Email");
let Subject = document.querySelector("#Subject");
let textarea = document.querySelector("#textarea");
form.onkeyup = function () {
  if (
    Name.value.trim() == "" ||
    Email.value.trim() == "" ||
    Subject.value.trim() == "" ||
    textarea.value.trim() == ""
  ) {
    submit.style.cursor = "not-allowed";
  } else {
    submit.style.cursor = "initial";
  }
};

// make counter to cards
let card = document.querySelectorAll(".cardCount h2");
let counter = document.querySelector("#Testimonial");
let started = false; // triger
window.onscroll = function () {
  if (!started) {
    card.forEach((cards) => counts(cards));
  }
  started = true;
};
function counts(el) {
  let target = el.dataset.target;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == target) {
      clearInterval(count);
    }
  }, 7000 / target);
}
// on scroll
let sections = document.querySelectorAll("section");
let nav = document.querySelector("nav");
let Home = document.querySelector("#Home");
let scrollTop = window.scrollY;
onscroll = function () {
  // make counter to cards
  if (window.scrollY >= About.offsetHeight) {
    if (!started) {
      card.forEach((cards) => counts(cards));
      started = true;
    }
  }
  ////////////////////////////////////////////////////////////////
  // hide nav on scroll down and show it on scroll up
  if (scrollTop < window.scrollY) {
    nav.style.transform = `translateY(-100px)`;
  } else {
    nav.style.transform = `translateY(0px)`;
    nav.style.backgroundColor = "#00000080";
    nav.style.backdropFilter = "blur(5px)";
  }
  scrollTop = window.scrollY;
  ////////////////////////////////////////////////////////////////
  // animation to background img
  Home.style.backgroundPosition = `center ${-scrollTop / 3}px`;
  ////////////////////////////////////////////////////////////////
  // add class active to navbar on scroll
  let scrollPosation = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosation >= section.offsetTop - section.offsetHeight * 0.3 &&
      scrollPosation <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.3
    ) {
      let current = section.attributes.id.value;
      removeActive();
      addActive(current);
    }
  });
};
let removeActive = function () {
  document.querySelectorAll(".navbar-nav a").forEach((element) => {
    element.classList.remove("active");
  });
};
let addActive = function (id) {
  let x = document.querySelector(`a[href="#${id}"]`);
  x.classList.add("active");
};

// Portfolio js
let links = document.querySelectorAll(".links button");
let cards = document.querySelectorAll(".CARDS");
let hideImg = document.querySelectorAll(".hideImg");
let imgCard = document.querySelectorAll(".imgCard img");
let model = document.querySelector(".model");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    for (let j = 0; j < cards.length; j++) {
      cards[j].style.position = "absolute";

      if (cards[j].classList.contains(links[i].classList[0])) {
        cards[j].style.position = "relative";
        cards[j].style.transform = "scale(0)";
        cards[j].style.transform = "scale(1)";
        cards[j].style.transition = "1s";
      } else {
        removeActiveCard();
        addActiveCard(links[i]);
        cards[j].style.position = "absolute";
        cards[j].style.transform = "scale(1)";
        cards[j].style.transform = "scale(0)";
        cards[j].style.transition = "0s";
      }
    }
  };
  function removeActiveCard() {
    links.forEach((element) => {
      element.classList.remove("active");
    });
  }
  function addActiveCard(e) {
    e.classList.add("active");
  }
}

hideImg.forEach((item, i) => {
  item.onclick = function () {
    model.innerHTML = `
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Product Name</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <img src="${imgCard[i].attributes.src.value}" alt="...">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab perspiciatis et, voluptas esse ex expedita atque. Impedit porro eveniet,
           culpa rerum in doloremque velit perspiciatis doloribus ratione. Nobis, nisi, quasi.</p>
           <div class="icons">
            <div class="icon">
              <i class="fa fa-user"></i>
              <p>alex smith</p>
            </div>
            <div class="icon">
              <i class="fa fa-globe"></i>
              <a>www.example.com</a>
            </div>
            <div class="icon">
              <i class="fa fa-calendar"></i>
              <p>12 June 2018</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <h5>Share</h5>
          <div class="iconS">
          <i class="fa-brands fa-facebook-f fa-fw"></i>
          <i class="fa-brands fa-twitter fa-fw"></i>
          <i class="fa-brands fa-google fa-fw"></i>
          <i class="fa-brands fa-github fa-fw"></i>
        </div>
        </div>
      </div>
    </div>
  </div>
    `;
  };
});

// btn toUP
let toUp = document.querySelector(".toUp");
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    toUp.style.display = "block";
  } else {
    toUp.style.display = "none";
  }
  sessionStorage.setItem("scrollY", window.scrollY);
});
toUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.onload = function () {
  if (window.scrollY > 200) {
    toUp.style.display = "block";
  } else {
    toUp.style.display = "none";
  }
  window.scrollTo(0, sessionStorage.getItem("scrollY"));
};
