exports.postAceInit = function(hook, context)
{
  $("#myswatchbox").off();
  $("#clearAuthorship").remove();
  $("#settingslink").remove();
  $("#usericon").prev().remove(); // seperator
  $("#embedlink").remove();
  $("#editorcontainerbox").css("left", "0px");
  $("#editorcontainerbox").css("right", "65px");
  $("#editorcontainerbox").css("width", "auto");
}
