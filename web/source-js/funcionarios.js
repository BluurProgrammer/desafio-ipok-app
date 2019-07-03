var selectFuncionarios;

$(function () 
{
    selectFuncionarios = $("#selectFuncionarios");
    loadEmployeess();
    listenerChangeEmployees();
    
});

function loadEmployeess() 
{
    employees.forEach(f => 
    {
        selectFuncionarios.append($('<option>', 
        {
            value: f.id,
            text: f.nome
        }));

    });

    selectFuncionarios.selectpicker('refresh');
}

function listenerChangeEmployees() 
{
    selectFuncionarios.on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
        try 
        {
            let id = employees[clickedIndex].id;
            if (id < 0) return;

            if (isSelected)
            {
                let data = filterDataEmployeeById(id);
    
                addLineInChart(data);
                loadOcorrencias(data);
            }
            else
            {
                removeDataset(id);
                limpaOcorrencia();
            }
        } catch (error) {
            console.log(error);
        }
    });
}

function filterDataEmployeeById(id) 
{
    return employees.filter(e => e.id == id);
}
