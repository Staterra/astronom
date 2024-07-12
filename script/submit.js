function checkkk() {
    let first_name =  document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let questions = document.getElementById('questions').value;

    // first name
    if(first_name == '' || first_name == undefined) 
    {
        alert('Please enter your name');
        return false;
    }

    // for email valid
    if(email !== "")
    {
        var ad = email.indexOf("@");
        if(ad < 1)
        {
            alert('Invalid email address!');
            return false;
        }

        var titik = email.indexOf(".");
        if(titik <= ad + 2)
        {
            alert('Invalid email address');
            return false;
        }

        if(titik === email.length - 1)
        {
            alert('Invalid email address!');
            return false;
        }
    }
    else
    {
        alert('Plese fill your email address!');
        return false;
    }
    
    // adress
    if(questions == '')
    {
        alert('please enter your messages!')
        return false;
    }

    alert('Message received successfully');
    return true;
}
