let dataBlog = [];

const addBlog = (event) => {
  event.preventDefault();

  let project = document.getElementById("input-project-title").value;
  let startDate = document.getElementById("input-blog-start").value;
  let endDate = document.getElementById("input-blog-end").value;
  let input = document.querySelectorAll(".multi-input:checked");
  let description = document.getElementById("input-project-desc").value;
  let image = document.getElementById("input-image").files;
  let images = document.getElementById("input-image").value;

  if (project === "") {
    return alert("Please input your project name");
  } else if (startDate === "") {
    return alert("Please fill the start date");
  } else if (endDate === "") {
    return alert("Please fill the end date");
  } else if (description === "") {
    return alert("Please fill the project description");
  } else if (input.length === 0) {
    return alert("Please choose atleast one option");
  } else if (images === "") {
    return alert("Please attach an image");
  }

  let start = new Date(startDate);
  let end = new Date(endDate);
  if (start > end) {
    return alert("End date should be greater than start date");
  }

  let waktu = end.getTime() - start.getTime();
  console.log(waktu);
  let hari = waktu / (1000 * 3600 * 24);
  let minggu = Math.floor(hari / 7);
  let bulan = Math.floor(minggu / 4);
  let tahun = Math.floor(bulan / 12);
  let durasi = "";

  if (hari > 0) {
    durasi = hari + " Hari";
  }
  if (minggu > 0) {
    durasi = minggu + " Minggu";
  }
  if (bulan > 0) {
    durasi = bulan + " Bulan";
  }
  if (tahun > 0) {
    durasi = tahun + " Tahun";
  }

  image = URL.createObjectURL(image[0]);

  let blog = {
    project,
    durasi,
    description,
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);
  renderBlog();
};

const renderBlog = () => {
  document.getElementById("contents").innerHTML = "";
  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById(
      "contents"
    ).innerHTML += `<div class="blog-list-item">
     <div class="blog-image">
       <img src="${dataBlog[i].image}" alt="" />
     </div>
     <div class="title-content">
       <a href="blog-content.html"><p style="font-size: 32px;">${dataBlog[i].project}</p></a>
       <p style="font-size: 20px;">Durasi: ${dataBlog[i].durasi}</p>
     </div>
     <div class="blog-content">
       <h1>
         <p>
            ${dataBlog[i].description}
         </p>
       </h1>
     </div>
     <div class="logo">
       <i class="fa-brands fa-google-play fa-lg"></i>
       <i class="fa-brands fa-android fa-lg"></i>
       <i class="fa-brands fa-java fa-lg"></i>
     </div>
     <div class="btn-group">
       <button class="btn-edit">Edit Post</button>
       <button class="btn-post">Delete Post</button>
     </div>
   </div>`;
  }
};
