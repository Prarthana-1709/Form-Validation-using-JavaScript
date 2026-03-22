function validForm()
{
    let valid=true;
    const name=document.getElementById("name").value;
    if(name.trim()==="")
    {
        document.getElementById('nameError').innerText="name is required"
        valid =false;
    }
    else{
        document.getElementById('nameError').innerText=""
    }

    
    const gender=document.querySelector('input[name="gender"]:checked');
    if(!gender)
    {
        document.getElementById('genderError').innerText="name is required"
        valid =false;
    }
    else{
        document.getElementById('genderError').innerText=""
    }


    const country=document.getElementById('country').value;
    if(country==="")
    {
        document.getElementById('countryError').innerText="country is required"
        valid =false;
    }
    else{
        document.getElementById('countryError').innerText=""
    }

    const about=document.getElementById('about').value;
    if(about.trim()==="")
    {
        document.getElementById('aboutError').innerText="country is required"
        valid =false;
    }
    else{
        document.getElementById('aboutError').innerText=""
    }

}
