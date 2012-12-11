var healthRecordsView = {
	defaults : {
		appForms : healthRecordsModel.forms,
		appTitleElement : '.appTitle',
		appTitleText : 'Welcome to En Bloc Dental Clinic',
		formsWrapper : '.formsWrapper',
		formTitleClassName : 'formTitle',
		formFieldsClassName : 'formFieldsWrapper',
		formFieldClassName : 'formFieldWrapper',
		formFieldLabelClassName : 'formFieldLabel',
		formFieldInputClassName : 'formFieldInput',
		formNavigationClassName : 'formNavWrapper',
		formNextButtonClassName : 'formNextButton',
		formPrevButtonClassName : 'formPrevButton',
		formScrollTo : false
	},
	init : function() {
		this.defaults.appTitleElement = $(this.defaults.appTitleElement);
		this.defaults.appTitleElement.html(this.defaults.appTitleText);
		this.defaults.formsWrapper = $(this.defaults.formsWrapper);
		this.setupForms();
	},
	setupForms : function() {
		var forms = healthRecordsView.defaults.appForms;
		var dataForms = [];
		for (var f in forms) {
			var form = forms[f];
			var formWrapper = document.createElement('div');
			formWrapper.className = 'form ' + f;
			var appForm = this.createForm(form, f);
			formWrapper.appendChild(appForm);
			var clearboth = this.clearBothDiv();
			formWrapper.appendChild(clearboth);
			this.defaults.formsWrapper.append(formWrapper);
		}
	},
	createForm : function(form, formName){
		var formDiv = document.createElement('div');
		var formTitle = document.createElement('div');
		formTitle.className = healthRecordsView.defaults.formTitleClassName;
		formTitle.innerHTML = form.label;
		var formFieldsWrapper = document.createElement('div');
		formFieldsWrapper.className = healthRecordsView.defaults.formFieldsClassName;
		
		for(var fc in form.fields) {
			var field = form.fields[fc];
			var fieldWrapper = document.createElement('div');
			fieldWrapper.className = healthRecordsView.defaults.formFieldClassName;
			var fieldLabel = document.createElement('div');
			fieldLabel.className = healthRecordsView.defaults.formFieldLabelClassName;
			fieldLabel.innerHTML = field.label;
			var fieldInputWrapper = document.createElement('div');
			fieldInputWrapper.className = healthRecordsView.defaults.formFieldInputClassName;
			fieldInputWrapper.appendChild(this.createFormFieldInput(field));
			fieldWrapper.appendChild(fieldLabel);
			fieldWrapper.appendChild(fieldInputWrapper);
			formFieldsWrapper.appendChild(fieldWrapper);
		}
		
		var formNavigationButtons = this.createNavButtons(form, formName);
		
		formDiv.appendChild(formTitle);
		formDiv.appendChild(formFieldsWrapper);
		formDiv.appendChild(formNavigationButtons);
		return formDiv;
	},
	createFormFieldInput : function(field){
		var inputFieldDiv;
		if(field.inputOptions) {
			inputFieldDiv = document.createElement('select');
			var inputOption = document.createElement('option');
			inputOption.innerHTML = 'Select';
			inputFieldDiv.appendChild(inputOption);
			for(var f in field.inputOptions) {
				var option = field.inputOptions[f];
				var inputOption = document.createElement('option');
				inputOption.value = option;
				$(inputOption).attr('id', option.name);
				inputOption.innerHTML = option;
				inputFieldDiv.appendChild(inputOption);
			}
		}
		else if(field.type == 'textarea' || field.textarea) {
			inputFieldDiv = document.createElement('textarea');
			$(inputFieldDiv).attr('id', field.name);
		}
		else {
			inputFieldDiv = document.createElement('input');
			$(inputFieldDiv).attr('id', field.name);
		}
		return inputFieldDiv;
	},
	
	createNavButtons : function(form, formName) {
		var formNavDiv = document.createElement('div');
		formNavDiv.className = healthRecordsView.defaults.formNavigationClassName;
		
		if(form.prevForm) {
			var formButton = document.createElement('div');
			formButton.className = healthRecordsView.defaults.formPrevButtonClassName;
			formButton.innerHTML = 'Back';
			$(formButton).click(function(){
				$('.'+formName).hide({effect : 'slide', easing : 'linear', direction: 'right', duration : 1000,
					complete : function() {
						$('.'+form.prevForm).show({effect : 'slide', easing : 'linear', direction: 'left', duration : 1000, complete : function() {$("html, body").animate({ scrollTop: 0 });}});
					}
				});
				
			});
			formNavDiv.appendChild(formButton);
		}
		if(form.nextForm) {
			var formButton = document.createElement('div');
			formButton.className = healthRecordsView.defaults.formNextButtonClassName;
			formButton.innerHTML = 'Next';
			$(formButton).click(function(){
				$('.'+formName).hide({effect : 'slide', easing : 'linear', direction: 'left', duration : 1000,
					complete : function() {
						$('.'+form.nextForm).show({effect : 'slide', easing : 'linear', direction: 'right', duration : 1000, complete : function() {$("html, body").animate({ scrollTop: 0 });}});
					}
				});
				
			});
			formNavDiv.appendChild(formButton);
		}
		return formNavDiv;
	},
	clearBothDiv : function() {
		var clearboth = document.createElement('div');
		clearboth.className = 'clearboth';
		return clearboth;
	}
};