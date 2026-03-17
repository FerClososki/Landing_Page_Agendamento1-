const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})
})

sections.forEach(section=>{
observer.observe(section)
})


// FORMULÁRIO WHATSAPP

document.getElementById("form-agendamento").addEventListener("submit",function(e){

e.preventDefault()

let nome = document.getElementById("nome").value
let whats = document.getElementById("whats").value
let servico = document.getElementById("servico").value
let data = document.getElementById("data").value

let mensagem = `Olá! Gostaria de agendar um horário no Espaço Bella Nails.

Nome: ${nome}
WhatsApp: ${whats}
Serviço: ${servico}
Data desejada: ${data}`

let numero = "5541987426394"

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url,"_blank")

})