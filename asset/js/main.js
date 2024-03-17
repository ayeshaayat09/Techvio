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
const counts = document.querySelectorAll(".count");
const speed = 97;

counts.forEach((counter) => {
  function upDate() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.floor(inc + count);
      setTimeout(upDate, 15);
    } else {
      counter.innerText = target;
    }
  }
  upDate();
});
