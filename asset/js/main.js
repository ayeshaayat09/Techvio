// navbar start
const showMenuIcon = document.getElementById("show-icon");
const hideMenuIcon = document.getElementById("hide-icon");
const navbar = document.querySelector("header nav ul");

function showMenu() {
  navbar.style.display = "block";
  navbar.style.top = "50px";
  showMenuIcon.classList.add("d-none");
  hideMenuIcon.classList.remove("d-none");
}

function hideMenu() {
  navbar.style.display = "none";
  hideMenuIcon.classList.add("d-none");
  showMenuIcon.classList.remove("d-none");
}

// typing animation
var typing = new Typed(".text", {
  strings: ["", "Freelancer", "Web Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

/*
// bottom to top
const goTopBtn = document.getElementById("bottomToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.classList.remove("d-none");
  } else {
    goTopBtn.classList.add("d-none");
  }
});
*/
// Progress Bar
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const targetWidth = progressBar.getAttribute("data-target");
          progressBar.style.width = targetWidth + "%";
          progressBar.textContent = targetWidth + "%";
          observer.unobserve(progressBar);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll(".progress-bar").forEach((bar) => {
    observer.observe(bar);
  });
});
// counter
// const counts = document.querySelectorAll(".count");
// const speed = 97;

// counts.forEach((counter) => {
//   function upDate() {
//     const target = Number(counter.getAttribute("data-target"));
//     const count = Number(counter.innerText);
//     const inc = target / speed;
//     if (count < target) {
//       counter.innerText = Math.floor(inc + count);
//       setTimeout(upDate, 15);
//     } else {
//       counter.innerText = target;
//     }
//   }
//   upDate();
// });
function animateCounters() {
  const counters = document.querySelectorAll(".count");
  const speed = 200; // Speed of incrementing in milliseconds

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / speed;

    let count = 0;

    const updateCount = () => {
      count += increment;
      counter.innerText = Math.ceil(count);

      if (count < target) {
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

// Run the animation when the page is loaded
window.addEventListener("load", animateCounters);

// portfolio onclick
const tabBtns = document.querySelectorAll(".tab-btn");
const items = document.querySelectorAll(".portfolio-item");

function openTab(tabName) {
  for (let btn of tabBtns) {
    btn.classList.remove("active");
  }
  event.target.classList.add("active");
  for (let item of items) {
    item.classList.add("hidden");
    item.classList.remove("block");
  }
  const activeItems = document.getElementsByClassName(tabName);
  for (let activeItem of activeItems) {
    activeItem.classList.add("block");
  }
}

// slider
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  autoplay: true,
  gap: 40,
  interval: 3000,
  pauseOnHover: true,
  // arrows: false,
  // arrowPath: "",
});

splide.mount();

// go top btn

const goTopBtn = document.getElementById("goTop");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    goTopBtn.style.bottom = "20px";
  } else {
    goTopBtn.style.bottom = "10000px";
  }
});
// handle event bottom to top buttom
goTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// loder
const loser = Document.getElementById("loader");
window.addEventListener("load", () => {
  loser.style.display = "none";
});
