//secion para admi REGISTRADO

const btnSingIn = document.getElementById('singIn').addEventListener('click', () => {
  let validarNombre = nombre.value;
  let valiarPassword = password.value;
  if (nombre == true || password == true) {
    firebase.auth().signInWithEmailAndPassword(validarNombre, valiarPassword)
      .then(() => {
        console.log("usuarioExistente");
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    alert("correcto");
  } else {
    alert("incorrecto");
  }
  console.log(validarNombre );
  console.log(valiarPassword);
})

//REGISTRO PARA ALGUN ADMI
const btnIniciar = document.getElementById('crear').addEventListener('click', () => {

  let nombreRegistry = nombre.value;
  let passwordRegistry = password.value;
  console.log(nombreRegistry);
  console.log(passwordRegistry);
  firebase.auth().createUserWithEmailAndPassword(nombreRegistry, passwordRegistry)
    .then(() => {
    })
    .catch((error) => {
      login.classList.add('divDisplayBlock');
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });

})