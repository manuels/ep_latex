var root = '../../static/plugins/ep_latex/static/js/';

exports.documentReady = function(hook, context){
  var button = $('#compileLatex');
  var mode = 'compile';

  jQuery.getScript(root+'texlive.js/website/pdftex.js/release/pdftex-webworker.js');
  jQuery.getScript(root+'texlive.js/website/pdftex.js/release/pdftex.js');
  jQuery.getScript(root+'texlive.js/website/texlive.js');

  var pdf;
  button.click(function() {
    if(mode==='compile') {
      button.children().append('<div id="msg">compiling</div>');
    
      var pdftex = new PDFTeX(root+'texlive.js/website/');

      pdftex.on_stdout = function(txt) { }
      pdftex.on_stderr = function(txt) { }

      var texlive = new TeXLive(pdftex);
      
      var url = document.URL+'/export/txt';
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);

      xhr.onreadystatechange = function(ev) {
        if (xhr.readyState !== 4)
          return;

        var code = xhr.responseText;
        texlive.compile(code, '../../', function(data) {
          button.find('#msg').text('click to open');
          pdf = data;
          mode = 'open';
        });
      };

      xhr.send(null);
    }
    else {
       mode = 'compile';
       window.open('data:application/pdf;base64,'+window.btoa(pdf));
       button.find('#msg').remove();
    }
  });
}
