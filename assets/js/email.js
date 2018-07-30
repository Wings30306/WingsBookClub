function sendMail() {
  
var serviceId = "default_service";
var templateId = "bookclub";
var templateParams = {
  "from_name": $("#fullname").val(),
  "from_email": $("#email").val(),
  "title": $("#title").val(),
  "message": $("#description").val(),
 };
emailjs.send(serviceId,templateId,templateParams)

    .then(
      function (response) {
        console.log("SUCCESS", response);
        alert("Sent!");
      },
      function (error) {
        console.log("FAILED", error);
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(error));
      });
}