

function operacionSuma() {

    primerValor = document.getElementById("primerValorOperacionesSimples").value;

    segundoValor = document.getElementById("segundoValorOperacionesSimples").value;

    var url = "http://localhost:8085/suma?n1="+primerValor+"&n2="+segundoValor;
    var resultado = 0;

    $.getJSON(url,
        function(json) {
            console.log(json);
            casillaResultado = document.getElementById("resultadoOperacionesSimples").value = json.resultado;

        }
    );
}

function operacionResta() {

    primerValor = document.getElementById("primerValorOperacionesSimples").value;

    segundoValor = document.getElementById("segundoValorOperacionesSimples").value;

    var url = "http://localhost:8085/resta?n1="+primerValor+"&n2="+segundoValor;
    var resultado = 0;

    $.getJSON(url,
        function(json) {
            console.log(json);
            casillaResultado = document.getElementById("resultadoOperacionesSimples").value = json.resultado;

        }
    );
}

function operacionMultiplicacion() {

    primerValor = document.getElementById("primerValorOperacionesSimples").value;

    segundoValor = document.getElementById("segundoValorOperacionesSimples").value;

    var url = "http://localhost:8085/multiplicacion?n1="+primerValor+"&n2="+segundoValor;
    var resultado = 0;

    $.getJSON(url,
        function(json) {
            console.log(json);
            casillaResultado = document.getElementById("resultadoOperacionesSimples").value = json.resultado;

        }
    );
}

function operacionDivision() {

    primerValor = document.getElementById("primerValorOperacionesSimples").value;

    segundoValor = document.getElementById("segundoValorOperacionesSimples").value;

    var url = "http://localhost:8085/division?n1="+primerValor+"&n2="+segundoValor;
    var resultado = 0;

    $.getJSON(url,
        function(json) {
            console.log(json);
            casillaResultado = document.getElementById("resultadoOperacionesSimples").value = json.resultado;

        }
    );
}


function operacionPotencia() {

    primerValor = document.getElementById("primerValorOperacionesSimples").value;

    segundoValor = document.getElementById("segundoValorOperacionesSimples").value;

    var url = "http://localhost:8085/potencia?n1="+primerValor+"&n2="+segundoValor;
    

    $.getJSON(url,
        function(json) {
            console.log(json);
            casillaResultado = document.getElementById("resultadoOperacionesSimples").value = json.resultado;
    
        }
    );
}


function operacionSin() {

    primerValor = document.getElementById("valorOperacionTrigonometrica").value;


    var url = "http://localhost:8085/sin?n1="+primerValor;
    

    $.getJSON(url,
        function(json) {
            console.log(json);
            casillaResultado = document.getElementById("resultadoTrigonometrica").value = json.resultado;
    
        }
    );
}

function operacionCos() {

    primerValor = document.getElementById("valorOperacionTrigonometrica").value;


    var url = "http://localhost:8085/cos?n1="+primerValor;
    

    $.getJSON(url,
        function(json) {
            console.log(json);
            casillaResultado = document.getElementById("resultadoTrigonometrica").value = json.resultado;
    
        }
    );
}


function operacionTan() {

    primerValor = document.getElementById("valorOperacionTrigonometrica").value;

    var url = "http://localhost:8085/tan?n1="+primerValor;
    

    $.getJSON(url,
        function(json) {
            console.log(json);
            casillaResultado = document.getElementById("resultadoTrigonometrica").value = json.resultado;
    
        }
    );
}



