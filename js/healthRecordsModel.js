var healthRecordsModel = {
	forms: {
		patientProfile : {
			label : 'Patient Profile',
			fields : [
				{
					name : 'patientNumber',
					label : 'Patient Number',
					validation : function(){}
				},
				{
					name : 'patientFName',
					label : 'First Name',
					validation : function(){}
				},
				{
					name : 'patientLName',
					label : 'Last Name',
					validation : function(){}
				},
				{
					name : 'patientAge',
					label : 'Age',
					validation : function(){}
				},
				{
					name : 'patientDOB',
					label : 'D.O.B.',
					validation : function(){}
				},
				{
					name : 'patientGender',
					label : 'Gender',
					validation : function(){},
					inputOptions : ['Male', 'Female']
				},
				{
					name : 'patientOccupation',
					label : 'Occupation',
					validation : function(){},
					inputOptions : ['Business', 'Self Employed', 'Service']
				},
				{
					name : 'patientPhone',
					label : 'Phone #',
					validation : function(){}
				},
				{
					name : 'patientEmail',
					label : 'Email ID',
					validation : function(){}
				},
				{
					name : 'patientAddress',
					label : 'Address',
					validation : function(){},
					type : 'textarea'
				}
				],
				nextForm : 'medicalHistory'
		},
		medicalHistory : {
			label : 'Medical History',
			fields : [
				{
					name : 'currentMedicalCare',
					label : 'Are you presently under any medical care?',
					validation : function(){},
					inputOptions : ['Yes', 'No'],
					action : function() {
						var details = document.createElement('div');
						details.className = 'answerDetails';
						var detailsInput = document.createElement('textarea');
						details.appendChild(detailsInput);
						
					}
				},
				{
					name : 'previousSurgery',
					label : 'Have you had any surgery before?',
					validation : function(){},
					inputOptions : ['Yes', 'No'],
					action : function() {
						var details = document.createElement('div');
						details.className = 'answerDetails';
						var detailsInput = document.createElement('textarea');
						details.appendChild(detailsInput);
						
					}
				},
				{
					name : 'prolongedBleeding',
					label : 'Do you have prolonged bleeding after small injuries/cuts?',
					validation : function(){},
					inputOptions : ['Yes', 'No']
				},
				{
					name : 'bleedingDisorder',
					label : 'Do you have any bleeding disorder, such as Anemia?',
					validation : function(){},
					inputOptions : ['Yes', 'No']
				},
				{
					name : 'penicillinAllergic',
					label : 'Are you allergic to penicillin or any other drug?',
					validation : function(){},
					inputOptions : ['Yes', 'No'],
					action : function() {
						var details = document.createElement('div');
						details.className = 'answerDetails';
						var detailsInput = document.createElement('textarea');
						details.appendChild(detailsInput);
						
					}
				},
				{
					name : 'smoker',
					label : 'Do you smoke?',
					validation : function(){},
					inputOptions : ['Yes', 'No']
				},
				{
					name : 'bleedingDisorder',
					label : 'Have you had any serious trouble associated with any previous dental treatment? If so, explain.',
					validation : function(){},
					inputOptions : ['Yes', 'No'],
					action : function() {
						var details = document.createElement('div');
						details.className = 'answerDetails';
						var detailsInput = document.createElement('textarea');
						details.appendChild(detailsInput);
						
					}
				},
				{
					name : 'anyDisorder',
					label : 'Do you have any other medical disorder?',
					validation : function(){},
					inputOptions : ['Yes', 'No'],
					action : function() {
						var details = document.createElement('div');
						details.className = 'answerDetails';
						var detailsInput = document.createElement('textarea');
						details.appendChild(detailsInput);
						
					}
				},
				{
					name : 'womenPregnant',
					label : 'Are you pregnant? If yes, when is the baby due?',
					validation : function(){},
					inputOptions : ['Yes', 'No'],
					action : function() {
						var details = document.createElement('div');
						details.className = 'answerDetails';
						var detailsInput = document.createElement('textarea');
						details.appendChild(detailsInput);
						
					}
				}
				],
				nextForm : 'treatmentDetails',
				prevForm : 'patientProfile'
		},
		treatmentDetails : {
			label : 'Treatment Details',
			fields : [
				{
					name : 'chiefComplaint',
					label : 'Chief Complaint',
					textarea : true
				},
				{
					name : 'pastDentalHistory',
					label : 'Past Dental History',
					textarea : true
				},
				{
					name : 'diagnosis',
					label : 'Diagnosis',
					textarea : true
				},
				{
					name : 'treatmentPlan',
					label : 'Treatment Plan',
					textarea : true
				}
				],
			prevForm : 'medicalHistory'
		}
	}
};