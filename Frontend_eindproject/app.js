function  myFunction(){
    let toggle = document.getElementById('toggle_nav');
    toggle.classList.toggle('show');
}



// let fullname = document.getElementById('name').value;
// let email = document.getElementById('email').value;
// let phone = document.getElementById('phone').value;
// info
let infoname = document.getElementById('infoname');
let infoemail = document.getElementById('infoemail');
let infophone = document.getElementById('infophone');



function myConfirm(){
    
    infoname= document.getElementById('name').value;
    infoemail = document.getElementById('email').value;
    infophone = document.getElementById('phone').value;
    

    alert(`Name :${infoname}\n
Email :${infoemail}\n
Phone :${infophone}`)
        
    
}
