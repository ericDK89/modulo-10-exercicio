$(document).ready(function () {
  $("#tel").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      tel: {
        required: true,
        minlength: 11,
      },
      cpf: {
        required: true,
        minlength: 11,
      },
      address: {
        required: true,
      },
      cep: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      name: "Nome obrigatório",
      email: "E-mail obrigatório",
      tel: "Telefone obrigatório",
      cpf: "CPF obrigatório",
      address: "Endereço obrigatório",
      cep: "CEP obrigatório",
    },
  });
});
