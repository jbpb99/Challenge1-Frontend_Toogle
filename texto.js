'use strict'
const toggle = document.getElementById("toggle")
const basico = document.getElementById("precio_basico")
const pro = document.getElementById("precio_pro")
const master = document.getElementById("precio_master")

toggle.addEventListener('click', () => 
{
  if (toggle.checked) 
  {
    basico.innerText = "19.99";
    pro.innerText = "24.99";
    master.innerText = "39.99";
  } else 
  {
    basico.innerText = "199.99";
    pro.innerText = "249.99";
    master.innerText = "399.99";
  }
})