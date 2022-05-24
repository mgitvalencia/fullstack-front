$(function() {
    $("#enviar").on("click", function(e) {
        console.log($("#lblnombre").text());
        console.log($("#nombre").text());
        console.log($("#apellido").text());
        if($("#nombre").val() == "" || $("#apellido").val() == "" ) {
            if($("#nombre").val() == "") {
                $("#lblnombre").css("color","red");                
            };
            if($("#apellido").val() == "") {
                $("#lblapellido").css("color","red");
            };            
            event.preventDefault();
        };
    });
});