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

//OBJETO QUE SERA MONTADO NA FUNCAO SETDADOS(),COM OS DADOS DA DOM
var objForms = {}

//FUNCAO QUE PEGA OS VALORES DOS INPUTS E SETA NA VARIAVEL (oBJETO)

const nextpage = () =>{
  let header2 = document.getElementById('header2');
  let page2 = document.getElementById('page2');
    header.classList.toggle('ocultar');
    page.classList.toggle('ocultar');
    header2.classList.toggle('ocultar')
    page2.classList.toggle('ocultar')

}

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

  nextpage()
}

//CRIANDO OS EVENTOS
btnSalvar.addEventListener("click", () => {
    setDados();

    localStorage.setItem("nome",objForms.nome);

    let nome = localStorage.getItem("nome");
    console.log(objForms);
})
