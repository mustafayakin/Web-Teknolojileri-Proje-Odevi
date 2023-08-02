var attempt = 3; //Giriş hakkı sayısı
function loginkontrol() {
    let mesajsc = "Giriş Başarılı! Hoşgeldin Mustafa";
    var pass = document.forms["girisYap_form"]["sifre"].value;
    if (pass == "") {
        alert("Şifre Boş Bırakılamaz!");
        return false;
    }
    var email = document.forms["girisYap_form"]["mail"].value;
    var forMail = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
    if (forMail.test(email) == false) {
        alert("Geçersiz Mail Adresi!!!");
        return false;
    }
}