function checkPassword(form) { 
password1 = form.psw1.value;
 password2 = form.psw2.value; 
               
// If Not same return False.     
 if (password1 != password2) { 
     alert ("\nPassword did not match: Please try again...") 
     return false; 
} 
 // If same return True. 
else{ 
    alert("Thanks for signing up") 
    return true; 
                
    }                
}