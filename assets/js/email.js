function sendMail() {

 var template_params = {
  "from_name": $("#fullname").val(),
  "from_email": $("#email").val(),
  "title": $("#title").val(),
  "message": $("#description").val(),
 };  
var service_id = "default_service";
var template_id = "bookclub";
emailjs.send(service_id,template_id,template_params)

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