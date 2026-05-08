console.log("hw4.js loaded")
const resetButton = document.getElementById("reset")
       


// slider and date from hw1 //       
const d = new Date(); 
let text= d.toLocaleDateString(); /* Extracts the month date year from your browser  that way we avoid confusion from users locations*/ 
document.getElementById("today").innerHTML= text; /* Finds the element withe the attribute id=today and eneters this using the span tag*/
    


var slider = document.getElementById("myRange")
var output = document.getElementById("range_slider")
output.textContent = slider.value; 

slider.oninput = function() {
output.textContent = this.value;
} 
//formoutput += "<tr><td align='right'>" + name + "</td>";


// wasnt reseting my slider after reset on html made this so that it would 
resetButton.onclick = function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("range_slider");
    output.textContent = `0`;
}






//validate user first name
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/; 
    //check to see if first name is empty//
    if (fname == "") { 
        document.getElementById("fname-error").innerHTML = "First name cannot be empty";
        return false;
    } else if (fname != "") { // { <------open brack with else if to checks correct pattern
        if (!fname.match(namePattern)) { // <---- remember to validate our name pattern varible
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes and dashes only.";
       return false;
     } else if(fname.length < 2) { //check to see if name is over 1 charcter 
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
     } else if (fname.length > 30) { //check to make sure name is less than 30
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
     } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
     }

}
}

//validate user mname

function validateMname() {
    let mname = document.getElementById("mname").value;
    const namePattern = /^[A-Z]$/;
    //make mname uppercase //
    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;
    //incase
    if (!mname.match(namePattern)) {
        document.getElementById("mname-error").innerHTML = "Upper letter case characters only";
        return false;
    } else {
        document.getElementById("mname-error").innerHTML = "";
    }
}


//validate user lname 
function validateLname (){
    lname = document.getElementById("lname").value.trim();
    var namePattern =/^[a-zA-Z'-]+$/;
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Cannot leave last name empty";
        return false;
    } else if (lname != "") {
        if(!lname.match(namePattern)) {
            document.getElementById("lname-error").innerHTML = "Letters, apostrophes and dashes only.";
            return false
        } else if (lname.length < 2) {
            document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
            return false
        } else if (lname.length > 30) {
            document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters";
            return false;
        } else {
            document.getElementById("lname-error").innerHTML = "";
            return true;
        }
    }
}


//validate user DOB 120 yrs MAX

function validateDOB() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
    
    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "date cannot be in the future";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML =
        "date cannot be more than 120 years ago"
        return false;
    } else {
        document.getElementById("dob-error").innerHTML =
        "";
        return true;
    }

}


//Validate  USER SSN 
function validateSsn() {
   const ssn = document.getElementById("ssn").value;
   //ssn pattern
   const ssnR =/^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

   if (!ssnR.test(ssn)) { //test to see if SSN is valid by our SSNR
    document.getElementById("ssn-error").innerHTML =
    "Please enter a valid ssn";
    return false;
   } else {
    document.getElementById("ssn-error").innerHTML = "";
    return true;
   }
}


// Validate USR ADRS 1
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length)

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = 
        "Please enter a valid address line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML =
        "";
        return true;
    }
}

//validate usr CITY 
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be be left empty";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}


// validate our ZIP
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g,""); //removes all charcters that are not numbers

    if (!zip) {
        document.getElementById("zip-error").innerHTML = 
        "Zip cannot be left empty";
        return false;
    } 
    if (zip.length > 5) {
        zip = zip.slice(0,5) + "-" + zip.slice(5,9); //removes any numeral characters after 5 have been entered
    } else {
        zip =zip.slice(0,5);
    } 
    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = ""; 
    return true;
}

//validate our Email 

function validateEmail() {
    email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //expression for email regulation

    if (email == "") {
        document.getElementById("email-error").innerHTML = 
        "Email cannot be left blank ";
        return false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("email-error").innerHTML =
        "Please enter a a valid Email Address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}


//validate user phone number

function validatePhonenum() {
    const phoneInput = document.getElementById("phonenum");
    const phone = phoneInput.value.replace(/\D/g, "");// removes non number characters
    //  replace( \D removes any charcter not a digit
    // g apply to all matches
    // "" replace with nothing

    if (phone.length != 10) {
        document.getElementById("phonenum-error").innerHTML =
        "Phone number cannot be left blank";
        return false;
    }

    const formattedPhone =
    phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phonenum-error").innerHTML = "";
    return true;
}

function validateUsername() {
    username = document.getElementById("username").value;

    username = username.toLowerCase() //convert username to lower case
    document.getElementById("username").value = username //displays it as lowercase

    if (username.length === 0) {
        document.getElementById("username-error").innerHTML =
        "Username cannot be left blank";
        return false;
    }

    //username must not start with number | !-not  | NaN-(Not a number)
    //  | username.charAt(0) checks the first character |
    // combine these altogther we can properly validate usernames 
    // that will start with a number //
    if (!isNaN(username.charAt(0))) {
        document.getElementById("username-error").innerHTML =
        "Username cannot begin with a number";
        return false;
    }

    //Check to see if name has only letters number or underscore
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(username)) {
        document.getElementById("username-error").innerHTML =
        "Username can only contain letters, numbers, or underscores";
        return false;
    }


    else if (username.length < 5) {
        document.getElementById("username-error").innerHTML = 
        "username cannot be less than 5 characters";
        return false;
    }
    else if (username.length > 30) {
        document.getElementById("username-error").innerHTML =
        "username cannot be more than 30 characters";
        return false;
    }
    
    else {
        document.getElementById("username-error").innerHTML = " ";
        return true;
    }

}

function validatePass() {
    const pass = document.getElementById("pass").value;
    const username = document.getElementById("username").value;

    const errorMessage = [];

    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Please enter at least one lowercase letter");
    }

    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Please enter at least one uppercase letter");
    }

    if (!pass.match(/[0-9]/)) {
        errorMessage.push("Please enter at least one number");
    }

    if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Please enter at least one special character");
    }

    if (pass == username || pass.includes(username)) {
        errorMessage.push("Password cannot contain username");
    }

    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span class='error'>${msg}</span><br>`)
    .join("")

}

function ComfirmPass() {
 pass1 = document.getElementById("pass").value;
 pass2 = document.getElementById("c_pass").value;

 if (pass1 !== pass2) {
    document.getElementById("pass2-error").innerHTML = 
    "Password does not match";
    return false;
 }

 else {
    document.getElementById("pass2-error").innerHTML = "Passwords match";
    return true;
 }
}

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='8'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        // skip elements with no name
        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

                case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

                case "range":
                // Only show the slider if the user moved it off the default (0)
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

                 case "button":
                 case "Submit":
                 case "reset":
                // skip
                  break;

                    default:
                    if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata' align='left'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

document.getElementById("open-realiframe").addEventListener("click", (e =>{
iframe2.style.display = "block";
}))
document.getElementById("iframe2")

document.getElementById("exit-iframe2").addEventListener("click", (e => {
    iframe2.style.display = "none";
}))

//open iframe from help nav bar
document.getElementById("open-iframe").addEventListener("click", (e =>{
iframe1.style.display = "block";
}))
document.getElementById("iframe1")


//close iframe from close tab on iframe div
document.getElementById("exit-iframe").addEventListener("click", (e => {
    iframe1.style.display = "none";
}))

//open chatbot
document.getElementById("chatbot");
document.getElementById("open-chatbot").addEventListener("click", (e => {
    chatbot.style.display = "block";
}))
//close chatbot
document.getElementById("close-chatbot").addEventListener("click", (e => {
    chatbot.style.display = "none";
}))

function showAlert(){
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function(){
        alertBox.style.display = "none"
    };
}

function validateEverything(){
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMname()) {
        valid =false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDOB()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZip()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhonenum()) {
        valid = false;
    }
    if (!validateUsername()) {
        valid = false;
    }
    if (!validatePass()) {
        valid = false;
    }
    if (!ComfirmPass()) {
        valid =false;
    }
    if (valid) {
        document.getElementById("Submit").disabled = false;
    } else {
        showAlert();
    }
}


//cookies expired
function setCookie(name,cvalue, expiryDays) {
    var day =new Date();
    day.setTime(day.getTime() + (expiryDays *24 * 60 * 60 * 1000)) // 24hrs , 60 min, 60 sec, 1000 days setting active timer for expieriation for users cookie
    var expires = "expires=" + day.toUTCString(); //throws an active timer to show expiration date for user
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

//retrive the value of a cookie by a name
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(`;`); //returns cookies as one long string removing ;

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}


var inputs = [
    {id:"fname", cookieName: "firstName"},
    {id:"mname", cookieName: "middleInitial"},
    {id:"lname", cookieName: "lastName"},
    {id:"dob", cookieName: "dob"},
    {id:"ssn", cookieNmame: "ssn"},
    {id:"address1", cookieNmame: "address1"},
    {id:"city", cookieNmame: "city"},
    {id:"zip", cookieNmame: "zipCode"},
    {id:"email", cookieNmame: "email"},
    {id:"phonenum", cookieNmame: "phone"},
    {id:"username", cookieNmame: "userName"},
];

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});


var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}

document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});


const chatBody = document.querySelector(".chat-body")
//this const will grabs contianers where all the chat-bubbles reside
// will need this for later when we append our new user messages
const messageInput = document.querySelector(".message-input"); 
//searches for the input(textarea) properly on our chatbox 
const sendmessageButton = document.querySelector("#send-message")

const userData = {
    message:null
}


/*
The user types “hello.”
JavaScript grabs that text.
It creates a new div.
It gives that div the classes message and user-message.
It places another div inside with the text hello.
Then it adds the whole thing into the chat area.
*/


//will helps us make 2 divs to create the speech bubble
//content → messageContent classes → "user-message"
const createMessageElement = (content, classes) => {
    //content = <div class="message-text">hello</div>
    // classes = "user-message"
    const div = document.createElement("div"); //create empty div 
    div.classList.add("message", classes); // div is then turned into <div class="message user-message">
    // thru const outgoingMessageDiv 
    div.innerHTML = content; // our content is our "messageContent"//therefore div.innner is the div nseted inside 
    return div; /*<div class="message user-message">                                    
                <div class="message-text">hello</div>
                </div>*/
}


//respone gen from api
const generateBotResponse = async (incomingMessageDiv) => {
    const messageElement = incomingMessageDiv.querySelector(".message-text");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: userData.message
        })
    };

    try {

        const response = await fetch("/api/chat", requestOptions);

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong");
        }

        const apiResponseText = data.candidates[0].content.parts[0].text.trim();
        messageElement.innerText = apiResponseText;

    } catch (error) {

        console.log(error);
        messageElement.innerText = "Error generating response.";

    } finally {

        incomingMessageDiv.classList.remove("thinking");

    }
}


const handleOutgoingMessage = (e) => {
    e.preventDefault(); //prevents form submission or page refresh
    userData.message = messageInput.value.trim();
    /* stores message in userData 
    message: "hello"
    } 
    Now the message is stored in your object. */
    messageInput.value = ""; //resets the textarea to nothing once you sent a message
    const messageContent = `<div class="message-text">${userData.message}</div>`;

    const outgoingMessageDiv =createMessageElement(messageContent, "user-message"); /*leads us back ^^ to const createmsgelement*/
    outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;
    chatBody.append(outgoingMessageDiv) // and then we finally get a speech bubble

    setTimeout(() => {
    const messageContent = 
`
    <img src="../images/clinical_logo.png" class="bot-avatar" width="50" height="50">
    <div class="message-text">
        <div class="thinking-indicator">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
`;

const incomingMessageDiv = createMessageElement(messageContent, "bot-message");
incomingMessageDiv.classList.add("thinking"); /*leads us back ^^ to const createmsgelement*/
    chatBody.append(incomingMessageDiv)
    generateBotResponse(incomingMessageDiv);
    
},600);    
}
 
messageInput.addEventListener("keydown", (e) => {
    //add event listners waits when "keydown"(when a certain key is pressed) 
    // "(e)" event objects will later give info about what key was pressed then run this fuction => {}
    const userMessage = e.target.value.trim();
    //grabs the usersmessage and trims the first and last spaces 
    if(e.key === "Enter" && userMessage) {
    // this line makes sures that if the user presses enter and the message isnt empty
    handleOutgoingMessage(e)
    //then we console log/handle  the message
    }
})

sendmessageButton.addEventListener("click", (e) => handleOutgoingMessage(e))
//when the submit button is pressed or the key enter is pressed 
//then process witht he handleoutgoingmessage functions