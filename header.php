<!DOCTYPE html>
<html>
<head>
	 <meta charset="utf-8"/>
	<title><?php echo $page_title;?></title>
	<link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet"> 
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body <?php echo 'class="'.$page_id.'"'; ?>>
	<div id="fb-root"></div>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<header>
<img src="images/dtmsm-logo-text.png" />
<nav>
	<ul class="mainMenu">
		<li><a href="index.php">home</a></li>
		<li><a href="music.php">music</a></li>
		<li><a href="gigs.php">gigs</a></li>
		<li><a href="merch.php">merch</a></li>
		<li><a href="connect.php">connect</a></li>
		<li><a href="archive.php">archive</a></li>
	</ul>
</header>