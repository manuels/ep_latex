exports.createIcon = function(hook, context){
  context.content += '<li class="acl-write separator"></li>'+
    '<li class="acl-write" id="compileLatex" data-key="compilelatex">'+
    '  <a data-l10n-id="pad.toolbar.latex.compile">'+
    '    <span style="color: black">LATEX</span>'+
    '  </a>'+
    '</li>';
}
