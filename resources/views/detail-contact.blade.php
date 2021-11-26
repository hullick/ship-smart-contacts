<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Summit</title>
<link rel="stylesheet" href="/public/css/app.css" />
</head>
<body>
	<header
		class="d-flex flex-row justify-content-center sticky-top bg-white">
		<div class="col-1">
			<a href="./" class="navbar-brand"> <img
				src="https://shipsmart.com.br/assets/img/logo.png" class="col-12" />
			</a>
		</div>
	</header>
	<div id="detail-contact">
		<the-contact-detail-page contact-id="<?= $contactId ?>"></the-contact-detail-page>
	</div>
	<footer class="fixed-bottom d-flex justify-content-center">
		<span class="text-muted">Desenvolvido por <a
			href="https://hullick.github.io/">Hullick Bartholo Gomes</a></span>
	</footer>
	<script src="/public/js/detail-contact.js"></script>
</body>
</html>