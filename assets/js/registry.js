// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Agregar visitante
function guardar() {
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let d = new Date();
  let time = d.getHours() + ":" + d.getMinutes();
  let date = d.getDate() + "." + d.getMonth() + "." + d.getFullYear();
  let mail = document.getElementById('email').value;
  let ocupacion = document.getElementById('ocupacion').value;
  let destino = document.getElementById('destino').value;
  let rut = document.getElementById('rut').value;
  let patente = document.getElementById('patente').value;


  db.collection("visitors").add({
    email: mail,
    first: nombre,
    last: apellido,
    date: date,
    time: time,
    rut: rut,
    ocupacion: ocupacion,
    patente: patente,
    destino: destino
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('rut').value = '';
      document.getElementById('email').value = '';
      document.getElementById('ocupacion').value = '';
      // document.getElementById('destino').value = '';
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

// Imprimir visitantes
const tabla = document.getElementById('tabla');

db.collection("visitors").onSnapshot((querySnapshot) => {
  tabla.innerHTML = '';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tabla.innerHTML += `
      <tr>
            <th scope="row">${doc.data().time}</th>
            <td>${doc.data().first}</td>
            <td>${doc.data().last}</td>
            <td>${doc.data().destino}</td>
          </tr>`

    });
});