
//modal formulario representante

$(function() {
  
  // Vars
  var modBtn  = $('#modBtn'),
      modal   = $('#modal'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');
  
  // open modal when click on open modal button 
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });
  
  // close modal when click on close button or somewhere out the modal content 
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });
  
});

$(function() {
  
  // Vars
  var modBtn  = $('.modBtn1'),
      modal   = $('#modal'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');
  
  // open modal when click on open modal button 
  
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });
  
  // close modal when click on close button or somewhere out the modal content 
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });
  
});

  // modal de depoimentos
    (function($) {
    
    $.fn.bmdIframe = function( options ) {
        var self = this;
        var settings = $.extend({
            classBtn: '.bmd-modalButton',
            defaultW: 840,
            defaultH: 460
        }, options );

        

        $(settings.classBtn).on('click', function(e) {
          var allowFullscreen = $(this).attr('data-bmdVideoFullscreen') || false;
          
          var dataVideo = {
            'src': $(this).attr('data-bmdSrc'),
            'height': $(this).attr('data-bmdHeight') || settings.defaultH,
            'width': $(this).attr('data-bmdWidth') || settings.defaultW
          };
          
          if ( allowFullscreen ) dataVideo.allowfullscreen = "true";
          
          // stampiamo i nostri dati nell'iframe
          $(self).find("iframe").attr(dataVideo);
        });
      
        // se si chiude la modale resettiamo i dati dell'iframe per impedire ad un video di continuare a riprodursi anche quando la modale è chiusa
        this.on('hidden.bs.modal', function(){
          $(this).find('iframe').html("").attr("src", "");
        });
      
        return this;
    };
  
})(jQuery);


jQuery(document).ready(function(){
  jQuery("#myModal").bmdIframe();
});