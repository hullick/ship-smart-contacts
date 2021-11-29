<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ship Smart - Agenda</title>
<link rel="stylesheet" href="/public/css/app.css" />
<link rel="icon" href="/public/img/favicon.png">
</head>
<body>
	@include("components.header")
	<div id="list">
		<the-contacts-list-page></the-contacts-list-page>
		<confirm-contact-delete-model></confirm-contact-delete-model>
	</div>
	@include("components.footer")
	<script src="/public/js/list-contacts.js"></script>
</body>
</html>