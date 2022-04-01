//Arrays de objetos com as pessoas
const reviews = [{
  id: 1,
  name: "Mark Richards",
  job: "Web Developer",
  img:
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  text:
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, numquam! Hic, blanditiis officiis error repellat aut vel esse nam debitis dolores laboriosam, qui modi laborum pariatur consectetur aspernatur possimus earum?"
},
{
  id: 2,
  name: "Anna Boyle",
  job: "Mobile Developer",
  img:
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos ducimus fugiat eum amet, dicta sequi accusantium tenetur, odio nobis possimus enim. Odio commodi voluptatibus dolorum minima. Incidunt, voluptate voluptatibus?"
},
{
  id: 3,
  name: "Jake Bergman",
  job: "Software Engineer",
  img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aliquid necessitatibus error laborum mollitia, odio voluptatibus harum quaerat, ipsa dignissimos deserunt vel magni accusamus corrupti iusto quidem quos fugit fuga!" 
},
{
  id: 4,
  name: "Olivia Esposito",
  job: "Ux Designer",
  img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nisi, architecto magnam possimus laudantium, maxime et enim dolores quas veritatis mollitia dignissimos necessitatibus molestiae sed ipsa unde eum ipsum voluptate!"
},
{
  id: 5,
  name: "Sarah Jones",
  job: "Devops",
  img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nisi, architecto magnam possimus laudantium, maxime et enim dolores quas veritatis mollitia dignissimos necessitatibus molestiae sed ipsa unde eum ipsum voluptate!"}
];
////Manipulando DOM - Items
const img = document.querySelector("person-img");
const author = document.querySelector("author");
const job = document.querySelector("job");
const info = document.querySelector("info");
//Manipulando DOM - Botões
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector("random-btn"); 

//Cada elemento do array foi classificado como currentItem que começa pelo 0
let currentItem = 0;

  //A função dará início ao primeiro item apontado - Por padrão será o elemento 0 do array armazenado na variável currentItem 
window.addEventListener("DOMContentLoaded", function(){ //Função callback que retornará outra função (showPerson())
  showPerson();
});
  //Mostrar pessoas baseadas nos itens 
function showPerson(){ //Aqui o currentItem "virou" person
  const item = reviews[currentItem]; //Aqui o currentItem "virou" person
  img.src = item.img; //Trazer a imagem correspondente ao item apontado
  author.textContent = item.name; //Trazer o nome do author correspondente ao item apontado
  job.textContent = item.job;
  info.textContent = item.info;
};
//Mostrar a próxima pessoa
nextBtn.addEventListener('click', function(){
  currentItem++ //Ao clicar no botão next este apontará para o elemento(pessoa) seguinte por conta do incremento
  if(currentItem > reviews.length -1){
    currentItem = 0;
  }
  showPerson(); 
});
//Mostrar a pessoa anterior
prevBtn.addEventListener('click', function(){
  currentItem--; //Ao clicar no botão prev este apontará para o elemento(pessoa) anterior por conta do decremento
  if(currentItem < 0){
    currentItem = reviews.length -1;
  }
  showPerson(); 
});

randomBtn.addEventListener('click', function(){
  Math.random(currentItem) //Ao clicar no botão surprise me este apontará para um elemento(pessoa) aleatório.
  if(currentItem > reviews.length -1){
    currentItem = 0;
  }
  showPerson(); 
});


