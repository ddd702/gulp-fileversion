var PLUGIN_NAME = 'gulp-fileversion';
var gutil = require('gulp-util');
var through = require('through2');
var crypto = require('crypto');
var objectAssign = require('object-assign');
var fileRegx=/(src|href)(\s*=\s*)(\"|\')([0-9a-zA-Z_\-\.\/\:\\]+)(js|css|gif|png|jpg)(\"|\')/gi;
module.exports=function(options){
	var hash=crypto.createHash('md5').update(new Date().getTime().toString()).digest('hex').slice(0, 10);
    var opts=objectAssign({
        verName:'v'
    },options);
    return through.obj(function(file,env,cb){
        if (file.isNull()) {
            this.push(file);
            return cb();
        }
        if (file.isStream()) {
            this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return cb();
        }
        var newFileContent = file.contents.toString().replace(fileRegx,'$1$2$3$4$5?'+opts.verName+'='+hash+'$6');
        file.contents=new Buffer(newFileContent);
        this.push(file);
        cb();
    });
}