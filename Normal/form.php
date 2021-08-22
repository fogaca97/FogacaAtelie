<?php

    $nome = $_POST['nome'];
    $cep = $_POST['cep']
    $email = $_POST['email']
    $telefone = $_POST['telefone']
    $mensagem = $_POST['mensagem']

    $email_remetente = 'vinicius_fog_medeiros@hotmail.com';

    $email_assunto = "Nova entrada no formulário";

    $email_corpo = "Nome completo: $nome.\n".
                    "CEP: $cep.\n".
                    "Email: $email.\n".
                    "Telefone: $telefone.\n".
                    "Mensagem: $mensagem.\n";

    $para = "contato.fogacaatelie@outlook.com";

    $headers = "De: $email_remetente \r\n";

    $headers = "Responder Para: $email \r\n";

    mail($para,$email_assunto,$email_corpo,$headers);

    header("Location: index.html");

?>