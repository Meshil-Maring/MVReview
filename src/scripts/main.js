function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data))
    .catch((error) => console.error(error));
}

// loadComponent("header", "../components/common/header.html");

// // Home page components
// loadComponent("hero-section", "../components/home/hero-section.html");
// loadComponent("now-in-theaters", "../components/home/now-in-theaters.html");
// loadComponent(
//   "explore-whats-streaming",
//   "../components/home/explore-whats-streaming.html"
// );
loadComponent("footer", "../components/common/footer.html");
