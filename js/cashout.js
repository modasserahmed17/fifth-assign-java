// Donate for Flood Relief in Noakhali,Bangladesh

document.getElementById('btn-donate')
 .addEventListener('click', function(event){
     event.preventDefault();
     
     const cashOut = getInputFieldValueById('input-amount');

     if(cashOut > 0){
         const balance = getTextFieldValueById('my-account');
         const newBalance = balance - cashOut;
         document.getElementById('my-account').innerText = newBalance;               
     }
     else{
          alert ('Insufficient Balance or wrong amount')              
     }
 })

// Donate for Flood at Feni, Bangladesh

 document.getElementById('btn-donat')
 .addEventListener('click', function(event){
     event.preventDefault();
     
     const cashOut = getInputFieldValueById('input-amoun');

     if(cashOut > 0){
         const balance = getTextFieldValueById('my-account');
         const newBalance = balance - cashOut;
         document.getElementById('my-account').innerText = newBalance;               
     }
     else{
          alert ('Insufficient Balance or wrong amount')              
     }
 })

// Aid for Injured in the Quota Movement

 document.getElementById('btn-dona')
 .addEventListener('click', function(event){
     event.preventDefault();
     
     const cashOut = getInputFieldValueById('input-amou');

     if(cashOut > 0){
         const balance = getTextFieldValueById('my-account');
         const newBalance = balance - cashOut;
         document.getElementById('my-account').innerText = newBalance;               
     }
     else{
          alert ('Insufficient Balance or wrong amount')              
     }
 })