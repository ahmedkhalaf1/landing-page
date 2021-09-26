//Add Default Sections link
let i;
for ( i =1 ;i<=3;i++)
{
  let selectUl = document.querySelector('.navbar__menu ul');
  let createLi = document.createElement('li');
  createLi.className = 'navbar__menu li section'+i;
  let selectLi = document.querySelector('.navbar__menu li');
  let createA = document.createElement('a');
  createA.setAttribute('href','#section'+i);
  createA.innerHTML='section '+i; 
  selectUl.appendChild(createLi);
  createLi.appendChild(createA);
}
//HighLight On Scroll of Current Sections
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar__menu li');
window.addEventListener('scroll',function(){
let current = '';
sections.forEach(function(section){
  let sectionTop = section.offsetTop;
  let sectionHeight = section.clientHeight;
  if(pageYOffset >= sectionTop){
    current = section.getAttribute('id');
    }
  })
navLi.forEach(function(navli){
  navli.classList.remove('active');
  if(navli.classList.contains(current))
  navli.classList.add('active');
  })
})
//Add Function for to add New Sections and new links
function addsection()
{
    //add New Section
    let addSection = prompt("Add New Section","Section "+i);
    let addPrag = prompt("Add new Paragraph");
    const main = document.querySelector('#main1');
    const createSection = document.createElement('section');
    const sectionAtt =  createSection.setAttribute('id',"section"+i);
    createSection.setAttribute ('data-nav',"section "+i);
    const SelectSection = document.querySelector(sectionAtt);
    const createDiv = document.createElement('div');
    createDiv.className = "landing__container";
    const selectDiv = document.querySelector('.landing__container')
    const createH2 = document.createElement('h2');
    createH2.innerHTML = addSection;
    const createP = document.createElement('P');
    createP.innerHTML = addPrag;
    main.appendChild(createSection);
    createSection.appendChild(createDiv);
    createDiv.appendChild(createH2);
    createDiv.appendChild(createP);

    //add New Link
    selectUl = document.querySelector('.navbar__menu ul');
    createLi = document.createElement('li');
    createLi.className = 'navbar__menu li section'+i;
    selectLi = document.querySelector('.navbar__menu li');
    createA = document.createElement('a');
    createA.setAttribute('href','#section'+i);
    createA.innerHTML='section '+i; 
    selectUl.appendChild(createLi);
    createLi.appendChild(createA);
    i++;
    //HighLight On Scroll of New Sections
   const sections = document.querySelectorAll('section');
   const navLi = document.querySelectorAll('.navbar__menu li');
    window.addEventListener('scroll',function(){
    sections.forEach(section=>{
      sectionTop = section.offsetTop;
      sectionHeight = section.clientHeight;
      if(pageYOffset >= sectionTop){
        current = section.getAttribute('id');
        }
      })
    navLi.forEach(navli=>{
      navli.classList.remove('active');
      if(navli.classList.contains(current))
      navli.classList.add('active');
      })
    })
    //Scroll Smooth in New Sections
    const smooths = document.querySelectorAll('a[href^="#"]');
    smooths.forEach(scrolls=>{
    scrolls.addEventListener('click', function(x){
      x.preventDefault();
    const href =   document.querySelector(this.getAttribute('href'));
      href.scrollIntoView({
          behavior : 'smooth'
    });
  });
});
}
//Scroll Smooth in current Sections
const smooths = document.querySelectorAll('a[href^="#"]');
smooths.forEach(scrolls=>{
  scrolls.addEventListener('click', function(x){
    x.preventDefault();
    const href =   document.querySelector(this.getAttribute('href'));
    href.scrollIntoView({
        behavior : 'smooth'
    });
  });
});