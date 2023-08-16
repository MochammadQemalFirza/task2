function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-pilih").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    return alert("Nama harus diisi!");
  } else if (email == "") {
    return alert("Email harus diisi!");
  } else if (phone == "") {
    return alert("Phone harus diisi!");
  } else if (subject == "") {
    return alert("Subject harus dipilih!");
  } else if (message == "") {
    return alert("Message harus diisi!");
  }

  let emailReceiver = "qemalfirza@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, silakan kontak saya pada nomor ${phone}`;
  a.click();

  let data = { name, email, phone, subject, message };

  console.log(data);
}

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
