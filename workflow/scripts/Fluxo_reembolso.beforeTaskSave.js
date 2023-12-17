function beforeTaskSave(colleagueId, nextSequenceId, userList) {

	//Verifica se tem arquivo anexado
	var anexos = hAPI.listAttachments();
	var temAnexos = false;

	for (i = 0; i < anexos.size(); i++) {
		var anexoAtual = anexos.get(i);
		if (anexoAtual.getDocumentDescription() != "") {
			temAnexos = true;
		}
	}

	if (!temAnexos) {
		throw ("É necessário anexar os comprovantes.")
	}

	//declarando variaveis auxiliares 
	var activity = getValue("WKNumState");
	var autor = getValue("WKUser");
	var emailaprovacao = "email-aprovacao";
	var emailcancelamento = "email-cancelamento";
	var emailconfirmacao = "email-confirmacao";
	var emailcomprovante = "email-comprovante";
	var num_solicitacao = getValue("WKNumProces");
	var server = "-> INSERIR LINK DO SERVER/FLUIG";
	var linksolicitacao = "https://LINK_DO_SERVER/portal/p/11/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="

	//Dispara e-mail aprovacao
	if (nextSequenceId == 8) {
		try {
			var parametros = new java.util.HashMap();

			parametros.put("SERVER_URL", server);
			parametros.put("LINK", linksolicitacao + num_solicitacao);
			parametros.put("subject", "FLUIG - Autorizar solicitação: " + num_solicitacao);

			parametros.put("FUNCIONARIO", hAPI.getCardValue("nome_funcionario"));
			parametros.put("GESTOR", hAPI.getCardValue("nome_gestor"));
			parametros.put("SOLICITACAO", num_solicitacao);
			parametros.put("VALORTOTAL", hAPI.getCardValue("valor_total"));

			var destinatarios = new java.util.ArrayList();
			destinatarios.add("teste@email.com.br");

			notifier.notify(autor, emailaprovacao, parametros, destinatarios, "text/html");

		}
		catch (e) {
			log.info(e);
		}
	}

	//Dispara e-mail cancelamento
	if (nextSequenceId == 10) {
		try {
			var parametros = new java.util.HashMap();

			parametros.put("SERVER_URL", server);
			parametros.put("subject", "FLUIG - Cancelamento da solicitação: " + num_solicitacao);

			parametros.put("FUNCIONARIO", hAPI.getCardValue("nome_funcionario"));
			parametros.put("SOLICITACAO", num_solicitacao);

			var destinatarios = new java.util.ArrayList();
			destinatarios.add("teste@email.com.br");

			notifier.notify(autor, emailcancelamento, parametros, destinatarios, "text/html");

		}
		catch (e) {
			log.info(e);
		}
	}

	//Dispara e-mail comprovante
	if (nextSequenceId == 12) {
		try {
			var parametros = new java.util.HashMap();

			parametros.put("SERVER_URL", server);
			parametros.put("subject", "FLUIG - Comprovante de autorização da solicitação: " + num_solicitacao);

			parametros.put("FUNCIONARIO", hAPI.getCardValue("nome_funcionario"));
			parametros.put("GESTOR", hAPI.getCardValue("nome_gestor"));
			parametros.put("DATAINICIAL", hAPI.getCardValue("data_inicial"));
			parametros.put("DATAFINAL", hAPI.getCardValue("data_final"));
			parametros.put("VALORTOTAL", hAPI.getCardValue("valor_total"));

			var destinatarios = new java.util.ArrayList();
			destinatarios.add("teste@email.com.br");

			notifier.notify(autor, emailcomprovante, parametros, destinatarios, "text/html");

		}
		catch (e) {
			log.info(e);
		}
	}

	//Dispara e-mail confirmacao
	if (nextSequenceId == 18) {
		try {
			var parametros = new java.util.HashMap();

			parametros.put("SERVER_URL", server);
			parametros.put("LINK", linksolicitacao + num_solicitacao);
			parametros.put("subject", "FLUIG - Confirmação da solicitação: " + num_solicitacao);

			parametros.put("FUNCIONARIO", hAPI.getCardValue("nome_funcionario"));
			parametros.put("SOLICITACAO", num_solicitacao);
			parametros.put("DATAREEMBOLSO", hAPI.getCardValue("data_reembolso"));

			var destinatarios = new java.util.ArrayList();
			destinatarios.add("teste@email.com.br");

			notifier.notify(autor, emailconfirmacao, parametros, destinatarios, "text/html");

		}
		catch (e) {
			log.info(e);
		}
	}
}