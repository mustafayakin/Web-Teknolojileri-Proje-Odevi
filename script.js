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
    
    if ( email == "b211210079@sakarya.edu.tr" && pass == "b211210079"){
        
        alert (mesajsc);
        window.location = "index.html"; // index.html yonlendir
        return false;
    }
    else{
        attempt--;// deneme hakkını bir adet indir
        alert("Şifre veya Mail Yanlış ! Deneme Hakkınız "+attempt+" Adet Kaldı!!");
        // 3 deneme hakkı bitince
        if( attempt == 0){
        document.getElementById("mail").disabled = true;
        document.getElementById("sifre").disabled = true;
        document.getElementById("gonder").disabled = true;
        return false;
        }
    }
    
}