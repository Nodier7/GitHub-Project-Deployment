
let firstIndex = 0;

function autoSlide(){
    setTimeout(autoSlide, 2000)
    let pics;
    let imag = document.querySelectorAll('.slide');
    for (pics= 0; pics < imag.length; pics++){
        imag[pics].style.display="none" ;
    }
    firstIndex++;
    if (firstIndex > imag.length){
        firstIndex = 1;
    }
    imag[firstIndex-1].style.display="block";
}
autoSlide();

const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu= document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen

        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}  

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "nodi.nzeza@gmail.com",
        Password : "bekn1407",
        To : 'nodiernzeza@yahoo.co.uk',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
             + "<br> Email: " + document.getElementById("email").value
             + "<br> Phone no.: " + document.getElementById("phone").value
             + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully!")
    );
}