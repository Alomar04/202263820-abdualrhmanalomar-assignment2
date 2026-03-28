const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const tabLinks = document.querySelectorAll("[data-open-tab]");
const themeToggleButton = document.getElementById("theme-toggle");
const themeToggleText = document.getElementById("theme-toggle-text");
const contactForm = document.getElementById("contact-form");
const greetingElement = document.getElementById("greeting");

const formFields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  message: document.getElementById("message"),
};

const errorElements = {
  name: document.getElementById("name-error"),
  email: document.getElementById("email-error"),
  message: document.getElementById("message-error"),
};

const successMessage = document.getElementById("form-success");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return "Good morning.";
  }

  if (currentHour < 18) {
    return "Good afternoon.";
  }

  return "Good evening.";
}

function initializeGreeting() {
  if (!greetingElement) {
    return;
  }

  greetingElement.textContent = getGreeting();
}

function setActiveTab(targetId) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === targetId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.id === targetId;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
}

function applyTheme(theme) {
  const isDarkTheme = theme === "dark";
  document.body.classList.toggle("dark-theme", isDarkTheme);

  if (themeToggleText) {
    themeToggleText.textContent = isDarkTheme ? "Light Mode" : "Dark Mode";
  }
}

function initializeTheme() {
  const storedTheme = localStorage.getItem("portfolio-theme");
  const preferredTheme = storedTheme || "light";
  applyTheme(preferredTheme);
}

function toggleTheme() {
  const isDarkTheme = document.body.classList.contains("dark-theme");
  const nextTheme = isDarkTheme ? "light" : "dark";

  applyTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
}

function showFieldError(fieldName, message) {
  const field = formFields[fieldName];
  const errorElement = errorElements[fieldName];

  field.classList.add("input-error");
  errorElement.textContent = message;
}

function clearFieldError(fieldName) {
  const field = formFields[fieldName];
  const errorElement = errorElements[fieldName];

  field.classList.remove("input-error");
  errorElement.textContent = "";
}

function validateForm() {
  let isValid = true;

  Object.keys(formFields).forEach((fieldName) => {
    clearFieldError(fieldName);
  });

  successMessage.textContent = "";

  if (!formFields.name.value.trim()) {
    showFieldError("name", "Please enter your name.");
    isValid = false;
  }

  if (!formFields.email.value.trim()) {
    showFieldError("email", "Please enter your email address.");
    isValid = false;
  } else if (!emailPattern.test(formFields.email.value.trim())) {
    showFieldError("email", "Please enter a valid email address.");
    isValid = false;
  }

  if (!formFields.message.value.trim()) {
    showFieldError("message", "Please enter a message.");
    isValid = false;
  }

  return isValid;
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  successMessage.textContent = "Thank you. Your message has been sent successfully.";
  contactForm.reset();
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTab(button.dataset.tab);
  });
});

tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveTab(link.dataset.openTab);
  });
});

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", toggleTheme);
}

if (contactForm) {
  contactForm.addEventListener("submit", handleFormSubmit);

  Object.keys(formFields).forEach((fieldName) => {
    formFields[fieldName].addEventListener("input", () => {
      clearFieldError(fieldName);
      successMessage.textContent = "";
    });
  });
}

initializeTheme();
initializeGreeting();
