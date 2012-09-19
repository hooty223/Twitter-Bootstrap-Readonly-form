// Twitter Bootstrap Readonly form
// Rob Allison 2012
// Use how you like

(function( $ ){

  $.fn.readOnly = function() {
  	
  	var readOnlyForm = this;

    //Add class for styling
    readOnlyForm.addClass('isReadOnly');

  	//Hide the saveButton(s)
  	$('.readOnlySave').hide();

  	//Show the edit button
  	$('.editReadOnly').show();

  	//Loop through each '.controls'
  	readOnlyForm.find('.controls').each(function(){

  		//Avoid calling $(this) all the time
  		var me = $(this);

  		//Hide everything inside
  		me.children().hide();
  		
      //Declare the value
  		var myVal;

  		//Elements to search for
  		var textInputs = 		   $('[type="text"]',me);
  		var passwordInputs = 	 $('[type="password"]',me);
  		var selects = 			   $('select',me);
  		var checkboxInputs = 	 $('[type="checkbox"]',me);
  		var radioInputs = 		 $('[type="radio"]',me);
  		var textareas = 		   $('textarea',me);

  		//Get the value of the form element
  		if(textInputs.length){
  			myVal = textInputs.val();
  		} else if(passwordInputs.length){
  			myVal = "*******";
  		} else if(selects.length){
  			myVal = selects.find('option:selected').html();
  		} else if(checkboxInputs.length){
  			if(checkboxInputs.is(':checked')){
  				myVal = "<i class='icon-ok'></i>";
  			} else {
  				myVal = "<i class='icon-remove'></i>";
  			}
  		} else if(radioInputs.length){
  			myVal = $('[type="radio"]:checked',me).parent().text();
  		} else if(textareas.length){
  			myVal = textareas.val();
  		}

      //Get rid of whitespace
  		myVal = $.trim(myVal);

      //If the value wasn't found
  		myVal = (myVal ? myVal : "---");

      //Add the text version
  		$(this).append('<span class="readOnlyCont muted">'+myVal+'</span>');

  	});
	
  	//Add click listener to edit buttton(s)
  	readOnlyForm.find('.editReadOnly').click(function(){

  		//Show save button(s)
  		$(this).parents('form').find('.readOnlySave').show();
  		
  		//Hide myself
  		$(this).hide();

      //Remove the read only bits
  		$(this).parents('form').find('.readOnlyCont').remove();

  		//Loop through each '.controls'
  		$(this).parents('form').find('.controls').each(function(){
  			$(this).children().show();
  		});

      //Remove class for styling
      readOnlyForm.removeClass('isReadOnly');

  	});

  };
})( jQuery );