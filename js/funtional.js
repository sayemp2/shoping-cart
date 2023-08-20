function updateProductNumber(product, productprice, addIncaseing, item){
    const productNumber = document.getElementById(product +'-input');
    let inputproductNumber = productNumber.value;
    if (addIncaseing == true){
        inputproductNumber = parseFloat(inputproductNumber) + 1;
    }
    else if(inputproductNumber > 0){
        inputproductNumber = parseFloat(inputproductNumber) - 1;
    }
    productNumber.value = inputproductNumber;
    //priceing
    const productPrice = document.getElementById(item +'_price');
    productPrice.innerText = productNumber.value * productprice; 
    
    calculteTotal();
}
function getInputValue(product){
    const phoneInput = document.getElementById(product +'-input');
    const phoneNumber = parseFloat(phoneInput.value);
    return phoneNumber;
}
function calculteTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmouunt = subTotal / 10;
    const totalAmounnt = subTotal + taxAmouunt;
    // console.log(subTotal);
    // console.log(taxAmouunt);
    // console.log(totalAmounnt);   
    document.getElementById('Subtotal').innerText = subTotal;
    document.getElementById('Tax_amount').innerText = taxAmouunt;
    document.getElementById('Total').innerText = totalAmounnt;
}






document.getElementById('phone-plus-btn').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true, 'phone');
})
document.getElementById('phone-negative-btn').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false, 'phone');
})






document.getElementById('case_plus_btn').addEventListener('click', function(){
    updateProductNumber('case', 59, true, 'case');
    // console.log(inputCaseNumber);
})
 document.getElementById('case_negative_btn').addEventListener('click',function(){
    // const casenumber = document.getElementById('case-input');
    // const inputCaseNumber = casenumber.value;
    // casenumber.value = parseFloat(inputCaseNumber) - 1;
    updateProductNumber('case', 59, false, 'case');
 })
