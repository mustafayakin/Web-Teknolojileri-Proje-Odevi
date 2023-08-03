
function loginkontrol() {
    var pass = document.forms["girisYap_form"]["sifre"].value;
    if (pass == "") {
        alert("Şifre Boş Bırakılamaz!");
        return false;
    }
    var email = document.forms["girisYap_form"]["mail"].value;
    var forMail = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/; // how to do an email validation in javascript ??
    if (forMail.test(email) == false) {
        alert("Geçersiz Mail Adresi!!!");
        return false;
    }
}
function iletisimkontrol(){

}

// Yukarı butonu bul
let mybutton = document.getElementById("yukariBtn");

// 20 piksel aşağı inince scroll fonksiyonunu çalıştır
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// kullanıcı butona tıklayınca üste gitmesini sağlayan fonksiyon.
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function ilgialanimsub(){
  alert("Gonderdiniz!");
  var yazan;
  var adres = document.getElementById("ilgialanimtextid"); 
  yazan = adres.value;
  adres.value ="";
  document.getElementById("yazilan").innerHTML = yazan;

}

