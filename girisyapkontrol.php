<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<!------ BOOTSTRAP KODLARI ---------->

<!DOCTYPE html>
<html class="logincss">
<head>
<title>
<?php 
    $user = "b211210079@sakarya.edu.tr";
    $pass = "b211210079";
    $name="Mustafa Yakın";

        if (($_POST["mail"] == $user) and ($_POST["sifre"] == $pass)){
            $_SESSION["login"] = "true";
            $_SESSION["user"] = $user;
            $_SESSION["pass"] = $pass;
            $_SESSION["name"]=$name;
            echo("Hoşgeldiniz!");
        }
        else{
           echo "Tekrar Deneyiniz!";                       
        }

?>      
</title>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
<link href="css/main.css" rel="stylesheet">
</head>

<body class = "logincss">
<nav class="navbar navbar-expand-md navbar-dark bg-danger">
    <div class="container">
      
        <a href="index.html" class="navbar-brand font-italic"><i class="bi bi-snapchat mr-3"></i>Mustafa Yakın</a>

        <button class="navbar-toggler" data-target="#navbarCollapse" data-toggle="collapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="index.html" class="nav-link">Anasayfa</a>
                </li>
                <li class="nav-item">
                    <a href="egitimbilgilerim.html" class="nav-link">Eğitim Bilgilerim</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Şehrim</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Mirasımız</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">İlgi Alanım</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">İletişim</a>
                </li>
                <li class="nav-item active font-weight-bold">
                  <a href="girisyap.html" class="nav-link">Giriş Yap</a>
              </li>
            </ul>
        </div>

    </div>
</nav>
<div class="d-flex justify-content-center bg-dark" id>
    <p class="h1 text-center text-white loginyazisicss" id="loginkontrol">Lo</p>
    <p class="h1 text-center text-danger loginyazisicss" id ="temizlenecek">Gin</p>
</div>
<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="img/vesika.jpeg" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
                <div class="mx-auto text-center text-white h4 font-weight-bold">
                <?php 
                $user = "b211210079@sakarya.edu.tr";
                $pass = "b211210079";
                $name="Mustafa Yakın";
        if (($_POST["mail"] == $user) and ($_POST["sifre"] == $pass)){
           $_SESSION["login"] = "true";
           $_SESSION["user"] = $user;
           $_SESSION["pass"] = $pass;
           $_SESSION["name"]=$name;
    
           echo("$name <br> <br> Hoşgeldiniz!");                  
           header("Refresh: 2; url=index.html");
           
        }
    
        else{
            echo "Kullanıcı Adı veya Şifre Yanlış.<br> <br>";
            echo "!TRY AGAIN!";
            header("Refresh: 2; url=girisyap.html");
        }
    
    ?>
                </div>
                
				</div>

			</div>
		</div>
	</div>

<script src="script.js"></script>
</body>
</html>
