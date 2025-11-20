// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr0X7FQJ2wieQCnKbhacnSq2avkhBFNS8",
  authDomain: "teste-momento-bc730.firebaseapp.com",
  databaseURL: "https://teste-momento-bc730-default-rtdb.firebaseio.com",
  projectId: "teste-momento-bc730",
  storageBucket: "teste-momento-bc730.firebasestorage.app",
  messagingSenderId: "939120974666",
  appId: "1:939120974666:web:bbef6a774aa815ec07bfb3",
  measurementId: "G-XE8NHLJCZW"
};

//inicia o Firebase
firebase.initializeApp(firebaseConfig);

//referencia o banco de dados
var contactFormDB = firebase.database().ref('FormularioContato');

document.getElementById('FormularioContato').addEventListener("submit", SubmitForm)

function SubmitForm(e){
  e.preventDefault();
  var nome = getElementVal(nome);
  var email = getElementVal(emailid);
  var assunto = getElementVal(assunto);
  var mensagem = getElementVal(mensagem);

  console.log (nome, email, assunto, mensagem);
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}