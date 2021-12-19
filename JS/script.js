const form = document.getElementById('myForm');

const name = document.getElementById('name');
const email = document.getElementById('email');
const countries_dropdown = document.getElementById('countries_dropdown');
const desc = document.getElementById('desc');
const receive = document.getElementById('receive');
const registerBtn = document.getElementById('sendBtn');

form.addEventListener('submit',function (event) {
    
})

function call()
{
    if(receive.checked)
    {
    alert('This is just for demo, If you have clicked the checkbox to receive copy, this alert will be showed. Send Email code is yet to be implemented.');
    }
}

function submitFrom()
{
    const form = document.getElementById('myForm');
    form.submit();
    
}

