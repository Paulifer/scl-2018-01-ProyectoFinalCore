const btnEntrar = document.getElementById('btnEntrar').addEventListener('click', ()=>{
	let mail = email.value;
	let pass = password.value;
	loginAdministracion.classList.remove('divDisplayBlock');
		loginAdministracion.classList.add('divDisplayNone');
		administracion.classList.remove('divDisplayNone');
		administracion.classList.add('divDisplayBlock');
	if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail)) {
		console.log(mail);
		
		alert("Bienvenido");
	}else{
	}
})


