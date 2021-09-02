

/*comienza JS del archivo INDEX*/
/* Argentina vs Ecuador 3 - 0*/
function pregunta () {var respuesta1 = prompt ('¿Cuantos goles metio Argentina contra Ecuador?')
    var r = document.getElementById ("resultados")
    if (respuesta1 == 3){
        r.innerHTML = "Ecuador 0 - "+ respuesta1+ " Argentina. ✅"
    }

   else {
        r.innerHTML = "Ecuador 0 - "+ respuesta1+ " Argentina. ❌ Intentalo de nuevo"
    }
    
}
/* Argentina vs Paraguay 1 - 0*/
function pregunta2 () {var respuesta2 = prompt ('¿Cuantos goles metio Argentina contra Paraguay?')
    var e = document.getElementById ("resultados2")
    if (respuesta2 == 1){
        e.innerHTML = "Paraguay 0 - "+ respuesta2+ " Argentina. ✅"
    }
    else {
        e.innerHTML = "Paraguay 0 - "+ respuesta2+ " Argentina. ❌ Intentalo de nuevo" 
    }
}
/* Argentina vs Brasil 1 - 0*/
function pregunta3 () {var respuesta3 = prompt ('¿Cuantos goles metio Argentina contra Brasil?')
    var d = document.getElementById ("resultados3")
    if (respuesta3 == 1) {
        d.innerHTML = "Brasil 0 - "+ respuesta3+ " Argentina. ✅"
    }
    else {
        d.innerHTML = "Brasil 0 - "+ respuesta3+ " Argentina. ❌ Intentalo de nuevo"
    }
    
}

function pregunta4 () {var numero = Number (prompt ("¿Deci un Numero del 1 al 28 para saber cual es tu jugador de la suerte?"))
var campeones = ['La Escaloneta', 'Sergio Agüero','Julián Álvarez','Joaquín Correa','Ángel Correa','Lautaro Martínez','Lionel Messi','Angel Di María','Guido Rodríguez','Rodrigo De Paul','Alejandro Gómez','Nicolás Domínguez','Ángel Correa ','Leandro Paredes','Giovani Lo Celso','Exequiel Palacios','Nicolás González',
'Gonzalo Montiel','Nicolás Otamendi','Germán Pezzella','Nicolás Tagliafico','Lucas Martínez Quarta','Marcos Acuña','Lisandro Martínez','Cristian Romero','Agustín Marchesín','Emiliano Martínez', 'Franco Armani','Juan Musso']
var h = document.getElementById ("resultados4")
h.innerHTML = "Tu Jugador de la Suerte eeeees.... "+ (campeones [numero])


}

 function mostrar (){
     var argentina = document.getElementById ('argentina')
     argentina.style.display = 'block';
    }

 function premiosDeAmerica (){
    var prem = document.getElementById ('premios')
    prem.style.display = 'block';
}

function oscuridadindex() {
    var oscuro = document.getElementById('hold')
        oscuro.style.backgroundColor = '#5e5e5e'
        var header = document.getElementById('banner')
        header.style.backgroundColor = '#808080'
        var nave = document.getElementsByTagName ('nav')
        nave[0].style.background = '#808080'
        var maine = document.getElementsByTagName ('main')
        maine[0].style.backgroundColor = '#808080'
        var izq = document.getElementById ('left')
        izq.style.backgroundColor = '#808080'
        var art = document.getElementsByTagName ('article')
        art[0].style.backgroundColor = '#808080'
        var prem = document.getElementById ('premios')
        prem.style.color = 'white'
        var k = document.getElementsByTagName ('h1')
        k[0].style.color = 'white'
        var mm = document.getElementsByTagName ('h3')
        mm[0].style.color = 'white'
        var g = document.getElementById ('estiloResultados')
        g.style.color = 'white'
    
    }
    


/*finaliza JS del archivo INDEX*/


/* comienza js del archivo CONTACTO*/
function validarForm (){
    var nombre = document.getElementById ('nombre').value
    var mail = document.getElementById('mail').value
    var edad = document.getElementById('edad').value
    var fecha =document.getElementById('fecha').value
    var consulta = document.getElementById('consulta').value

    expresion = /\w+@\w+\.[a-z]/;
    
    if (nombre === "" || mail === "" || edad === "" || consulta === "" || fecha === "") {
        alert ("Todos los campos son obligatorios")
        return false;
    }

    else if (nombre.lenght>60){
        alert ("El nombre es demasiado largo")
        return false;
    }

    else if (nombre.lenght<8){
        alert ("El nombre es demasiado corto")
        return false;
    }
    else if (mail.lenght>80){
        alert ("El email es demasiado largo")
        return false;
    }

    else if (mail.lenght<10){
        alert ("El email es demasiado corto")
        return false;
    }

    else if (!expresion.test(mail)){
        alert ("El email no es valido")
        return false;
    }
}
/* finaliza js del archivo CONTACTO*/

/*Comienza JS del archivo INDUMENTARIA*/
function cambioSiguiente (){
    var p = document.getElementById ('conjunto2')
    p.style.display = 'block';
    var x = document.getElementById ('conjunto')
    x.style.display = 'none'
    var compras2 = document.getElementById ('compras')
    compras2.innerHTML = "Resultados: 4 - 6 (de 31)"

}

function cambioAtras (){
    var g = document.getElementById ('conjunto')
    g.style.display = 'block';
    var k = document.getElementById ('conjunto2')
    k.style.display = 'none'
    var compras = document.getElementById ('compras')
    compras.innerHTML = "Resultados: 1 - 3 (de 31)"
    
}





 