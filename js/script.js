// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

//textwriter
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 120 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
// progress projects
$(".skill-per").each(function () {
  var $this = $(this);
  var per = $this.attr("per");
  $this.css("width", per + "%");
  $({ animatedValue: 3 }).animate(
    { animatedValue: per },
    {
      duration: 9000,
      step: function () {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
      complete: function () {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      }
    }
  );
});

//scroll
// var bgColor1 = { r: 0, g: 0, b: 0 }//Из какого цвета
// var bgColor2 = { r: 20, g: 150, b: 142 }//В какой цвет

// window.onload = function () {
//   window.dispatchEvent(new Event("scroll"));
// }
// window.addEventListener("scroll", function () {
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
//   var scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//   ) - innerHeight;//Получаем высоту видимой части окна
//   var percent = scrollTop / scrollHeight;
//   var color = { r: 0, g: 0, b: 0 };
//   var tmp = Math.abs(bgColor1.g - bgColor2.g) * percent;
//   color.r = Math.ceil(bgColor1.r > bgColor2.r ? bgColor1.r - tmp : bgColor1.r + tmp);
//   document.getElementById("menu").style.background = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
// });
window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('menu').style.backgroundColor = scrolled == 0 ? "transparent" : "black";
}

// mousemove cards

let moves = document.getElementById('moves')
moves.addEventListener('mousemove', mouseMove)

function mouseMove() {
  let img = document.getElementById('move')
  if (img.style.visibility = 'visible') {
    img.style.visibility = 'hidden'
  }
  else {
    img.style.visibility = 'visible'
  }
}

// checkbox dark mode 

const button = document.querySelector('#checkbox')
const body = document.body

let i = document.querySelector('.fa-caret-down')
const about = document.querySelector('.about')
const border = document.querySelector('.border')
const projects = document.querySelector('.projects')
const skills = document.querySelector('.skills')
let project = document.querySelector('.project')
let project_text = document.querySelector('.project-text')
const practicles = document.getElementById('particles-js')
let myBack = background = 'rgb(248, 245, 240)'
function change() {
  if (button.checked) {
    body.classList.add("dark")
    body.style.transition = '1s'
    i.style.color = 'gray'
    about.style.background = 'black'
    about.style.color = 'white'
    border.style.visibility = 'hidden'
    projects.style.background = 'black'
    skills.style.color = 'white'
    project.style.background = 'black'
    project_text.style.color = 'white'
    practicles.style.backgroundImage = "url('img/back.jpg')"
    practicles.style.backgroundSize = 'cover'
    practicles.style.backgroundRepeat = 'no-repeat'
  }
  else {
    body.classList.remove("dark")
    i.style.color = 'white'
    about.style.background = myBack
    about.style.color = 'black'
    border.style.visibility = 'visible'
    projects.style.background = myBack
    skills.style.color = 'black'
    project.style.background = myBack
    project_text.style.color = 'black'
    practicles.style.backgroundImage = "url('img/e5512ace37faa38.jpg')"
  }
}
button.addEventListener('change', change)

// change lang

let arrLang = {
  'en': {
    'zhakshylyk': 'Zhakshylyk',
    'home': 'Home',
    'blog': 'Blog',
    'projecty': 'Projects',
    'contacts': 'Contacts',
    'im': 'I am',
    'clearProg': "A neat programmer is a fast programmer.",
    'aboutMy': 'About Myself',
    'hey': `Hey. I am currently studying to be a programmer and have more than one year of
    experience.
    The goal I’m currently striving for is to make this
    world a better place to live in by starting the changes
    with myself. Sure, I’ve had bad experiences in my
    life too, but this is exactly what made me the way
    I am now: grateful, full of love, with a desire to
    study well because it will help me become a successful
    person in future and have a high quality of life.`
  },
  'ru': {
    'zhakshylyk': 'Жакшылык',
    'home': 'Домой',
    'blog': 'Блог',
    'projecty': 'Проекты',
    'contacts': 'Контакты',
    'im': 'Я',
    'clearProg': '«Аккуратный программист - быстрый программист».',
    'aboutMy': 'Обо мне',
    'hey': `Привет. В настоящее время я учусь на программиста и имею опыт работы более одного года. Цель, к которой я сейчас стремлюсь, - сделать этот мир лучше для жизни, начав изменения с себя. Конечно, в моей жизни тоже был плохой опыт, но именно это сделало меня таким, какой я есть сейчас: благодарным, полным любви, с желанием хорошо учиться, потому что это поможет мне стать успешным человеком в будущем и иметь высокое качество жизни.`
  }
}
$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr('id')
    $('.lang').each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')])
    })
  })
})