
    let nameBtn = document.getElementById('btnName');
    let depoBtn = document.getElementById('btnDepo');
    let withdrawlBtn = document.getElementById('btnWithdrawal');


   const bankAccount = function(ownerName) {
    let balance= Number();
    let owner = "";

   

    return {
       
        deposit: function(depositAmount2) {
            if(depositAmount2 >0) {
           
           
            balance = balance + depositAmount2;
    
           return document.getElementById('userDetails').innerHTML = ` Deposited Amount : ${depositAmount2} <br> Balance : ${balance}`;
            }else {
                alert("Enter a valid number");
            }
     
        },
      

       withdrawal : function(withdrawalAmount) {
           
        console.log(`Amount withdrawal : ${withdrawalAmount}  Balance = ${balance}`);

        if(withdrawalAmount>0 ) {
         
                balance = balance - withdrawalAmount;

        } else {
            alert("Please enter a valid amount");
            console.log(`Amount withdrawal : ${withdrawalAmount}  Balance = ${balance}`);
        }
           

    },
    getBalance : function() {
        
        return document.getElementById('userDetails').innerHTML = `User Name : ${ownerName}  <br>New Balance : ${balance}`;

   },
   getOwnerName : function() {
       
    ownerName = prompt('Please enter your name');
    return document.getElementById('userDetails').innerHTML = `User Name : ${ownerName} `;
    
  }

}
  };


   
  nameBtn.addEventListener('click', () => {
            newBankAccount = bankAccount();
            newBankAccount.getOwnerName();
             
            
        
        depoBtn.addEventListener('click', () => {
             
                newBankAccount .deposit(prompt('Please enter your deposit amount'));
              
             
                withdrawlBtn .addEventListener('click', () => {
               
                newBankAccount.withdrawal(prompt('Please enter the number of withdrawal'));   
                newBankAccount.getBalance();  
            });
    
        }); 
    });  