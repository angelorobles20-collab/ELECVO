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
const formStatus=document.getElementById('formStatus');
if(new URLSearchParams(window.location.search).get('mensaje')==='enviado'){
  formStatus.textContent='Mensaje enviado correctamente. Gracias por contactar a ELECVO.';
  history.replaceState({},document.title,window.location.pathname+'#contacto');
}
if(form){
  form.addEventListener('submit',()=>{
    formStatus.textContent='Enviando mensaje...';
    const btn=form.querySelector('button[type="submit"]');
    if(btn){btn.disabled=true;btn.textContent='ENVIANDO...';}
  });
}

document.getElementById('year').textContent=new Date().getFullYear();
const topBtn=document.getElementById('top');
window.addEventListener('scroll',()=>topBtn.style.display=window.scrollY>450?'block':'none');
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
