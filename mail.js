const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyC2oWpy845Ph51wQa3tpU4w3tay5rvEB3Q",
  authDomain: "restuarantapp-4b3ad.firebaseapp.com",
  databaseURL: "https://restuarantapp-4b3ad-default-rtdb.firebaseio.com",
  projectId: "restuarantapp-4b3ad",
  storageBucket: "restuarantapp-4b3ad.appspot.com",
  messagingSenderId: "201399018591",
  appId: "1:201399018591:web:811b0c2f1b4dd1ac1027ea"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
