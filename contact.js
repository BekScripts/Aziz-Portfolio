function sendEmail(){
    let params = {
         name : document.getElementById("user-name").value,
         email : document.getElementById("user-email").value,
         subject : document.getElementById("user-subject").value,
         message : document.getElementById("user-message").value
    }

    emailjs.send("service_g6j1knv", "template_bxouzx3", params).then(alert("Email Sent!!"))
};

