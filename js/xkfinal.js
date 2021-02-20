
function sendMessages() {

    var xkname = document.getElementById("xkname");
    var xkemail = document.getElementById("xkemail");
    var xkmsg = document.getElementById("xkmsg");

    let Message = {
        name: xkname.value,
        email: xkemail.value,
        msg: xkmsg.value
    }

    firebase.database().ref('Message').push(Message);

    xkname.value = ""
    xkemail.value = ""
    xkmsg.value = ""

}