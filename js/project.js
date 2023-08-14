let data = [];
let Datadummy = false;

function submitProject(event) {
  event.preventDefault();

  let projectTitle = document.getElementById("input-project-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-file").files;
  let images = document.getElementById("input-file").value;

  if (projectTitle == "") {
    return alert("Project title can't be empty!");
  } else if (startDate == "") {
    return alert("Start Date can't be empty!");
  } else if (endDate == "") {
    return alert("End Date can't be empty!");
  } else if (description == "") {
    return alert("Description can't be empty!");
  } else if (images == "") {
    return alert("Please attach an image!");
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

  const nodeJsIcon = '<i class="fa-brands fa-node"></i>';
  const reactIcon = '<i class="fa-brands fa-react"></i>';
  const golangIcon = '<i class="fa-brands fa-golang"></i>';
  const vueJsIcon = '<i class="fa-brands fa-vuejs"></i>';

  let nodeJs = document.getElementById("cek1").checked ? nodeJsIcon : "";
  let golang = document.getElementById("cek2").checked ? golangIcon : "";
  let reactJs = document.getElementById("cek3").checked ? reactIcon : "";
  let vueJs = document.getElementById("cek4").checked ? vueJsIcon : "";

  let multiInput = document.querySelectorAll(".multi-input:checked");
  if (multiInput.length == 0) {
    return alert("Please Select At least One Technologies");
  }
  image = URL.createObjectURL(image[0]);

  let project = {
    projectTitle,
    durasi,
    postAt: new Date(),
    nodeJs,
    golang,
    reactJs,
    vueJs,
    description,
    image,
  };

  data.push(project);
  console.log(data);
  renderProject();
  Datadummy = true;
}

function renderProject() {
  if (!Datadummy) {
    return;
  }
  document.getElementById("content").innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    document.getElementById("content").innerHTML += `
    <div class="project-list-item" > 
     <div class="project-image">
       <img src="${
         data[i].image
       }" alt="gagal" style="width: 100%; border-radius: 10px 10px 0 0;" />
     </div>
     <div class="title-content">
       <a href="project_detail.html"><p style="font-size: 25px;text-align: left ; margin: 0px;"><strong>${
         data[i].projectTitle
       }</strong></p></a>
       <p >Durasi: ${data[i].durasi}</p>
       <p style:"margin:0px">Post: ${getDistance(data[i].postAt)}</p>
     </div>
   
     <div class="project-content">
         <p style="font-size:12px">
            ${data[i].description}
         </p>
     </div>
     <div>
     ${data[i].nodeJs}
     ${data[i].golang}
     ${data[i].reactJs}
     ${data[i].vueJs}
   </div>
     <div class="btn-group">
       <button class="btn-edit">Edit Post</button>
       <button class="btn-post">Delete Post</button>
     </div>
   </div>`;
  }
}

function getDistance(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;

  let milisecond = 1000;
  let secondInHours = 3600;
  let hoursInDays = 24;

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSecond = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} days ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hours ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minutes ago`;
  } else {
    return `${distanceSecond} seconds ago`;
  }
}

setInterval(function () {
  renderProject();
}, 5000);
