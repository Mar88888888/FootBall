let body = document.body;

let favTeam = document.getElementById('favourite-team');
function userDialogue(){
  while(true){
    let club = prompt('Enter your favourite team');
    let confirmed = confirm(`Is your favourite team ${club}?`);
    if(confirmed && club){
      alert(`Nice choice, ${club} fan)`);
      favTeam.textContent = 'Команда: ' + club;
      break;
    }
  }
}

function showDeveloperInfo(name, surname, position = 'Web-dev'){
  alert(`Розробник сайту: \nІм'я: ${name} \nПрізвище: ${surname} \nПосада: ${position}`);
}

let compareStrings = (str1, str2) => str1 > str2 ? str1 : str2;
let compareStringsBtn = document.querySelector('#comparison-btn');
compareStringsBtn.addEventListener('click', () => {
  let str1 = prompt('Перший рядок:');
  let str2 = prompt('Другий рядок:');
  alert(compareStrings(str1, str2));
})


function changeBgcolor(color){
  body.style.backgroundColor = color;
  
  setTimeout(() => {
      body.style.backgroundColor = "";
  }, 30000);
};

changeBgcolor('darkgreen');

let redirectBtn = document.querySelector('#redirect-btn');
redirectBtn.addEventListener('click', () => {
  location.href = "https://www.uefa.com/";
});


let btns = [...document.querySelectorAll('.btn')];
let colorChangeBtn = document.querySelector('#color-btn');
randColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

colorChangeBtn.addEventListener('click', () => {
  let color = randColor();
  btns.forEach(btn => {
    btn.style.backgroundColor = color;
  })
});

let addNewsBtn = document.querySelector('#add-news-btn');
let newsDiv = document.querySelector('#news-div');
addNewsBtn.addEventListener('click', () => {
  let title = prompt('Введіть заголовок новини');
  let paragraph = prompt('Введіть текст новини');
  let newsItem = document.createElement('div');
  newsItem.classList.add('news-item');
  newsItem.innerHTML = `<h3 id="news-item3">${title}</h3>
        <p>
        ${paragraph}
        </p>`;
  newsDiv.innerHTML += newsItem.outerHTML;

});

let addPlayerBtn = document.querySelector('#add-player-btn');
let favPlayer = document.getElementById('favourite-player');

addPlayerBtn.addEventListener('click', () => {
  let favPlayer = document.getElementById('favourite-player');
  let player = prompt('Введіть ім\'я гравця');
  favPlayer.append(' Гравець: ' + player);
})

let favNational = document.querySelector('#favourite-national');
let addNationalBtn = document.querySelector('#add-national-btn');
addNationalBtn.addEventListener('click', () => {
  let team = prompt('Введіть збірну');
  let node = document.createTextNode(`${team}`);
  let span = document.createElement('span');
  span.style.color = 'white';
  let confirmed = confirm('Підтверджуєте вибір ' + node.nodeValue + '?');
  if(confirmed && team){
    span.innerHTML = ' ' + node.data;
    favNational.after(span);

  }
})

let tournamentBtn = document.getElementById('add-tournament-btn');
tournamentBtn.addEventListener('click', () => {
  let tournament =  prompt('Введіть назву турніру');
  let tournamentDiv = document.createElement('div');
  tournamentDiv.classList.add('fav-tourn');
  
  if(tournament){
    tournamentDiv.textContent = `Турнір: ${tournament}`;
    favPlayer.prepend(tournamentDiv)
    
  }
})

let playerChangeBtn = document.getElementById('change-player-btn');
playerChangeBtn.addEventListener('click', ()=>{
  let player = prompt('Введіть ім\'я гравця (Він буде встановлений єдиним у переліку)');
  if(player){
    let playerDiv = document.createElement('div');
    playerDiv.id = 'favourite-player';
    playerDiv.textContent = `Гравець: ${player}`
    favPlayer.replaceWith(playerDiv);
  }
})


let delNewsBtn = document.querySelector('#delete-news-btn');
delNewsBtn.addEventListener('click', ()=> {
  let newsItem = document.querySelector('.news-item');
  let confirmed = confirm('Хочете видалити першу новину?');
  if(confirmed){
    newsItem.remove();
  }
})