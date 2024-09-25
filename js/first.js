// Donate for Flood Relief in Noakhali,Bangladesh

document.getElementById('btn-donate')
    .addEventListener('click', function(event){
      event.preventDefault();
      const noaDonate = getInputFieldValueById('input-amount');
      
      if (noaDonate > 0){
        const balance = getTextFieldValueById('n-acc-balance');
        const newBalance = balance + noaDonate;
        document.getElementById('n-acc-balance').innerText = newBalance;

       const donateTitle1 = document.getElementById('n-acc-balance').innerText;
       const d = new Date();
       document.getElementById('transaction-container').innerHTML +=
        `<p> ${noaDonate} Taka donated ${donateTitle1}</p>
         <p> ${new Date()}</p>
        `;
        
         }
         else{
              alert ('Failed to donate')
         }
})

// Donate for Flood at Feni, Bangladesh

document.getElementById('btn-donat')
    .addEventListener('click', function(event){
      event.preventDefault();
      const noaDonate = getInputFieldValueById('input-amoun');
      
      if (noaDonate > 0){
        const balance = getTextFieldValueById('f-acc-balance');
        const newBalance = balance + noaDonate;

        document.getElementById('f-acc-balance').innerText = newBalance;
         }
         else{
              alert ('Failed to donate')
         }
})

  // Aid for Injured in the Quota Movement


document.getElementById('btn-dona')
    .addEventListener('click', function(event){
      event.preventDefault();
      const noaDonate = getInputFieldValueById('input-amou');
      
      if (noaDonate > 0){
        const balance = getTextFieldValueById('q-acc-balance');
        const newBalance = balance + noaDonate;

        document.getElementById('q-acc-balance').innerText = newBalance;
         }
         else{
              alert ('Failed to donate')
         }
})

