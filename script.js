document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function phonenumber() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 9999999 || x > 100000000) {
    text = "Invalid!";
  } else {
    text = "Will contact you soon~";
  }
  document.getElementById("demo").innerHTML = text;
}

function scrollFunction1() {
        let e = document.getElementById("week");
        e.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start'
        });
      }