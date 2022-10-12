let toggle = document.querySelector('.toggle-checkbox');
toggle.addEventListener('change', ()=>{
  let element = document.body;
  element.classList.toggle("light__mode");
});
