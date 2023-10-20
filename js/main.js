// LOADER
document.addEventListener("DOMContentLoaded", function () {
  setTimeout( function () {
  document.querySelector(".lds-roller-wrapper").classList.add("lds-roller-wrapper--active");
}, 900);
});

document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme", "dark");
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  if (theme === "dark") {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }

  darkModeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark-mode");

    if (document.documentElement.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});