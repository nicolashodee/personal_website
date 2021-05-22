
// WORD BLINKING 

$(document).ready(function() {

  var
    words = $('#tagi text'),
    l = words.length,
    current = null,
    delay = 2000;

  function clearBlink(o) {
    var
      ca = o.getAttribute('class').split(' '),
      i = ca.indexOf('blink');

    if (i !== -1) {
      ca.splice(i, 1);
      o.setAttribute('class', ca.join(' '));
    }
  }

  function addBlink(o) {
    var
      ca = o.getAttribute('class').split(' ');
    ca.push('blink');
    o.setAttribute('class', ca.join(' '));
  }

  function wordblink() {

    var e;

    if (current !== null) {
      clearBlink(words.eq(current)[0])
    }

    current = Math.floor(Math.random() * l);
    e = words.eq(current);
    addBlink(e[0]);

    setTimeout(wordblink, delay);
  }

  wordblink();

});


//NEW ACCORDION

function initAcc(elem, option){
  document.addEventListener('click', function (e) {
      if (!e.target.matches(elem+' .a-btn')) return;
      else{
          if(!e.target.parentElement.classList.contains('active')){
              if(option==true){
                  var elementList = document.querySelectorAll(elem+' .a-container');
                  Array.prototype.forEach.call(elementList, function (e) {
                      e.classList.remove('active');
                  });
              }            
              e.target.parentElement.classList.add('active');
          }else{
              e.target.parentElement.classList.remove('active');
          }
      }
  });
}

initAcc('.accordion.v1', true);
initAcc('.accordion.v2', false);

