<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Summit</title>
<link rel="stylesheet" href="./css/app.css" />
</head>
<body>
	<header class="d-flex flex-row justify-content-center sticky-top bg-white">
		<div class="col-1">
			<a href="./" class="navbar-brand"> <!-- HEADER --> <img
				src="https://shipsmart.com.br/assets/img/logo.png" class="col-12" />
			</a>
		</div>
	</header>
	<div id="list">
		<the-contacts-list-page></the-contacts-list-page>
		<confirm-contact-delete-model></confirm-contact-delete-model>
	</div>
	<footer class="fixed-bottom d-flex justify-content-center">
		<span class="text-muted">Desenvolvido por <a
			href="https://hullick.github.io/">Hullick Bartholo Gomes</a></span>
	</footer>
	<script src="./js/list-contacts.js"></script>
</body>
</html>