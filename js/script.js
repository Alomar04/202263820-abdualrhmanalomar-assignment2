const greetingEl = document.getElementById("greeting");
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const contactForm = document.getElementById("contact-form");

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

const setGreeting = () => {
  if (greetingEl) {
    greetingEl.textContent = `${getGreeting()}!`;
  }
};

const applyTheme = (theme) => {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    root.classList.remove("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
};

const initTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    applyTheme(storedTheme);
    return;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
};

const toggleTheme = () => {
  const isDark = document.documentElement.classList.contains("dark");
  const nextTheme = isDark ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
};

const initForm = () => {
  if (!contactForm) return;
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Message Sent!");
    contactForm.reset();
  });
};

setGreeting();
initTheme();
initForm();

if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleTheme);
}
