const endpoint = "https://api.npoint.io/62394282cd38263becee";
const testimonialData = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", endpoint, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error loading data");
    }
  };
  xhr.onerror = function () {
    reject("Network error: " + xhr.status);
  };

  xhr.send();
});

async function allTestimonials() {
  try {
    const response = await testimonialData;
    console.log(response);
    let testimonialHTML = "";

    response.forEach(function (item) {
      testimonialHTML += `
              <div class="testimonial">
                <img src="${item.image}" class="profile-testimonial" />
                <p class="quote">${item.quote}</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
              </div>
              `;
    });

    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (err) {
    console.log(err);
  }
}

allTestimonials();

async function filterTestimonials(rating) {
  try {
    const response = await testimonialData;
    console.log(response);
    let testimonialHTML = "";

    const testimonialFiltered = response.filter(function (item) {
      return item.rating === rating;
    });

    if (testimonialFiltered.length === 0) {
      testimonialHTML = `<h1>Data not found!</h1>`;
    } else {
      testimonialFiltered.forEach(function (item) {
        testimonialHTML += `
            <div class="testimonial">
              <img src="${item.image}" class="profile-testimonial" />
              <p class="quote">${item.quote}</p>
              <p class="author">- ${item.author}</p>
              <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
            </div>
            `;
      });
    }

    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (err) {
    console.log(err);
  }
}
