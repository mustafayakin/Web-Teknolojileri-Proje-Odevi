
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
/* İletisim Sayfası Javascript Kodlari */

function fun(){  
  document.getElementById("iletisimform").reset();
}   


function iletisimcontrol() {
  isim1="ahmet";
  var name = document.forms["iletisimform"]["fname"].value;
  if (name == "") {
      alert("İsim boş bırakılamaz");
      return false;
  }
  var email = document.forms["iletisimform"]["email"].value;
  if (email == "") {
      alert("Mail Kısmı Boş bırakılamaz");
      return false;
  }

  var forMail = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
  if (forMail.test(email) == false) {
      alert("Geçersiz Mail Adresi!!!");
      return false;
  }
  
  if(!(document.getElementById('radio1').checked) && !(document.getElementById('radio2').checked)) {   
    alert("Cinsiyetinizi Seçmediniz");
    return false;  
  }
  var message = document.forms["iletisimform"]["comment"].value;
  if (message == "") {
      alert("Mesaj Kısmı Boş bırakılamaz");
      return false;
  }
  var secilen = document.getElementById("sehirler").value;
  if(secilen == "-----"){
    alert("Şehir Seçmediniz!!");
    return false;
  }
}

function iletisimgoruntuleurl(){
  var url = window.location.href;
  return url;
}
/* iletişimgoruntule.html sayfası için yazdığım function */
function iletisimgoruntule(){
  function getParameterByName(name, url) {
    if (!url) url = iletisimgoruntuleurl();
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var name11 = getParameterByName('fname');
document.getElementById('name1').innerHTML = name11;
var lname11 = getParameterByName('lname');
document.getElementById('sname1').innerHTML = lname11;
var email11 = getParameterByName('email');
document.getElementById('email1').innerHTML = email11;
var gender11 = getParameterByName('inlineRadioOptions');
document.getElementById('gender1').innerHTML = gender11;
var city11 = getParameterByName('sehirler');
document.getElementById('city1').innerHTML = city11;
var message11 = getParameterByName('comment');
document.getElementById('comment1').innerHTML = message11;
var language11 = getParameterByName('language');
document.getElementById('language1').innerHTML = language11;
var language211 = getParameterByName('language1');
document.getElementById('language2').innerHTML = language211;
var language311 = getParameterByName('language2');
document.getElementById('language3').innerHTML = language311;
}



