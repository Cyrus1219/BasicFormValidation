const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const form = document.getElementById('form')

function showErrMsg(inp , message){
    // console.log(inp , message);
    inp.parentElement.classList.add('error')
    //console.log(inp.nextElementSibling);
    inp.nextElementSibling.innerText = message;
}

function showSuccess(elem){
    elem.parentElement.classList.add('success')
    //elem.parentElement.classList.remove('success')
}

function getInpName(inp){
    return inp.id.charAt(0).toUpperCase() + inp.id.slice(1);
}

function chechEmail(inp){
    const em = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(em.test(inp.value))
        showSuccess(inp)
    else
        showErrMsg(inp,' Email is not valid !')

}


// pass check
function checkPassMatch(inp1,inp2){
    if(inp1.value !== inp2.value)
        showErrMsg(inp2,'Passwords do not match !')
}


function checkValidation(inpArr){
    inpArr.forEach(function(inp){
        if(inp.value.trim() === '')
            showErrMsg(inp,`${getInpName(inp)} is requied`);
        else
            showSuccess(inp);     
    })
}

// chechk inp len:
function checkLen(inp , minn ,maxx){
    if(inp.value.length < minn)
        showErrMsg(inp, `${getInpName(inp)} must be atlest ${minn}`)
    else
    if(inp.value.length > maxx)
        showErrMsg(inp, `${getInpName(inp)} must be less than ${maxx}`)
    else
        showSuccess(inp);
}


form.addEventListener('submit',(ev)=>{
    ev.preventDefault()
    //console.log(username.value);
    checkValidation([username,email,password,password2]);
    checkLen(username,3,15);
    //heckLen(username,3,15)
    chechEmail(email);
    checkPassMatch(password,password2);
})

