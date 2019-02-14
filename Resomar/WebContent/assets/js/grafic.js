$(document).ready(function() {

    carregarMes();
    grafico();

    var jan;
    var fev;
    var mar;
    var abr;
    var mai;
    var jun;
    var jul;
    var ago;
    var set;
    var out;
    var nov;
    var dez;

    function carregarMes() {
        $.ajax({
            type: 'POST',
            url: "/TMLConstrucoes/rest/grafico/buscarMeses",
            success: function(retorno) {
                var retorno = JSON.parse(retorno);
                mes = retorno;
                grafico(mes);
            },
            error: function() {
            }
        });
    };

        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"],
                datasets: [{
                    label: 'Gastos Mensais',
                    data: [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez], //Criar uma lista para cada mes e mandar nessa budega
                    backgroundColor: [
                        'rgba(25, 89, 148, 0.82)'
                    ],
                    borderColor: [
                        'rgba(0,0,0,1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
});