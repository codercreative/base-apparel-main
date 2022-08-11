"use strict";

// javascript:alert("hello world");

// if(document. getElementById('button'). clicked == true)
// {
// alert("button was clicked");
// }

const emailInput = document.querySelector(".email-input");

const errorMsg = document.querySelector(".error-msg");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regex.test(emailInput.value)) {
    document.body.innerHTML = `<div class="thank-you-page">
        <h2 class="thank-you">Thank you!</h2>
    </div>`;
    // errorMsg.textContent = "Thank you for subscribing";
    // console.log("email ok");
  } else {
    console.log(emailInput.value);
    emailInput.value = ``;
    errorMsg.textContent = "Please enter a valid email";
    // console.log("email not valid");
  }
});
