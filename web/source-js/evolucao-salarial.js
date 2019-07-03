var color      = Chart.helpers.color;
var labelsAnos = [1985,1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002]

var config = {
    type: 'line',
    data: {
        labels: labelsAnos,
        datasets: []
    },
    options: {
        
        title: {
            text: 'Evolução Salarial'
        },
        scales: {
            xAxes: [{

                scaleLabel: {
                    display: true,
                    labelString: 'Ano'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Salário'
                },
               
            }]
        },
    },
};

function addLineInChart(data)
{
    if (!data) return;

    try
    {
        let newColor = getRandomColor();

        let arraySalarios = getArraySalarios(data);
        let arrayAnos     = getArrayYears(data);
    
        let dataChart = arraySalarios.map( (salario, i) => {
            return {x: arrayAnos[i], y: salario};
        });
    
        let newDataset = 
        {
            idDataset: data[0].id,
            label: `${data[0].nome}`,
            borderColor: color(newColor).alpha(0.5).rgbString(),
            backgroundColor: newColor,
            data: dataChart,
            fill: false,
        };
    
        config.data.datasets.push(newDataset);
        window.myLine.update();
    }
    catch(error)
    {
        console.log(error);   
    }
}

function getRandomColor()
{
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
  
    for (var i = 0; i < 6; i++ ) 
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    
    return cor;
}

function getArrayYears(employee)
{
    try
    {
        let employeeReverse = employee.reverse();
        let anos = employeeReverse.map(e => parseInt(e.data_inicial_salario.split('-')[0]));

        return anos;

    }catch(error){
        console.log(error);
        return [];
    }
}

function getArraySalarios(employee)
{
    return employee.map(s => s.salario);
}

function removeDataset(idDataset)
{
    let arrayDatasets = config.data.datasets;

    if (!!arrayDatasets && arrayDatasets.length > 0)
    {
        config.data.datasets = arrayDatasets.filter(d => d.idDataset != idDataset);
        window.myLine.update();
    }
}

$(function()
{
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
});