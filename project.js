let data = [];

function submitProject() {
  let projectTitle = document.getElementById("input-project-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-file").files;
  image = URL.createObjectURL(image[0]);

  if (projectTitle == "") {
    return alert("Project title can't be empty!");
  } else if (startDate == "") {
    return alert("Start Date can't be empty!");
  } else if (endDate == "") {
    return alert("End Date can't be empty!");
  } else if (description == "") {
    return alert("Description can't be empty!");
  } else if (image == "") {
    return alert("Image can't be empty!");
  }

  let project = {
    projectTitle,
    startDate,
    endDate,
    description,
    image,
  };

  data.push(project);
  console.log(data);

  renderProject();
}
