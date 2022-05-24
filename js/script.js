
document.getElementById("formulario").addEventListener("submit", 
    function(event) {
        if(document.getElementById("nombre").value == "" || document.getElementById("apellido").value == "") {
            if(document.getElementById("nombre").value == "") {
                document.getElementById("lblnombre").style.color = "red";
            }
            if(document.getElementById("apellido").value == "") {
                document.getElementById("lblapellido").style.color = "red";
            }
            event.preventDefault();
        }
    }
);