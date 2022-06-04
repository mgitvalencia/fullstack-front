$(function() {
    $("#enviar").on("click", function(e) {
        console.log($("#lblnombre").text());
        console.log($("#nombre").text());
        console.log($("#apellido").text());
        if($("#nombre").val() == "" || $("#apellido").val() == "" ) {
            if($("#nombre").val() == "") {
                $("#lblnombre").css("color","red");                
            }else{
                $("#lblnombre").css("color","black");                
            };
            if($("#apellido").val() == "") {
                $("#lblapellido").css("color","red");
            }else{
                $("#lblapellido").css("color","black");
            };            
            event.preventDefault();
        }else{
            $("#lblnombre").css("color","black");
            $("#lblapellido").css("color","black");
            };
    });
});

$("#tamano").on('change', function() {
    $("#resultado_tamano").html("");
    
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/checksize",
        data: { tamano: this.value  },
        success: function(htmlexterno){
           $("#resultado_tamano").html(htmlexterno);}
    })
});