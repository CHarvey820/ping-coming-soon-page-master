const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
const form = document.querySelector("#emailSubmit");
const formContainer = document.querySelector("#formContainer");

let msgVisible = false;

form.addEventListener("submit", (e) => {
  const email = document.querySelector("#email");
  console.log(email.value);
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    // Only display the message if it does not already exist on the screen
    if (msgVisible === false) {
      const emailmsg = document.createElement("p");
      emailmsg.classList.add("emailErrorMsg");
      email.classList.toggle("borderBlue");
      email.classList.toggle("borderRed");
      emailmsg.innerText += "Please provide a valid email address";
      formContainer.appendChild(emailmsg);
      msgVisible = true;
    }
  }
});
