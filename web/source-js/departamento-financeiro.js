

function getTotalGastoDepartamentos()
{
    let total = 0;

    employees.forEach(e => {
        total += e.salario;
    });

    return total;
} 

function getTotalGastoPorDepartamento(departamento)
{
    let total = 0;

    employees.forEach(e => 
    {
        if (e.departamento == departamento)
            total += e.salario;
    });

    return total;
}

function getPorcentagensDepartamentos(labelsDepartamentos, totalGastoDepartamentos)
{
    let porcentagensDepartamentos = [];

    labelsDepartamentos.forEach(d => 
        {
            let totalDepartamento = 0;
    
            employees.forEach(e => 
            {
                if (e.departamento == d)
                    totalDepartamento += e.salario;
            });
    
            let porcentual = (totalDepartamento / totalGastoDepartamentos);
    
            porcentagensDepartamentos.push(porcentual);
        });
    
    return porcentagensDepartamentos;
}

$(function()
{
    var ctx = document.getElementById('canvasDepartamentoFinanceiro').getContext('2d');
    let totalGastoDepartamentos = getTotalGastoDepartamentos();

    let labelsDepartamentos       = ['Customer Service', 'Development', 'Finance', 'Human Resources', 'Marketing', 'Production', 'Quality Management', 'Research', 'Sales'];
    let porcentagensDepartamentos = getPorcentagensDepartamentos(labelsDepartamentos, totalGastoDepartamentos);
    let corBarra                  = getRandomColor();

    let barChartData = 
    {
        labels: labelsDepartamentos,
        datasets: [
        {
            label: 'Departamentos',
            backgroundColor: color(corBarra).alpha(0.5).rgbString(),
            borderColor: corBarra,
            borderWidth: 1,
            data: porcentagensDepartamentos
        },]
    };

    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Financeiro'
            }
            ,scales: {
                xAxes: [{
    
                    scaleLabel: {
                        display: true,
                        labelString: 'Valor'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Departamento'
                    },
                    ticks: {
                        min: 0,
                        max: 1,
                        callback: function (value) {
                          return value.toLocaleString('pt-BR', {style:'percent'});
                        },
                    }
                }]
            },
        }
    });
});

