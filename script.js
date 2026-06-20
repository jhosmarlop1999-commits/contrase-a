document.getElementById("formulario").addEventListener("submit", function(e){

    e.preventDefault();

    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    // Validación:
    // Mínimo 8 caracteres, al menos una letra y un número
    let patron = palomino69

    if(patron.test(password)){
        mensaje.style.color = "lime";
        mensaje.textContent = "✓ Contraseña válida";
    }else{
        mensaje.style.color = "yellow";
        mensaje.textContent = "✗ Debe tener mínimo 8 caracteres, una letra y un número.";
    }

});