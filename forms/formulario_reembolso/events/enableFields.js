function enableFields(form) {

	function desabilitarTabela() {
		var indexes = form.getChildrenIndexes("table_despesa");
		for (var i = 0; i < indexes.length; i++) {
			form.setEnabled("valor_despesa___" + indexes[i], false);
			form.setEnabled("tipo_despesa___" + indexes[i], false);
		}
	}

	var activity = getValue("WKNumState");

	//Verifica a etapa do processo e desabilita a visualização dos campos necessarios
	if (activity == 6) {
		form.setEnabled("aut_financ", false);
		form.setEnabled("motivo", false);
	}
	if (activity == 7) {
		form.setEnabled("nome_funcionario", false);
		form.setEnabled("cr_func", false);
		form.setEnabled("un_func", false);
		form.setEnabled("banco", false);
		form.setEnabled("agencia", false);
		form.setEnabled("conta", false);
		form.setEnabled("setor", false);
		form.setEnabled("cargo", false);
		form.setEnabled("nome_gestor", false);
		form.setEnabled("data_inicial", false);
		form.setEnabled("data_final", false);
		desabilitarTabela();
	}
	if (activity == 8) {
		form.setEnabled("nome_funcionario", false);
		form.setEnabled("cr_func", false);
		form.setEnabled("un_func", false);
		form.setEnabled("banco", false);
		form.setEnabled("agencia", false);
		form.setEnabled("conta", false);
		form.setEnabled("setor", false);
		form.setEnabled("cargo", false);
		form.setEnabled("nome_gestor", false);
		form.setEnabled("aut_financ", false);
		form.setEnabled("motivo", false);
		form.setEnabled("data_inicial", false);
		form.setEnabled("data_final", false);
		desabilitarTabela();

	}
	if (activity == 12) {
		form.setEnabled("nome_funcionario", false);
		form.setEnabled("cr_func", false);
		form.setEnabled("un_func", false);
		form.setEnabled("banco", false);
		form.setEnabled("agencia", false);
		form.setEnabled("conta", false);
		form.setEnabled("setor", false);
		form.setEnabled("cargo", false);
		form.setEnabled("nome_gestor", false);
		form.setEnabled("aut_financ", false);
		form.setEnabled("motivo", false);
		form.setEnabled("aut_gestor", false);
		form.setEnabled("data_inicial", false);
		form.setEnabled("data_final", false);
		desabilitarTabela();

	}
	if (activity == 18) {
		form.setEnabled("nome_funcionario", false);
		form.setEnabled("cr_func", false);
		form.setEnabled("un_func", false);
		form.setEnabled("banco", false);
		form.setEnabled("agencia", false);
		form.setEnabled("conta", false);
		form.setEnabled("setor", false);
		form.setEnabled("cargo", false);
		form.setEnabled("nome_gestor", false);
		form.setEnabled("aut_financ", false);
		form.setEnabled("motivo", false);
		form.setEnabled("aut_gestor", false);
		form.setEnabled("data_reembolso", false);
		form.setEnabled("data_inicial", false);
		form.setEnabled("data_final", false);
		desabilitarTabela();
	}
}