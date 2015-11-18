var DB, Everyone
	, exec = require('child_process').exec
	, execTest = require('child_process').exec
	, fs = require('fs')
	, Imprimir = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Imprimir;
};

Imprimir.post = function(req, res, next) {
  var imprimir ="<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN''http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /><title>PRESSACCO</title></head><body>"+req.body.recibo.replace("display:none;", "")
	var htmlFileNameMaterial = "/tmp/Recibo"+req.params.id+".html"
	var pdfFileNameMaterial = "/mnt/winserver/Recibo"+req.params.id+".pdf";
	fs.writeFile(htmlFileNameMaterial, imprimir, function(err) {
	});
	var child= exec('xvfb-run -s"-screen 0 1024x768x24" wkhtmltopdf '+htmlFileNameMaterial+" "+pdfFileNameMaterial, function(err, stdout, stderr) {
    console.log(stdout);
    var localPdfFileNameMaterial= "/tmp/Recibo"+req.params.id+".pdf";//hago copia local en tmp
    var child= exec('xvfb-run -s"-screen 0 1024x768x24" wkhtmltopdf '+htmlFileNameMaterial+" " + localPdfFileNameMaterial);
	});
};

module.exports = Imprimir;
  