// Smooth scroll with header offset + active link highlight
      (function(){
        const header = document.querySelector('.nav');
        const links = [...document.querySelectorAll('.menu a')];
        const menu = document.getElementById('menu');
        const burger = document.getElementById('burger');

        window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

        function smoothScrollTo(id){
          const el = document.querySelector(id);
          if(!el) return;
          const top = el.getBoundingClientRect().top + window.scrollY - (header.offsetHeight + 12);
          window.scrollTo({top,behavior:'smooth'});
          menu.classList.remove('open');
          burger.setAttribute('aria-expanded','false');
        }

        links.forEach(a=>{
          a.addEventListener('click',e=>{
            e.preventDefault();
            smoothScrollTo(a.getAttribute('href'));
          })
        });

        // Active link on scroll
        const sections = ['#home','#tools','#projects','#snippets','#testimonials'].map(s=>document.querySelector(s));
        const io = new IntersectionObserver((entries)=>{
          entries.forEach(entry=>{
            if(entry.isIntersecting){
              links.forEach(l=>l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
            }
          });
        },{rootMargin:'-60% 0px -35% 0px',threshold:0});
        sections.forEach(sec=>io.observe(sec));

        // Mobile menu
        const toggle = ()=>{ menu.classList.toggle('open'); burger.setAttribute('aria-expanded',menu.classList.contains('open')); }
        burger.addEventListener('click',toggle);
        burger.addEventListener('keydown',e=>{ if(e.key==='Enter' || e.key===' ') toggle(); });

        // Reveal on scroll
        const revealEls = document.querySelectorAll('.reveal');
        const revIo = new IntersectionObserver((ents)=>{
          ents.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('show'); revIo.unobserve(en.target); }});
        },{threshold:.2});
        revealEls.forEach(el=>revIo.observe(el));

        // Project filters
        const filterButtons = document.querySelectorAll('.chip');
        const items = document.querySelectorAll('#projectGrid .card');
        filterButtons.forEach(btn=>{
          btn.addEventListener('click', ()=>{
            filterButtons.forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            const val = btn.dataset.filter;
            items.forEach(card=>{
              const ok = val==='all' || card.dataset.cat.includes(val);
              card.style.display = ok ? '' : 'none';
              if(ok){ card.classList.add('show'); }
            });
          });
        });

        // Testimonials slider (auto + dots)
        const slides = document.getElementById('slides');
        const dotsWrap = document.getElementById('dots');
        const total = slides.children.length;
        let i = 0, timer;
        function buildDots(){
          for(let d=0; d<total; d++){
            const dot = document.createElement('button');
            dot.className = 'dot' + (d===0?' active':'');
            dot.setAttribute('aria-label','Pergi ke slide ' + (d+1));
            dot.addEventListener('click',()=>go(d));
            dotsWrap.appendChild(dot);
          }
        }
        function go(idx){
          i = (idx+total)%total;
          slides.style.transform = `translateX(-${i*100}%)`;
          [...dotsWrap.children].forEach((d,k)=>d.classList.toggle('active',k===i));
          restart();
        }
        function next(){ go(i+1) }
        function restart(){ clearInterval(timer); timer = setInterval(next, 4500); }
        buildDots(); restart();

        // Pause on hover
        slides.addEventListener('mouseenter',()=>clearInterval(timer));
        slides.addEventListener('mouseleave',restart);

        // Basic swipe on touch
        let sx=0;
        slides.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
        slides.addEventListener('touchend',e=>{
          const dx = e.changedTouches[0].clientX - sx;
          if(Math.abs(dx) > 50){ go(i + (dx<0?1:-1)); }
        });
      })();