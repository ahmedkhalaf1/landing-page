let i;
for ( i =1 ;i<=3;i++)
{
    const selectUl = document.querySelector('.navbar__menu ul');
    const createLi = document.createElement('li');
    createLi.className = 'navbar__menu li';
    const selectLi = document.querySelector('.navbar__menu li');
    const createA = document.createElement('a');
    createA.setAttribute('href','#section'+i);
    createA.innerHTML='section'+i; 
    selectUl.appendChild(createLi);
    createLi.appendChild(createA);
};

let addLink;
function addlink()
{
    addLink = prompt("add link please");
    const selectUl2 = document.querySelector('.navbar__menu ul');
    const createLi2 = document.createElement('li');
    createLi2.className = 'navbar__menu ul';
    const selectLi2 = document.querySelector('.navbar__menu li');
    const createA2 = document.createElement('a');
    createA2.setAttribute('href','#section'+i);
    createA2.innerHTML=addLink+i; 
    selectUl2.appendChild(createLi2);
    createLi2.appendChild(createA2);
    i++;
};

function addsection()
{
    let addSection = prompt("Add New Section");
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
    
}





















// let forsections = document.querySelectorAll('section');
// let i;
// for(i=1 ; i<=forsections.length;i++){
//     let forsection = document.querySelector('#section'+i);

   
          

// }





























