//PEGANDO OS ELEMENTOS
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
const header = document.querySelector('header');
const page = document.querySelector('main')
//pegando elementos da Tela Validar informacoes
const nomeValidInfo = document.getElementById('userName');
const emailValidInfo = document.getElementById('userEmail');
const senhaValidInfo = document.getElementById('userSenha');
const mentorValidInfo = document.getElementById('userMentor');
const das1ValidInfo = document.getElementById('das1');
const ate1ValidInfo = document.getElementById('ate1');
const das2ValidInfo = document.getElementById('das2');
const ate2ValidInfo = document.getElementById('ate2');

//OBJETO QUE SERA MONTADO NA FUNCAO SETDADOS(),COM OS DADOS DA DOM
var objForms = {}

const nextpage = () => {
  //CHAMEI AQUI A FUNCAO P PEGA OS VALORES 
  getStorage();
  let header2 = document.getElementById('header2');
  let page2 = document.getElementById('page2');
  header.classList.toggle('ocultar');
  page.classList.toggle('ocultar');
  header2.classList.toggle('ocultar')
  page2.classList.toggle('ocultar')

}
//FUNCAO QUE PEGA OS VALORES DOS INPUTS E SETA NA VARIAVEL (oBJETO)
const setDadosObj = () => {
  objForms.nome = inptNome.value;
  objForms.sobreNome = inptSobreNome.value
  objForms.email = inptEmail.value;
  objForms.senha = inptSenha.value;
  objForms.mentorNome = inptMentorName.value;
  objForms.dataMentoria = inptDataMentoria.value;
  objForms.dataDas = inptDataDas.value;
  objForms.dataAte = inptDataAte.value;
  objForms.segundaDataMentoria = inptSegundaDataMentoria.value;
  objForms.segundaDataDas = inptSegundaDataDas.value;
  objForms.segundaDataAte = inptSegundaDataAte.value;
  setStorage();
  nextpage();
}
const validarCampos = () => {
  //PEGA TODOS OS INPUTS
  let inputs = document.querySelectorAll("input");
  //USADO PARA CONTROLAR QUANTOS CAMPOS FORAM PREENCHIDOS
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

//FUNCAO QUE IRAR SETAR O OBJETO COM TODAS AS INFORMACOES NO LOCALSTORAGE 
const setStorage = ()=>{
  //a funcao JSON..., e so p tranformar obj em String. 
  // mas a forma de setar os valores no LocalStorage e a mesma
  localStorage.setItem("obj",JSON.stringify(objForms));
}

//FUNCAO QUE PEGA O VALOR DO LOCALSTORAGE
const getStorage = ()=>{
  //pega o valor do localstorage (como string)
 let valueReturn = localStorage.getItem("obj");
 //faz a conversao novamente para OBJETO
 let obj = JSON.parse(valueReturn);
 //AQUI VC SETA OS VALORES NOS INPUTS COMO SERIA UM RETORNO DE UMA API...
  nomeValidInfo.innerHTML = obj.nome + ' ' + obj.sobreNome;
  emailValidInfo.innerHTML = obj.email;
  senhaValidInfo.innerHTML = obj.senha;
  mentorValidInfo.innerHTML = obj.mentorNome;
  das1ValidInfo.innerHTML = obj.dataDas;
  ate1ValidInfo.innerHTML = obj.dataAte;
  das2ValidInfo.innerHTML = obj.segundaDataDas;
  ate1ValidInfo.innerHTML = obj.segundaDataAte;
}


//CRIANDO OS EVENTOS
btnSalvar.addEventListener("click", () => {
  validarCampos();
})
