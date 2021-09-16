let date=new Date();
let datef= date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

let idade=30

let Data_Evento="20/9/2021";
let Palestrantes=3;
let Convidados=97;
let Participantes=Palestrantes+Convidados;

if(Data_Evento>=datef){
   console.log("Permitir Evento");
   }else{
    console.log("Evento não permitido,data invalida");
   }
if(idade>=18){
    console.log("Cadastro permitido!");
    }else{
    console.log("Cadastro não permitido para menores de 18 anos!");
    }
if(Participantes<=100){
        console.log("Cadastro Permitido!");
    }else{
        console.log("Cadastro não permitido: Limite de participantes excedido!");
    }

  