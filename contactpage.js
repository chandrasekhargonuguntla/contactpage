document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the usual way
    document.getElementById('contact-form').style.display = 'none'; // Hide the form
    document.getElementById('thank-you-message').style.display = 'block'; // Show the thank you message
});

var icons = document.querySelectorAll(".icon");
   var texts = document.querySelectorAll(".FAQtext");

   icons.forEach(function(icon, index) {
       icon.addEventListener("click", function() {
           if (texts[index].style.display === "none") {
               texts[index].style.display = "block";
               icon.classList.remove("fa-plus");
               icon.classList.add("fa-minus");
           } else {
               texts[index].style.display = "none";
               icon.classList.remove("fa-minus");
               icon.classList.add("fa-plus");
           }
       });
   });

   let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    input.value = "Thank you! Your submission has been received!";
    input.style.width = "400px";
    input.style.backgroundColor = " rgb(77, 140, 182)";
    input.style.fontSize = "16px";
    input.style.textAlign = "center";
    btn.style.display = "none";
    input.style.color ="white";
});