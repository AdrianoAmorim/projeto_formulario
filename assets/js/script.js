//PEGANDO OS ELEMENTOS TELA CADASTRO
const inptNome = document.getElementById("nome");
const inptSobreNome = document.getElementById("sobreNome");
const inptEmail = document.getElementById("email");
const inptSenha = document.getElementById("senha");
const inptMentorName = document.getElementById("mentorName");
const inptDataMentoria = document.getElementById("primeiraDataMentoria");
const inptDataDas = document.getElementById("primeiraDataDas");
const inptDataAte = document.getElementById("primeiraDataAte");
const inptSegundaDataMentoria = document.getElementById("segundaDataMentoria");
const inptSegundaDataDas = document.getElementById("segundaDataDas");
const inptSegundaDataAte = document.getElementById("segundaDataAte");
const btnSalvar = document.getElementById("btnSalvar");
//PEGA AS "PAGINAS" PARA A TROCA DE TELA
const pgCad =document.getElementById('boxPgCadastro');
const pgConfirm = document.getElementById('boxPgConfirm');
//PEGANDO OS ELEMENTOS DA TELA DE CONFIRMACAO
const nomeConfirm = document.getElementById('userName');
const emailConfirm = document.getElementById('userEmail');
const senhaConfirm = document.getElementById('userSenha');
const mentorConfirm = document.getElementById('userMentor');
const das1Confirm = document.getElementById('das1');
const ate1Confirm = document.getElementById('ate1');
const das2Confirm = document.getElementById('das2');
const ate2Confirm = document.getElementById('ate2');
const btnConfirm = document.getElementById('btnConfirm');


//OBJETO QUE SERA MONTADO NA FUNCAO SETDADOS(),COM OS DADOS DA DOM
var objForm = {}

const nextpage = () => {
  //CHAMEI AQUI A FUNCAO P PEGA OS VALORES 
  getStorage();
  pgConfirm.classList.toggle('ocultar');
  pgCad.classList.toggle('ocultar');

}
//FUNCAO QUE PEGA OS VALORES DOS INPUTS E SETA NA VARIAVEL (oBJETO)
const setDadosObj = () => {
  objForm.nome = inptNome.value;
  objForm.sobreNome = inptSobreNome.value
  objForm.email = inptEmail.value;
  objForm.senha = inptSenha.value;
  objForm.mentorNome = inptMentorName.value;
  objForm.dataMentoria = inptDataMentoria.value;
  objForm.dataDas = inptDataDas.value;
  objForm.dataAte = inptDataAte.value;
  objForm.segundaDataMentoria = inptSegundaDataMentoria.value;
  objForm.segundaDataDas = inptSegundaDataDas.value;
  objForm.segundaDataAte = inptSegundaDataAte.value;
  setStorage();
  nextpage();
}
const validarCampos = () => {
  //PEGA TODOS OS INPUTS
  let inputs = document.querySelectorAll("input");
  let countInpt = 0;
  //PERCORRE O ARRAY COM TODOS OS INPUTS
  //O FOREACH ELE RECEBE COMO PARAMETRO UM ITEM DE CADA VEZ DO ARRAY.. 
  //A CADA ITERACAO DO FOREACH ELE USA UM ITEM DO ARRAY...
  inputs.forEach(item => {
    //TESTA SE O TAMANHO DO QUE TEM NO INPUT É MAIOR  Q 0 (SE ELE ESTA VAZIO)
    if (item.value.length > 0) {
      countInpt++;
    }

  });
  //AQUI TESTA SE OS 11 CAMPOS ESTAO PREENCHIDOS, SE ESTIVER SET OS DADOS, SE NAO MANDA O ALERT 
  if(countInpt == 11){
    setDadosObj();
  }else{
    alert("Porfavor, Preencha todos os Campos!- ;)");
  }
 
}

//FUNCAO QUE IRA SETAR O OBJETO COM TODAS AS INFORMACOES NO LOCALSTORAGE 
const setStorage = ()=>{
  //a funcao JSON..., e so p tranformar obj em String. 
  // mas a forma de setar os valores no LocalStorage e a mesma
  sessionStorage.setItem("obj",JSON.stringify(objForm));
}

//FUNCAO QUE PEGA O VALOR DO LOCALSTORAGE
const getStorage = ()=>{
  //pega o valor do localstorage (como string)
 let valueReturn = sessionStorage.getItem("obj");
 //faz a conversao novamente para OBJETO
 let obj = JSON.parse(valueReturn);
 
  nomeConfirm.innerHTML = obj.nome + ' ' + obj.sobreNome;
  emailConfirm.innerHTML = obj.email;
  senhaConfirm.innerHTML = obj.senha;
  mentorConfirm.innerHTML = obj.mentorNome;
  das1Confirm.innerHTML = obj.dataDas;
  ate1Confirm.innerHTML = obj.dataAte;
  das2Confirm.innerHTML = obj.segundaDataDas;
  ate2Confirm.innerHTML = obj.segundaDataAte;
}


//CRIANDO OS EVENTOS
btnSalvar.addEventListener("click", () => {
  validarCampos();
})
btnConfirm.addEventListener("click",()=>{
  window.location.href = "assets/html/agradecimento.html"
})
