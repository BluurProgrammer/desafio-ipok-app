var divOcorrencias;

$(function()
{
    divOcorrencias = $("#divOcorrencias");

});

function loadOcorrencias(employees)
{
    divOcorrencias.html('');
    let html = '';

    html = employees.map(e => {
        return `<div class="row">

                    <div class="col-sm-6">

                        <div class="input-group input-group-sm">
                            <span class="input-group-addon">ID</span>
                            <input type="text" class="form-control" value="${e.id}" disabled>
                        </div>
                    </div>

                    <div class="col-sm-6">

                        <div class="input-group input-group-sm">
                            <span class="input-group-addon">Nome</span>
                            <input type="text" class="form-control" value="${e.nome}" disabled>
                        </div>
                    </div>

                </div>
            <br/>
                <div class="row">

                        <div class="col-sm-6">

                            <div class="input-group input-group-sm">
                                <span class="input-group-addon">Sexo</span>
                                <input type="text" class="form-control" value="${e.sexo == 'M' ? 'Masculino' : 'Feminino' }" disabled>
                            </div>
                        </div>

                        <div class="col-sm-6">

                            <div class="input-group input-group-sm">
                                <span class="input-group-addon">Salário</span>
                                <input type="text" class="form-control" value="${e.salario}" disabled>
                            </div>
                        </div>

                </div>
                <br/>
                <div class="row">

                        <div class="col-sm-6">

                            <div class="input-group input-group-sm">
                                <span class="input-group-addon">Inicio Salário</span>
                                <input type="text" class="form-control" value="${e.data_inicial_salario}" disabled>
                            </div>
                        </div>

                        <div class="col-sm-6">

                            <div class="input-group input-group-sm">
                                <span class="input-group-addon">Fim Salário</span>
                                <input type="text" class="form-control" value="${e.data_fim_salario}" disabled>
                            </div>
                        </div>

                </div><br/>
            `;

    }).join('');

    divOcorrencias.html(html);
}

function limpaOcorrencia()
{
    divOcorrencias.html('');
}