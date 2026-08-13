const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('#nav');
menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('#nav>a[href^="#"]')];
function updateActive(){let current='inicio';const y=window.scrollY+130;sections.forEach(s=>{if(s.offsetTop<=y)current=s.id});navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));}
window.addEventListener('scroll',updateActive);updateActive();

const filterBtns=document.querySelectorAll('.filters button');
const projects=document.querySelectorAll('.portfolio-grid article');
filterBtns.forEach(btn=>btn.addEventListener('click',()=>{filterBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;projects.forEach(p=>p.classList.toggle('hidden',f!=='all'&&p.dataset.cat!==f));}));

const form=document.getElementById('contactForm');
form.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formStatus').textContent='Formulario validado correctamente. En la próxima etapa conectaremos el envío real por correo.';form.reset();});

document.getElementById('year').textContent=new Date().getFullYear();
const topBtn=document.getElementById('top');
window.addEventListener('scroll',()=>topBtn.style.display=window.scrollY>450?'block':'none');
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
