// class Testimonial {
//   #quote = "";
//   #image = "";

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote;
//   }

//   get image() {
//     return this.#image;
//   }

//   // This is an abstract method that subclasses will implement
//   get author() {
//     throw new Error("getAuthor() method must be implemented.");
//   }

//   // This is a polymorphic method than can take any subclass of Testimonial
//   get testimonialHTML() {
//     return `
//           <div class="testimonial">
//               <img src="${this.image}" class="profile-testimonial" />
//               <p class="quote">
//                   ${this.quote}
//               </p>
//               <p class="author">- ${this.author}</p>
//           </div>
//       `;
//   }
// }

// class AuthorTestimonial extends Testimonial {
//   #author = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// class CompanyTestimonial extends Testimonial {
//   #company = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#company = author;
//   }

//   get author() {
//     return this.#company + " Company";
//   }
// }

// const testimonial1 = new AuthorTestimonial(
//   "Papah Simpati",
//   "Gelak Tawa",
//   "assets/6e5943034398146eb04e54f37b7a2f5b.jpg"
// );

// const testimonial2 = new AuthorTestimonial(
//   "Rajab Gugug",
//   "Gangguin Jawa",
//   "assets/download (2).jpeg"
// );

// const testimonial3 = new AuthorTestimonial(
//   "Dimas Kopling",
//   "Ksabar!",
//   "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );

// const testimonial4 = new AuthorTestimonial(
//   "Sawi Putih",
//   "Siapa sangka!",
//   "assets/kanye-west-_150917084801-755.jpg"
// );

// const testimonial5 = new AuthorTestimonial(
//   "Abdul Galon",
//   "Terkadang!",
//   "assets/9734c2e6-c84f-447e-94f6-337ca8c9c596-1688175721813.webp"
// );

// let testimonialData = [
//   testimonial1,
//   testimonial2,
//   testimonial3,
//   testimonial4,
//   testimonial5,
// ];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialHTML;
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;

let hamburgerIsOpen = false;
const openHamburger = () => {
  let hamburgerNavContainer = document.getElementById(
    "hamburger-nav-container"
  );
  if (!hamburgerIsOpen) {
    hamburgerNavContainer.style.display = "block";
    hamburgerIsOpen = true;
  } else {
    hamburgerNavContainer.style.display = "none";
    hamburgerIsOpen = false;
  }
};

//hof
const testimonialData = [
  {
    author: "Papah Simpati",
    quote: "Gelak Tawa",
    image: "assets/6e5943034398146eb04e54f37b7a2f5b.jpg",
    rating: 5,
  },
  {
    author: "Rajab Gugug",
    quote: "Gangguin Jawa",
    image: "assets/download (2).jpeg",
    rating: 4,
  },
  {
    author: "Dimas Kopling",
    quote: "Ksabar!",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
  {
    author: "Sawi Putih",
    quote: "Siapa sangka!",
    image: "assets/kanye-west-_150917084801-755.jpg",
    rating: 1,
  },
  {
    author: "Abdul Galon",
    quote: "Terkadang!",
    image: "assets/9734c2e6-c84f-447e-94f6-337ca8c9c596-1688175721813.webp",
    rating: 2,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
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
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
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
}
