function upadateCaseNumber(product, price, isIncreasing){
    const phoneInput = document.getElementById(product + '-number');
    let phoneNumber = phoneInput.value;
            if(isIncreasing){
                phoneNumber = parseInt(phoneNumber) + 1;
            }
            
    else if(phoneNumber > 0){
           phoneNumber = parseInt(phoneNumber) - 1;
         }
        
        phoneInput.value = phoneNumber;
    // update case total 
    const phoneTotal = document.getElementById(product + '-total');
    phoneTotal.innerText = phoneNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const phoneTotal = getInputvalue('phone') * 60;
        const subTotal = phoneTotal + caseTotal;
        const tax = subTotal / 12;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }

// phone prcie update using add event linstner 
document.getElementById('phone-plus').addEventListener('click',function(){
    upadateCaseNumber('phone',60, true);
});


document.getElementById('phone-minus').addEventListener('click',function(){
    upadateCaseNumber('phone',60 , false);
});