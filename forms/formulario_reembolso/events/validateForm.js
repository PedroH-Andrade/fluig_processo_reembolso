function validateForm(form) {

	var activity = getValue("WKNumState");

	//Valida a etapa do processo e se os campos obrigatorios foram preenchidos
	if (activity == 0 || activity == 6) {
		var msg = "";
		if (form.getValue("data_inicial") == "" || form.getValue("data_final") == "") {
			msg += "É necessário preencher as datas, ";
		}
		var qtd_despesas = form.getChildrenIndexes("table_despesa");
		if (qtd_despesas.length == 0) {
			msg += "A solicitação deve conter no minimo uma despesa";
		}
		if (msg != "") {
			throw msg;
		}
	}
	if (activity == 7) {
		if (form.getValue("aut_financ") == "") {
			throw "É necessário selecionar uma opção no campo de validação do formulário";
		}
	}
	if (activity == 8) {
		if (form.getValue("aut_gest") == "") {
			throw "É necessário selecionar uma opção no campo de autorização";
		}
	}
	if (activity == 12) {
		if (form.getValue("data_envio") == "" || form.getValue("data_recebimento") == "" || form.getValue("data_reembolso") == "") {
			throw "É necessário preencher corretamente todas as datas";
		}
	}
}