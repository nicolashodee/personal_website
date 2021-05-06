custom js

// the below code is only for adding the flag image
function x3_load(){
  // get the lang anchor link
  var menu_lang = $('li.menu-lang > a'),
    // get current url
    location = window.location.href.split('?')[0],
    // set flag code ('bg' or 'en') opposite language of current url
    flag = location.indexOf('/en') > -1 ? 'fr' : 'en';
  // prepend the img
  menu_lang.prepend('<img src="/' + flag + '.png" />');
}

// This function is only if you want the language link to dynamically mirror current page
function x3_load_page(){
  
  //keep tabs fresh
  $('.tabsfresh').on('toggled', function (event, tab) {
    $(window).resize();
  });
  
  
  // dynamic language link
  setTimeout(function(){
    var menu_lang = $('li.menu-lang > a'),
        location = window.location.href.split('?')[0];
    if(location.indexOf('/en') > -1){
      // if language is secondary (en), create the link from current link, without '/en'
      menu_lang.attr('href', location.replace('/en', ''));
    } else {
      // if language is primary (fr), append /en
      menu_lang.attr('href', location.replace('.com', '.com/en'));
    }
  }, 500);
  
}
