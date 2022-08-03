$(document).foundation()

var appointment = {
    name:"", 
    phone:"", 
    location:"",
    date:"",
    time:""
}


// Hamburger Menu Interaction
function openNav() {
    document.getElementById("mobileMenu").style.width = "80%";
}

function closeNav() {
    document.getElementById("mobileMenu").style.width = "0%";
}


// Change Hero Image Hover
function addNewImage() {
    document.getElementById("heroCTA").src = "images/heroCTAHover.svg";
}

function addOldImage() {
    document.getElementById("heroCTA").src = "images/heroCTA.svg";
}


// Populate Default Booking Settings
function defaultSettings(){  
    appointment.time="1:00pm";
    sessionStorage.setItem("appointmentTime",appointment.time);
    appointment.location="Fairway X-Ray & Ultrasound";
    sessionStorage.setItem("appointmentLocation",appointment.location);
}


// Change Selected Time and Set Object Time
function selectTag1() {
    $(".tag1").addClass('selectedTime a');
    $(".tag2").removeClass('selectedTime a');
    $(".tag3").removeClass('selectedTime a');
    appointment.time="1:00pm";
    sessionStorage.setItem("appointmentTime",appointment.time);
}

function selectTag2() {
    $(".tag1").removeClass('selectedTime a');
    $(".tag2").addClass('selectedTime a');
    $(".tag3").removeClass('selectedTime a');
    appointment.time="3:30pm";
    sessionStorage.setItem("appointmentTime",appointment.time);
}

function selectTag3() {
    $(".tag1").removeClass('selectedTime a');
    $(".tag2").removeClass('selectedTime a');
    $(".tag3").addClass('selectedTime a');
    appointment.time="4:00pm";
    sessionStorage.setItem("appointmentTime",appointment.time);
}


// Change Selected Location and Set Object Location
function changeToImage1(){
    var image = document.getElementById("testLocationImage");
    $(".location1").addClass('selectedButton');
    $(".location2").removeClass('selectedButton');
    $(".location3").removeClass('selectedButton');
    $(".location4").removeClass('selectedButton');

    if(image.src!="images/testImage1.png")
    {
        image.src="images/testImage1.png"
    }
    appointment.location="Fairway X-Ray & Ultrasound";
    sessionStorage.setItem("appointmentLocation",appointment.location);
}

function changeToImage2(){
    var image = document.getElementById("testLocationImage");
    $(".location1").removeClass('selectedButton');
    $(".location2").addClass('selectedButton');
    $(".location3").removeClass('selectedButton');
    $(".location4").removeClass('selectedButton');

    if(image.src!="images/testImage2.png")
    {
        image.src="images/testImage2.png"
    }

    appointment.location="Canamera X-Ray & Ultrasound";
    sessionStorage.setItem("appointmentLocation",appointment.location);
}

function changeToImage3(){
    var image = document.getElementById("testLocationImage");
    $(".location1").removeClass('selectedButton');
    $(".location2").removeClass('selectedButton');
    $(".location3").addClass('selectedButton');
    $(".location4").removeClass('selectedButton');

    if(image.src!="images/testImage3.png")
    {
        image.src="images/testImage3.png"
    }

    appointment.location="Etobicoke Women's Imaging";
    sessionStorage.setItem("appointmentLocation",appointment.location);
}

function changeToImage4(){
    var image = document.getElementById("testLocationImage");

    $(".location1").removeClass('selectedButton');
    $(".location2").removeClass('selectedButton');
    $(".location3").removeClass('selectedButton');
    $(".location4").addClass('selectedButton');
   
    if(image.src!="images/testImage4.png")
    {
        image.src="images/testImage4.png"
    }

    appointment.location="Hamilton Diagnostic Services";
    sessionStorage.setItem("appointmentLocation",appointment.location);
}


// Delay to show Notification
function delay (URL) {
    setTimeout( function() { window.location = URL }, 4000 );
}


// Get Name, Phone and Date from Form
function saveName() {
    appointment.name=document.getElementById("full_name").value;
    appointment.phone=document.getElementById("mobile_number").value;
    sessionStorage.setItem("fullName",appointment.name);
    sessionStorage.setItem("phoneNumber",appointment.phone);
}

function saveDate() {
    appointment.date=document.getElementById("date_picker").value;
    var options = { month: 'long', day: 'numeric', year: 'numeric' };
    var dateFormat  = new Date(appointment.date);
    dateFormat.setDate(dateFormat.getDate()+1);
    sessionStorage.setItem("appointmentDate", dateFormat.toLocaleString("en-US", options));
}


// Change HTML Text on Confirmation Load
function loadAppointment(){
    $(".infoText").html(sessionStorage.getItem("appointmentLocation")+" <br>"+sessionStorage.getItem("appointmentDate")+" | "+ sessionStorage.getItem("appointmentTime"));
    $(".personalText").html(sessionStorage.getItem("fullName")+"<br>"+sessionStorage.getItem("phoneNumber")+"&nbsp;<u class='editButton'>edit</u>");
}


// Show Notification after Requesting
function requestAppointment(){
    Notify("Appointment (#"+ Math.floor(Math.random()*90000)+") successfully requested");
    document.getElementById("notifications");
    notifications.style.display="block";
}


// Blink Autosave to show Feedback
function autosaveBlink() {
	$('.autosaving').fadeOut(500);
    $('.autosaving').fadeIn(500);
}
setInterval(autosaveBlink, 3000);
