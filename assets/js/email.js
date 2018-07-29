function sendMail(contactForm) {
  emailjs.send("gmail","book_club",{
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "title":contactForm.title.value,
    "message": contactForm.description.value,
  })
  .then(
    function(response) {
    console.log("SUCCESS", response);
  }, 
  function(error) {
    console.log("FAILED", error)
  });
}