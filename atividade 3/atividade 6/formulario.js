function imprimirNome() {
let nome = document.getElementById("nome").ariaValueMax;
let idade = document.getElementById("idade").ariaValueMax;
let departamento = document.getElementById("departamento").ariaValueMax;
let temAcessoRestrito = document.getElementById("departamento").ariaValueMax;


console.log("====== DADOS DO CRACHÁ VIRTUAL ======")
console.log("nome (String):", nome);
console.log("idade (Number):", idade);
console.log("Departamento) (String):", departamento);
console.log("Acesso Retrito (Boolean):", temAcessoRestrito);
console.log("========================");

window.alert(
    "Cadastro finalizado com sucesso!\n\n" +
    "DADOS DO CRACHÁ\n" +
    "Nome: " + nome + "\n" +
    "Idade: " + idade + "\n" +
    "Departamento: " + departamento + "\n" +
  "Acesso Restrito: " + TemAcessoRestrito 
);

}