// Paste a form endpoint here (e.g. Formspree "https://formspree.io/f/xxxxxxx")
// to have submissions emailed automatically. Left empty, the form opens the
// visitor's email app with the message pre-filled instead.
const FORM_ENDPOINT = "";
const PRACTICE_EMAIL = "GutierrezMD@gutierrezmed.co";

// Nav: solid background once scrolled past the hero band.
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
const toggle = document.getElementById("navToggle");
const menu = document.getElementById("mobileMenu");
const navIcon = document.getElementById("navIcon");
const setMenu = (open) => {
  menu.classList.toggle("open", open);
  nav.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  navIcon.innerHTML = '<use href="#' + (open ? "close" : "menu") + '"/>';
};
toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("cf-submit");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;

  const data = Object.fromEntries(new FormData(form).entries());
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  if (FORM_ENDPOINT) {
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Request failed");
      form.classList.add("sent");
      return;
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
      alert("Sorry, that didn't go through. Please call us at (702) 909-8196.");
      return;
    }
  }

  // No endpoint configured: hand the message to the visitor's email client.
  const body =
    "Name: " + data.name + "\nEmail: " + data.email +
    "\nPhone: " + (data.phone || "not provided") + "\n\n" + data.message;
  window.location.href =
    "mailto:" + PRACTICE_EMAIL +
    "?subject=" + encodeURIComponent("Website inquiry from " + data.name) +
    "&body=" + encodeURIComponent(body);
  form.classList.add("sent");
});
