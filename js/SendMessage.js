$('#btnEnviar').click(function(event){

    var name = $('#name').val();
    var auxName = name.trim();
    var email = $('#email').val();
    var auxEmail = email.trim();
    var message = $('#message').val();
    var auxMessage = message.trim();
    var tel = $('#tel').val();
    var auxTel = tel.trim();
    var noValido = "ㅤ";

    if(auxName.includes(noValido) || auxEmail.includes(noValido) || auxMessage.includes(noValido) ||auxTel.includes(noValido) || auxName == "" || auxEmail == "" || auxMessage == "" || auxTel == ""){
        //alertify.err or("Complete los campos");
        Swal.fire({
            icon: 'warning',
            title: 'Complete los campos vacios!',
            showConfirmButton: false,
            timer: 1500
        })
    }else{
        emailExp = /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/;
        if(emailExp.test(email))
        {
            var url = "mail.php";
            $.ajax({
                url: url,
                type: "post",
                data: {name:name, email:email, message:message, tel:tel},
                success:function(data){
                    if(data.indexOf("Registro exitoso") != -1){
                        //alert(name + "Gracias por contactarnos, responderemos lo antes posible");
                        Swal.fire({
                            icon: 'success',
                            title: name + " " + 'Gracias por contactarnos, responderemos lo antes posible',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        setTimeout(function() {
                                window.location.href = 'https://todopc.com.mx/test/Sistema/Contacto';
                        }, 2000);
                    }else{
                        //alert("Error al enviar mensaje");
                        Swal.fire({
                            icon: 'error',
                            title: 'Se produjo un error al enviar el mensaje',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }
            })
        }else{
            Swal.fire({
            icon: 'error',
            title: 'Ingrese un correo valido!',
            showConfirmButton: false,
            timer: 1500
        })
        }
    }
});