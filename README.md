##useage
  
	  var gulp = require('gulp');
		var fileVersion = require('gulp-fileversion');
		gulp.task('default', function() {
		  return gulp.src('*.html')
		  			.pipe(fileVersion({ 'verName': 'ver' }))
		  			.pipe(gulp.dest('./dist/'));
		})	

		


####html
		<!DOCTYPE HTML>
		<html>

		<head>
		    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		    <meta name="renderer" content="webkit">
		    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		    <link type="text/css" rel="stylesheet" href="../css/bootstrap/bootstrap.css" />
		    <link type="text/css" rel="stylesheet" href="../css/main.css" />
		    <title>日历📅</title>
		</head>

		<body>
		    <div class="calander-container" id="j-calander">
		    	<img src="dist/pic.jpg">
		    	<img src="dist/pic.png">
		    </div>
		    <script src="/dist/js/main.js?sdh212j1k2k"></script>
		    <script src="/dist/js/main2.js"></script>
		</body>

		</html>
####输出的html
		<!DOCTYPE HTML>
		<html>

		<head>
		    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		    <meta name="renderer" content="webkit">
		    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		    <link type="text/css" rel="stylesheet" href="../css/bootstrap/bootstrap.css?ver=d3d801f824" />
		    <link type="text/css" rel="stylesheet" href="../css/main.css?ver=d3d801f824" />
		    <title>日历📅</title>
		</head>

		<body>
		    <div class="calander-container" id="j-calander">
		    	<img src="dist/pic.jpg?ver=d3d801f824">
		    	<img src="dist/pic.png?ver=d3d801f824">
		    </div>
		    <script src="/dist/js/main.js?sdh212j1k2k"></script>
		    <script src="/dist/js/main2.js?ver=d3d801f824"></script>
		</body>

		</html>