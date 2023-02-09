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

//OBJETO QUE SERA MONTADO NA FUNCAO SETDADOS(),COM OS DADOS DA DOM
var objForms = {}

//FUNCAO QUE PEGA OS VALORES DOS INPUTS E SETA NA VARIAVEL (oBJETO)
const setDados = ()=>{
  objForms.nome = inptNome.value;
  objForms.sobreNome=inptSobreNome.value
  objForms.email=inptEmail.value;
  objForms.senha=inptSenha.value;
  objForms.mentorNome=inptMentorName.value;
  objForms.dataMentoria=inptDataMentoria.value;
  objForms.dataDas=inptDataDas.value;
  objForms.dataAte=inptDataAte.value;
  objForms.segundaDataMentoria=inptSegundaDataMentoria.value;
  objForms.segundaDataDas=inptSegundaDataDas.value;
  objForms.segundaDataAte=inptSegundaDataAte.value;
}

//CRIANDO OS EVENTOS
btnSalvar.addEventListener("click", () => {
    //CHAMA A FUNCAO
    setDados();
    //SETA O DADO NO LOCALSTORAGE
    //(A FUNCAO RECEBE PRIMEIRO O NOME DA CHAVE Q SERA SALVO O VALOR NO LOCALSTORAGE, SEGUNDO PARAMETRO E O VALOR)
    localStorage.setItem("nome",objForms.nome);
    //PEGA O VALOR SALVO NO LOCAL STORAGE
    let nome = localStorage.getItem("nome");
    console.log(objForms);
})
