
"use strict";

const conjunto1 = document.querySelector(".main-conjunto1");

const change_title = async()=>{  setTimeout(()=>{ conjunto1.style.animation = "conjunto-1 .5s ease-in-out forwards ";  },1000);
                                 setTimeout(()=>{ conjunto1.style.animation = "conjunto-2 .5s ease-in-out forwards ";  },4000);
                                 setTimeout(()=>{ conjunto1.style.animation = "conjunto-3 .5s ease-in-out forwards "; },8000);  }
change_title();
setInterval(()=>{ change_title(); },10000);

// Barra navegacion responsive

const btn_menu_resp = document.querySelector(".nav-menu-resp");
const modal_fondo = document.querySelector(".modal-container");
const modal = document.querySelector(".modal-content-container");
const btn_modal_closed = document.querySelector(".modal-closed");

btn_menu_resp.addEventListener("click", ()=>{ modal_fondo.classList.toggle("modal-container-open");
                                              setTimeout(()=>{ modal.classList.toggle("modal-content-container-open"); },100);  });


btn_modal_closed.addEventListener("click", ()=>{ modal.classList.toggle("modal-content-container-open");
                                                 setTimeout(()=>{ modal_fondo.classList.toggle("modal-container-open"); },300); });

// Codigo barra de navegacion normal- redireccion

const nav_comprar = document.querySelector(".nav-comprar");
const nav_relacionados = document.querySelector(".nav-relacionados");
const nav_contacto = document.querySelector(".nav-contacto");+

nav_comprar.addEventListener("click", e=>{ window.open("https://go.hotmart.com/Y70651479G?ap=d504");  });
nav_relacionados.addEventListener("click", e=>{ window.open("relacionados.html");  });
nav_contacto.addEventListener("click", e=>{ window.open("https://api.whatsapp.com/send?phone=76004869&text=¡Me interesa el Programa de SQL server!");  });


// Codigo barra de navegacion responsive - redireccion
 
 const modal_comprar = document.querySelector(".modal-comprar");
 const modal_relacionados = document.querySelector(".modal-relacionados");
 const modal_contacto = document.querySelector(".modal-contacto");


 modal_comprar.addEventListener("click", ()=>{ window.open("https://go.hotmart.com/Y70651479G?ap=d504"); });
 modal_relacionados.addEventListener("click", ()=>{ window.open("relacionados.html"); });
 modal_contacto.addEventListener("click", ()=>{ window.open("https://api.whatsapp.com/send?phone=76004869&text=¡Me interesa el Programa de SQL server!"); });


// Redireccion de botones intracontenido
const guia_whatsapp = document.querySelector(".guia-whatsapp");
const obtendras_comprar = document.querySelector(".obtendras-comprar");

guia_whatsapp.addEventListener("click",()=>{ window.open("https://api.whatsapp.com/send?phone=76004869&text=¡Me interesa el Programa de SQL server!") });
obtendras_comprar.addEventListener("click",()=>{ window.open("https://go.hotmart.com/Y70651479G?ap=d504"); });


 // Codigo interseccion observer para barras internas de calificaciones

const calif_barra1 = document.querySelector(".calif-interna1");
const calif_barra2 = document.querySelector(".calif-interna2");

const view_barra1 = (entradas)=>{ entradas.forEach(entrada=>{ if(entrada.isIntersecting){ entrada.target.classList.add("interna1"); }
                                                              else entrada.target.classList.remove("interna1");  }); }

const watch_barra1 = new IntersectionObserver(view_barra1);
watch_barra1.observe(calif_barra1);

const view_barra2 = (entradas)=> { entradas.forEach(entrada=>{ if(entrada.isIntersecting){ entrada.target.classList.add("interna2"); }
                                                               else entrada.target.classList.remove("interna2");  }); }

const watch_barra2 = new IntersectionObserver(view_barra2);
watch_barra2.observe(calif_barra2);


// Interserction observer para imagenes entrada izquierda

const imgs_left = document.querySelectorAll(".img-iz");

const view_img_left = (entradas)=>{ entradas.forEach(entrada=>{ if(entrada.isIntersecting){ entrada.target.style.animation = "img_left 1s forwards"; }
                                                                else entrada.target.style.animation = "none"; });  }

const watch_img_left = new IntersectionObserver(view_img_left);

imgs_left.forEach(img=>{  watch_img_left.observe(img); });



// Intersection observer para imagenes entrada derecha

const imgs_right = document.querySelectorAll(".img-dere");


const view_img_right = (entradas)=>{ entradas.forEach(entrada=>{ if(entrada.isIntersecting) { entrada.target.style.animation = "img_dere 1s forwards"; }
                                                                 else entrada.target.style.animation = "none"; });  }  
const watch_img_right = new IntersectionObserver(view_img_right);
imgs_right.forEach( img=>{  watch_img_right.observe(img); });


// Intersection observer para contenido de texto
const content = document.querySelectorAll(".content");

const view_content = (entradas)=>{ entradas.forEach(entrada=>{ if(entrada.isIntersecting){ entrada.target.style.animation = "content .8s forwards"; }
                                                               else entrada.target.style.animation = "none"; }); }

const watch_content = new IntersectionObserver(view_content);
content.forEach(contenido=>{ watch_content.observe(contenido); });