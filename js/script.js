function ChooseUsers() {

    this.mailUser = function () {
      document.getElementById('mailUser').style.display = "block";
      document.getElementById('phoneUser').style.display = "none";
      // document.getElementById('vkUser').style.display = "none";
    }
    this.mailMouser = function () {
      document.getElementById('mailMail').style.backgroundColor = "#55194E";
      document.getElementById('mailMail').style.color = "white";
    }
    this.mailMouseOut = function () {
      document.getElementById('mailMail').style.backgroundColor = "white";
      document.getElementById('mailMail').style.color = "#333333";
    }
    this.phoneUser = function () {
      document.getElementById('phoneUser').style.display = "block";
      document.getElementById('mailUser').style.display = "none";
      // document.getElementById('vkUser').style.display = "none";
    }
    this.phoneMouser = function () {
      document.getElementById('phonePhone').style.backgroundColor = "#55194E";
      document.getElementById('phonePhone').style.color = "white";
    }
    this.phoneMouseOut = function () {
      document.getElementById('phonePhone').style.backgroundColor = "white";
      document.getElementById('phonePhone').style.color = "#333333";
    }
    this.vkUser = function () {
      // document.getElementById('vkUser').style.display = "block";
      document.getElementById('mailUser').style.display = "none";
      document.getElementById('phoneUser').style.display = "none";
    }
    this.vkMouser = function () {
      document.getElementById('vkVk').style.backgroundColor = "#55194E";
      document.getElementById('vkVk').style.color = "white";
    }
    this.vkMouseOut = function () {
      document.getElementById('vkVk').style.backgroundColor = "white";
      document.getElementById('vkVk').style.color = "#333333";
    }
}

var phone = new ChooseUsers();
var mail = new ChooseUsers();
var Koontact = new ChooseUsers();

function mailFunction() {
  mail.mailUser();
  mail.mailMouser();
  mail.phoneMouseOut();
  mail.vkMouseOut();
}

function phoneFunction() {
  phone.phoneUser();
  phone.phoneMouser();
  phone.mailMouseOut();
  phone.vkMouseOut();
}
function vkFunction() {
  Koontact.vkUser();
  Koontact.vkMouser();
  Koontact.mailMouseOut();
  Koontact.phoneMouseOut();
}
