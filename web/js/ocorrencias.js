var divOcorrencias;$(function(){divOcorrencias=$("#divOcorrencias")});function loadOcorrencias(a){divOcorrencias.html("");let b="";b=a.map(a=>`<div class="row">

                    <div class="col-sm-6">

                        <div class="input-group input-group-sm">
                            <span class="input-group-addon">ID</span>
                            <input type="text" class="form-control" value="${a.id}" disabled>
                        </div>
                    </div>

                    <div class="col-sm-6">

                        <div class="input-group input-group-sm">
                            <span class="input-group-addon">Nome</span>
                            <input type="text" class="form-control" value="${a.nome}" disabled>
                        </div>
                    </div>

                </div>
            <br/>
                <div class="row">

                        <div class="col-sm-6">

                            <div class="input-group input-group-sm">
                                <span class="input-group-addon">Sexo</span>
                                <input type="text" class="form-control" value="${"M"==a.sexo?"Masculino":"Feminino"}" disabled>
                            </div>
                        </div>

                        <div class="col-sm-6">

                            <div class="input-group input-group-sm">
                                <span class="input-group-addon">Salário</span>
                                <input type="text" class="form-control" value="${a.salario}" disabled>
                            </div>
                        </div>

                </div>
                <br/>
                <div class="row">

                        <div class="col-sm-6">

                            <div class="input-group input-group-sm">
                                <span class="input-group-addon">Inicio Salário</span>
                                <input type="text" class="form-control" value="${a.data_inicial_salario}" disabled>
                            </div>
                        </div>

                        <div class="col-sm-6">

                            <div class="input-group input-group-sm">
                                <span class="input-group-addon">Fim Salário</span>
                                <input type="text" class="form-control" value="${a.data_fim_salario}" disabled>
                            </div>
                        </div>

                </div><br/>
            `).join(""),divOcorrencias.html(b)}function limpaOcorrencia(){divOcorrencias.html("")}