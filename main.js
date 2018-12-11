$(document).ready(function(){

  // Form validation logic start
  function validateForm( form ){
    var fields = $(form).find('.js-validate');
    var fieldContainer = $(form).find('.form__row');

    for ( var i=0; i<fields.length; i++ ){
      validateField( fields[i] );
    }

    if ( ! $(fieldContainer).hasClass('form__error') ){
      $(form).submit();
    }
  };

  function validateField( field ){
    // error codes
    // null - field is valid
    // 0 - emty field
    // 1 - value too short

    var errorCode = null;

    if ( field.value.length === 0 ){
      errorCode = 0;
    } else if ( field.value.length < 3 ){
      errorCode = 1;
    }

    showErrorMessage(field, errorCode);
  };

  function showErrorMessage( field, errorCode ){
    var errorMessages = [
      'should not be empty',
      'should be at least 3 characters long'
    ];

    var fieldContainer = $(field).closest('.form__row');

    if ( errorCode === null ){
      // reset error message
      fieldContainer.find('.js-error-message').remove();
      fieldContainer.removeClass('form__error');
    } else {
      var message = constructErrorMessage(field, errorMessages[errorCode]);

      if ( fieldContainer.hasClass('form__error') ){
        fieldContainer.find('.js-error-message').text(message);
      } else {
        fieldContainer.addClass('form__error');
        $(field).before('<p class="js-error-message">'+ message +'</p>');
      }
    }
  };

  function constructErrorMessage( field, error ){
    var label = $('label[for="'+field.id+'"]').text();
    var errorMessage = label + " " + error;
    return errorMessage;
  }
  // Form validation logic End

  $('.js-menu-toggle, .js-close-button').click(function(){
    $('body').toggleClass('navigation_open');
  });

  $('.js-submit').click(function(e){
    e.preventDefault();
    var form = this.closest('form');
    validateForm(form);
  });
});
