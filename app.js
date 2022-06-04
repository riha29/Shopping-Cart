
function updateCartCase(isIncreasing){
    const caseInput= document.getElementById('case-number')
    let caseNumber = caseInput.value 
    if(isIncreasing==true){
        caseNumber = parseInt(caseNumber) +1
    }
    else if(caseNumber>0){
        caseNumber = parseInt(caseNumber) -1
    }
    caseInput.value = caseNumber
    //update case total
    const caseTotal= document.getElementById('case-total')
    caseTotal.innerText= caseNumber*59
}

document.getElementById('case-plus').addEventListener('click', function(){
   updateCartCase(true)   
   calculateTotal()
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateCartCase(false)
    calculateTotal()
})


function updateCartPhone(isIncreasing){
    const phoneInput= document.getElementById('phone-number')
    let phoneNumber = phoneInput.value 
    if(isIncreasing==true){
        phoneNumber = parseInt(phoneNumber) +1
    }
    else if(phoneNumber>0){
        phoneNumber = parseInt(phoneNumber) -1
    }
    phoneInput.value = phoneNumber
    //update case total
    const phoneTotal= document.getElementById('phone-total')
    phoneTotal.innerText= phoneNumber*1219
}

document.getElementById('phone-plus').addEventListener('click', function(){
   updateCartPhone(true)   
   calculateTotal()
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateCartPhone(false)
    calculateTotal()
})

function getInputValue(product){
    const productInput= document.getElementById(product+'-number')
    const productNumber= parseInt(productInput.value)
    return productNumber
}

function calculateTotal(){
    const phoneTotal= getInputValue('phone') *1219
    const caseTotal= getInputValue('case') *59
    const subTotal = phoneTotal+ caseTotal
    const subtotal= document.getElementById('subtotal')
    subtotal.innerText= subTotal
    const Tax=subTotal/10
    const tax= document.getElementById('tax')
    tax.innerText= Tax
    const total= document.getElementById('total')
    total.innerText= subTotal+ Tax
    
}


