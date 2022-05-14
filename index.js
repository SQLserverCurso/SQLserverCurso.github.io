
"use strict";

const container_img  = document.querySelector(".main-img-container");
const content_container = document.querySelector(".main-content-container");
const content_1 = document.querySelector(".main-content-1");
const content_2 = document.querySelector(".main-content-2");
const content_3 = document.querySelector(".main-content-3");
const cargando_container = document.querySelector(".main-cargando-container");
const main_cargando = document.querySelector(".main-cargando");

container_img.addEventListener("click", ()=>{ container_img.style.animation = "logo-move 1s forwards";
                                              setTimeout(()=>{ content_container.style.display = "flex";
                                                                content_1.style.animationName = "aparecer";
                                                                content_2.style.animationName = "aparecer";
                                                                content_3.style.animationName = "aparecer";
                                                                cargando_container.style.display  = "flex";  },500);

                                              setTimeout(()=>{ cargando_container.style.animation = "cargando 1s forwards"; },1500); });

main_cargando.addEventListener("click", ()=>{ window.location.href = "sobre_nosotros.html"; });