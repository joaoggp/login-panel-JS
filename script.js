let user = ['Henrique', 'Lucas', 'joao']
let pass = [1234, 2032, 3295]

const coletaUser = document.getElementById('user-input')
const coletaPass = document.getElementById('user-password')

let toastSucess = () => {
    return {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "500",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}

let toastError = () => {
    return {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "500",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}

function userNameTest(valor) {
    return /^[A-Za-z\s]+$/.test(valor);
}

function checkPass(passLeng) {
    return passLeng > 8
}

let redirectValid = () =>{
    window.location.replace("https://google.com");
}


function validar() {

    //Verifica se o usuário e senha são válidos
    for (let counter = 0; counter < user.length; counter++) {
        if (coletaUser.value == '' || coletaPass.value == '') {
            toastr.option = Object.assign({}, toastError)
            toastr["error"]("Não é possível deixar nenhum campo vázio!")
            return
        }
        else if (coletaUser.value == user[counter]) {
            if (coletaPass.value == pass[counter]) {
                toastr.option = Object.assign({}, toastSucess)
                toastr["success"](`Logado no Sistema com o usuário: ${coletaUser.value}`)
                redirectValid()
                return
            }
            else {
                toastr.option = Object.assign({}, toastError)
                toastr["error"]("Senha Incorreta!")
                return
            }
        }
    }
    toastr.option = Object.assign({}, toastError)
    toastr["error"]("Usuário não encontrado!")
    return
}

let cadastro = () => {
    let nav = 0
    if (coletaUser.value == '' || coletaPass.value == '') {
        toastr.option = Object.assign({}, toastError)
        toastr["error"]("Não é possível deixar nenhum campo vázio!")
        return
    }
    else {
        for (let x = 0; x < user.length; x++) {
            if (coletaUser.value == user[x]) {
                toastr.option = Object.assign({}, toastError)
                toastr["error"]("Usuário já cadastrado")
                return
            }
        }
        if (!userNameTest(coletaUser.value)) {
            toastr.option = Object.assign({}, toastError)
            toastr["error"]("Não pode conter números no nome!")
            return
        } else if (!checkPass(coletaPass.value.length)) {
            toastr.option = Object.assign({}, toastError)
            toastr["error"]("Sua senha é muito curta!")
            return
        }

        user.push(coletaUser.value);
        pass.push(coletaPass.value);
        toastr.option = Object.assign({}, toastSucess)
        toastr["success"](`Usuário ${coletaUser.value} cadastrado com sucesso!`)
    }
}

document.getElementById('cadastrar-btn').addEventListener('click', cadastro)
document.getElementById('submit-btn').addEventListener('click', validar)

let userName = document.getElementById('user-input')

userName.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        validar()
    }
})

let userPass = document.getElementById('user-password')

userPass.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        validar()
    }
})