// انتخاب لینک و سکشن
const link = document.querySelector(".mobile-menu-link");
const section = document.querySelector(".mobile-menu-wrapper");
const mobilewrapper = document.querySelector(".mobile-wrapper");
const closeicon = document.querySelector(".close-icon");
const iicone = document.querySelector(".i-icon");

// افزودن رویداد کلیک به لین
link.addEventListener("click", function () {
  const computedStyle = getComputedStyle(section);
  if (computedStyle.display === "none") {
    iicone.style.display = "none";
    section.style.display = "block";
    closeicon.style.display = "block";
  } else {
    iicone.style.display = "block";
    section.style.display = "none";
    closeicon.style.display = "none";
  }
});
