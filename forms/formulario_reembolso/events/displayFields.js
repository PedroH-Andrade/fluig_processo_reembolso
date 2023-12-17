function displayFields(form, customHTML) {

    var activity = getValue('WKNumState');

    //Verifica a etapa do processo e desabilita a visualização dos itens necessarios
    if (activity == 0) {
        var userName = fluigAPI.getUserService().getCurrent().getFullName();
        form.setValue("nome_funcionario", userName);

        var filtroagenc = DatasetFactory.createConstraint("nome_func", userName, userName, ConstraintType.MUST);
        var filtro = new Array(filtroagenc);
        var datasetFunc = DatasetFactory.getDataset("dados_func", null, filtro, null);

        var crfunc = datasetFunc.getValue(0, "cr_func");
        form.setValue("cr", crfunc);
        var unfunc = datasetFunc.getValue(0, "un_func");
        form.setValue("un_func", unfunc);
        var agenciafunc = datasetFunc.getValue(0, "agencia");
        form.setValue("agencia", agenciafunc);
        var bancofunc = datasetFunc.getValue(0, "banco");
        form.setValue("banco", bancofunc)
        var contafunc = datasetFunc.getValue(0, "conta");
        form.setValue("conta", contafunc)
        var setorfunc = datasetFunc.getValue(0, "setor");
        form.setValue("setor", setorfunc)
        var cargofunc = datasetFunc.getValue(0, "cargo");
        form.setValue("cargo", cargofunc)
        var gestorfunc = datasetFunc.getValue(0, "nome_gestor");
        form.setValue("nome_gestor", gestorfunc)

        form.setVisibleById('painel_data', false);
        form.setVisibleById('painel_autorizacao', false);
    }
    if (activity == 6) {
        form.setVisibleById('autoriza_financ', false);
        form.setVisibleById('autoriza_gest', false);
        form.setVisibleById('painel_data', false);
    }
    if (activity == 7) {
        form.setVisibleById('autoriza_gest', false);
        form.setVisibleById('painel_data', false);
        form.setVisibleById('btn_add', false);
        form.setHideDeleteButton(true);
    }
    if (activity == 8) {
        form.setVisibleById('autoriza_financ', false);
        form.setVisibleById('painel_data', false);
        form.setVisibleById('btn_add', false);
        form.setHideDeleteButton(true);
    }
    if (activity == 12) {
        form.setVisibleById('btn_add', false);
        form.setHideDeleteButton(true);
    }
    if (activity == 18) {
        form.setVisibleById('dtenvio', false);
        form.setVisibleById('dtrecebimento', false);
        form.setVisibleById('painel_autorizacao', false);
        form.setVisibleById('btn_add', false);
        form.setHideDeleteButton(true);
    }
}