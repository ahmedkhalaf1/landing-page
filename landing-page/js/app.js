let i=1;
let selectUl = document.querySelector('.navbar__menu ul');
let createLi = document.createElement('li');
createLi.className = 'navbar__menu li';
let selectLi = document.querySelector('.navbar__menu li');
let createA = document.createElement('a');
createA.className = 'section active';
createA.setAttribute('href','#section'+i);
createA.innerHTML='section'+i; 
selectUl.appendChild(createLi);
createLi.appendChild(createA);
for ( i =2 ;i<=3;i++)
{
    let selectUl = document.querySelector('.navbar__menu ul');
    let createLi = document.createElement('li');
    createLi.className = 'navbar__menu li';
    let selectLi = document.querySelector('.navbar__menu li');
    let createA = document.createElement('a');
    createA.setAttribute('onclick','ActivLink()');
    createA.className = 'section';
    createA.setAttribute('href','#section'+i);
    createA.innerHTML='section'+i; 
    selectUl.appendChild(createLi);
    createLi.appendChild(createA);
};
function addsection()
{
    //add New Section
    let addSection = prompt("Add New Section","Section "+i);
    let addPrag = prompt("Add new Paragraph");
    const main = document.querySelector('#main1');
    const createSection = document.createElement('section');
    const t =  createSection.setAttribute('id',"section"+i);
    createSection.setAttribute ('data-nav',"section "+i);
    const SelectSection = document.querySelector(t);
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
    createLi.className = 'navbar__menu li';
    selectLi = document.querySelector('.navbar__menu li');
    createA = document.createElement('a');
    createA.setAttribute('onclick','ActivLink()');
    createA.className ='section';
    createA.setAttribute('href','#section'+i);
    createA.innerHTML='section '+i; 
    selectUl.appendChild(createLi);
    createLi.appendChild(createA);
    i++;
};
function ActivLink(){
let ul = document.getElementById("navbar__menu ul");
let sectionsLinks = ul.getElementsByClassName("section");
for (let f = 0; f < sectionsLinks.length; f++) {
    sectionsLinks[f].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
    })

  }
}
