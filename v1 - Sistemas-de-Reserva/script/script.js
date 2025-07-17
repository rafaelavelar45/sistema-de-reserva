
let nome = document.getElementById('nome')
let cpf = document.getElementById('cpf')
let mesa = document.getElementById('mesa')
let date = document.getElementById('data')
let number = document.getElementById('numero')
let nameerror = document.getElementById('name-error')
let cpferror = document.getElementById('cpf-error')
let nummesaerror = document.getElementById('number-mesa-error')
let dataeeror = document.getElementById('date-error')
let numtelerror = document.getElementById('number-telefone-error')
let info  = []


function guardar(){

     if(info.includes(cpf.value)){
          return false
     }else{
          info.push(cpf.value)
          return true
     }

}

function nameValido(){
     if (nome.value.length == 0){
        nameerror.innerHTML += 'Campo Vazio'
        nome.style.borderColor = 'red'
        nome.style.color = 'red'
        return false
        
     }else{
        nome.style.borderColor = 'green'
        nome.style.color = 'green'
        return  true
     }  
}

function mesaValido(){
     
     if(mesa.value.length ==0){
         nummesaerror.innerHTML = 'Campo Vazio'
         mesa.style.borderColor = 'red'
         mesa.style.color = 'red'
          return false
         
     }else{
        mesa.style.borderColor = 'green'
        mesa.style.color = 'green'
        return true
     }
}

function cpValido(){

     if(cpf.value.length == 0){
        cpferror.innerHTML = 'Campo Vazio'
        cpf.style.borderColor = 'red'
        cpf.style.color = 'red'
        return false
     }
     if(cpf.value.length < 11 || cpf.value.length > 11 ){
        cpferror.innerHTML = 'CPF Invalido'
        cpf.style.borderColor = 'red'
        cpf.style.color = 'red'
        return false
   }else{
        cpf.style.borderColor = 'green'
        cpf.style.color = 'green'
        return true
   }      

}

function dataValido(){
     
     const hoje = new Date()
     hoje.setHours(0,0,0,0) // zerar hora
     const dataEscolhida = new Date(date.value)
     const dataMaxima = new Date(hoje)
     dataMaxima.setDate(hoje.getDate() + 1)
     console.log(dataMaxima)
     if(date.value.length == 0){
         dataeeror.innerHTML = 'Campo Vazio'
         date.style.borderColor = 'red'
         date.style.color = 'red'
         return false
     }
     if(dataEscolhida < hoje){
         dataeeror.innerHTML = 'Data invalida'
         date.style.borderColor = 'red'
         date.style.color = 'red'
         return false
     }
     if(dataEscolhida > dataMaxima){
          dataeeror.innerHTML = 'Escolha somente datas com 1 dia a frente'
          date.style.borderColor = 'red'
          date.style.color = 'red'
          return false
     }else{
         date.style.borderColor = 'green'
         date.style.color = 'green'
         return true
     }
}    

function numValido(){

     if(number.value.length == 0){
        numtelerror.innerHTML = 'Campo Vazio'
        number.style.borderColor = 'red'
        number.style.color = 'red'
        return false
     }
     if(number.value.length < 11 || number.value.length > 11){
        numtelerror.innerHTML = 'Número invalido'
        number.style.borderColor = 'red'
        number.style.color = 'red'
        return false
   }else{
        number.style.borderColor = 'green'
        number.style.color = 'green'
        return true
   }
}
function clicar(){
    
    nameerror.innerHTML = ''
    cpferror.innerHTML = ''
    nummesaerror.innerHTML = ''
    dataeeror.innerHTML = ''
    numtelerror.innerHTML = ''
    let cpfOK = cpValido()
    let dataOK = dataValido()
    let numOk = numValido()
    let mesaOK = mesaValido()
    let nameOK = nameValido()
    
    if(cpfOK && dataOK && numOk && mesaOK && nameOK){
          const sucesso = document.getElementById('sucesso')
          let salvou = guardar()
          if(salvou){
            sucesso.innerHTML = 'Reserva realizada com sucesso!'
            sucesso.style.color = 'white'
            sucesso.style.background = 'rgba(0, 128, 0, 0.7)'
            sucesso.style.border = '2px solid green'
    } else{
            sucesso.innerHTML = 'Reserva já Realizada com este CPF'
            sucesso.style.color = 'white'
            sucesso.style.background = 'rgba(240, 22, 22, 0.473)' // vermelho
            sucesso.style.border = '2px solid red'
          
     }
          sucesso.style.display = 'block'

          setTimeout(() => {
               sucesso.style.display = 'none'
          }, 4000 )}
     }