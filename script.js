const $=(s,c=document)=>[...c.querySelectorAll(s)],rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const pg=$('.progress')[0],hd=$('body>header')[0];
addEventListener('scroll',()=>{pg.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+'%';hd.classList.toggle('sc',scrollY>30)},{passive:true});
$('.sh,h2:not(.sh h2),.card,.col,.calc,.faq details,.tl li,.split img,.vs,form,.flow').forEach((e,i)=>{e.classList.add('rv');e.style.setProperty('--d',(i%3)*.1+'s')});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});$('.rv').forEach(e=>io.observe(e));
$('.card').forEach(c=>c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));
const st=$('.stage')[0];if(st&&!rm)st.addEventListener('mousemove',e=>{const r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5,o=$('.ob')[0];o.style.setProperty('--ry',-9+x*14+'deg');o.style.setProperty('--rx',3-y*10+'deg')});
// steps
const S=[['Guided documents','Passport, overseas address proof and a photo.','Checks everything is complete and guides apostille and courier.','An attestation and courier partner handles the paperwork.'],
['PAN, done right','Confirm your details and e-sign.','Pre-fills Form 95 so fewer applications are rejected.','The Income Tax Department issues your PAN. The fee is paid in India.'],
['Indian bank account','Review the pre-filled application.','Prepares the application for one partner bank.','An Authorised Dealer bank opens and holds the account.'],
['Broker account','Consent to share your KYC.','Sends your KYC data to the broker through an API.','A SEBI-registered broker approves KYC and opens your demat account.'],
['Invest and file','Place and confirm every order yourself.','Order builder, portfolio view, and India and US tax reports.','The broker executes on NSE/BSE. A depository holds your shares. A transfer partner moves the money.']];
const sl=$('.sl')[0],pn=$('.pn')[0];let cur=0,auto;
S.forEach((s,i)=>{const b=document.createElement('button');b.innerHTML=`<b>${i+1}</b>${s[0]}`;b.setAttribute('role','tab');b.onclick=()=>{clearInterval(auto);set(i)};sl.append(b)});
const set=i=>{cur=i;$('button',sl).forEach((b,j)=>b.setAttribute('aria-selected',j==i));const s=S[i];pn.innerHTML=`<h3>${s[0]}</h3><div class="r"><small>You</small><p>${s[1]}</p></div><div class="r"><small>G-Stocks</small><p>${s[2]}</p></div><div class="r"><small>Partner</small><p>${s[3]}</p></div>`;pn.classList.remove('sw');void pn.offsetWidth;pn.classList.add('sw')};
set(0);if(!rm)auto=setInterval(()=>set((cur+1)%S.length),5000);
// calculator
const r=$('#amt')[0],u=n=>'$'+Math.round(n).toLocaleString('en-US');
const calc=()=>{const x=+r.value,d=250+.025*x,g=229+.0075*x;$('#av')[0].textContent=u(x);$('#o1')[0].textContent=u(d);$('#o2')[0].textContent=u(g);$('#o3')[0].textContent=u(Math.max(d-g,0))};r.oninput=calc;calc();
