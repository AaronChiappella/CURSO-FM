

const form = document.getElementById('formLogin');

console.log('Hola Login');

const login = () => {
    //alert('Bienvenido Admin')

    
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;


    console.log(user);
    console.log(password);

    let usuario = 'pepe@gmail.com';
    let pass = '123456'

    if(user == '' || password == ''){
        alert('Introduzca los datos solicitados')
        location.href = 'formulario.html';
    }

    if(user == usuario && password == pass){
        location.href = 'admin.html';
        localStorage.setItem('Admin',JSON.stringify(usuario));
    }else{
        location.href = 'error.html';
    }

    form.reset();

};
