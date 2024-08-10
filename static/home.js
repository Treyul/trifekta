// get html elements
const services_articles = document.querySelectorAll(
  "#services section article"
);

// iterate through the service articles to add slide show to each segment

// timer variables for async slides
let article_count = 0;
let slide_time = 6000;
services_articles.forEach((article) => {
  const services = article.querySelectorAll("div");
  console.log(article_count);
  article_count++;
  console.log("counting");
  // get no of slides
  let service_count = services.length;
  let k = 0;

  // set time for each slide
  setInterval(() => {
    console.log(k);
    // ierate through the services to hide element that should be inactive
    const active_section = article.querySelector(".active");

    active_section.classList.replace("active", "inactive-out");
    console.log(active_section.nextElementSibling);

    //slide present element out of view
    setTimeout(() => {
      // hide all elements
      for (let i = 0; i < service_count; i++) {
        services[i].style.display = "none";
      }

      active_section.classList.replace("inactive-out", "inactive-in");
      // activate next element
      if (active_section.nextElementSibling == null) {
        services[0].style.removeProperty("display");
      } else {
        active_section.nextElementSibling.style.removeProperty("display");
      }
    }, 750);

    // bring next slide into view
    setTimeout(() => {
      if (active_section.nextElementSibling == null) {
        services[0].classList.replace("inactive-in", "active");
      } else {
        active_section.nextElementSibling.classList.replace(
          "inactive-in",
          "active"
        );
      }
    }, 1500);

    // keep track of active element
    k++;
    if (k == service_count) k = 0;
  }, slide_time + article_count * 1000);
});

console.log("runninfg continuing");
