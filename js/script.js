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
moves.addEventListener('mousedown', mouseMove)

function mouseMove() {
  let img = document.getElementById('move')
  if (img.style.visibility = 'visible') {
    img.style.visibility = 'hidden'
  }
  else{
    img.style.visibility = 'visible'
  }
}