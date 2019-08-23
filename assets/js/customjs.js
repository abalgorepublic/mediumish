$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').css("background-color", "white");
  });
  $(function(){
    $("#editorjs").each(function(i){
    len=$(this).text().length;
    if(len<100)
    {
    $("#saveButton").hide();
    alert('min 500 char req')
    }
    else{
    $("#saveButton").show();

    }
    });
    });