

export class regi extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        const shadow=this.attachShadow({mode:'open'});
        const form=document.createElement('form');
        form.setAttribute('action','');
        form.setAttribute('id','form');
        shadow.appendChild(form);
        ////////////////////////////111-----
        const btnclose=document.createElement('div');
        btnclose.setAttribute('class','close');
        btnclose.innerHTML='&times;'
        form.appendChild(btnclose);
        ////222/////////////////////////////////

        const hh=document.createElement('h4');
        hh.innerText='Register'
        form.appendChild(hh);
        const div1=document.createElement('div');
        div1.setAttribute('class','input-group');
        form.appendChild(div1);
        const label1=document.createElement('label');
        label1.setAttribute('for','username');
        label1.innerText='Username'
        div1.appendChild(label1);
       const username=document.createElement('input');
       username.setAttribute('type','text');
       username.setAttribute('id','username');
       username.setAttribute('name','username');
       div1.appendChild(username);
       const div2=document.createElement('div');
       div2.setAttribute('class','error');
       div1.appendChild(div2);
      
 /////////////3333333333333/////////////////////


 const div_2=document.createElement('div');
 div_2.setAttribute('class','input-group');
 form.appendChild(div_2);
 const label_2=document.createElement('label');
 label_2.setAttribute('for','email');
 label_2.innerText='Email'
 div_2.appendChild(label_2);
const email=document.createElement('input');
email.setAttribute('type','text');
email.setAttribute('id','email');
email.setAttribute('name','email');
div_2.appendChild(email);
const div_1=document.createElement('div');
div_1.setAttribute('class','error');
div_2.appendChild(div_1);
 ///////////////////////////////////////////////////

 const div_3=document.createElement('div');
 div_3.setAttribute('class','input-group');
 form.appendChild(div_3);
 const label_3=document.createElement('label');
 label_3.setAttribute('for','password');
 label_3.innerText='Password'
 div_3.appendChild(label_3);
const password=document.createElement('input');
password.setAttribute('type','password');
password.setAttribute('id','password');
password.setAttribute('name','password');
div_3.appendChild(password);
const div_13=document.createElement('div');
div_13.setAttribute('class','error');
div_3.appendChild(div_13);   
/////////////////////////444444444444444444
const div_4=document.createElement('div');
div_4.setAttribute('class','input-group');
form.appendChild(div_4);
const label_4=document.createElement('label');
label_4.setAttribute('for','cpassword');
label_4.innerText='Confirm Password'
div_4.appendChild(label_4);
const cpassword=document.createElement('input');
cpassword.setAttribute('type','password');
cpassword.setAttribute('id','cpassword');
cpassword.setAttribute('name','cpassword');
div_4.appendChild(cpassword);
const div_14=document.createElement('div');
div_14.setAttribute('class','error');
div_4.appendChild(div_14);
//////////////////////////////////////////

const btnform=document.createElement('button');
btnform.setAttribute('type','submit');
btnform.setAttribute('name','submit');
btnform.setAttribute('id','mysubmit');
btnform.innerText='Submit';
form.appendChild(btnform);


//////////////////////////////////////
const style=document.createElement('style');
shadow.appendChild(style);
        style.textContent =`body{
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(121,32,153,1) 86%);
    background-attachment: fixed;
    margin:0;
    font-family: 'Poppins', sans-serif; 
    
}

#form{
    width:300px;
   /* margin:5vh auto 0 auto;*/
    background-color: #d1e1fc;
    border-radius: 5px;
    padding:0 30px 30px 30px;
/*/////////////////*/



  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*border: 3px solid #f1f1f1;*/
  z-index: 9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);



}

h4{
    text-align: center;
    color:#792099;
}

#mysubmit{
    background-color: #7b73be;
    color:white;
    border: 1px solid #792099;
    border-radius: 20px;
    padding:10px;
    margin:20px 0px;
    cursor:pointer;
    font-size:20px;
    width:40%;
}
 #mysubmit:hover{
 transform: scale(1.3);
 transition: 0.4s;
 }   

#mysubmit:disabled{
     background-color:black;
    }

.input-group{
    display:flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.input-group input{
    border-radius: 20px;
    font-size:15px;
    margin-top:5px;
    padding:10px;
    border:1px solid rgb(34,193,195) ;
}

.input-group input:focus{
    outline:0;
}

.input-group .error{
    color:rgb(242, 18, 18);
    font-size:16px;
    margin-top: 5px;
}

.input-group.success input{
    border-color: #0cc477;
}

.input-group.error input{
    border-color:rgb(206, 67, 67);
}

label{
font-size:18px}

 .close {
    cursor: pointer;
    width:30px;
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
.close:hover{
background-color:red;}
    `
    //////////////////////////////////close





    //////////////////////////////close
    
    }
 
}
  customElements.define('registration-form',regi)


///////////////////////////////////////////////////////////////

/////////////////varibles definition/////////////////////////



///////////////////////////////////////////////////////////////
      // validation registration logic 
     

       function Mychange(){
    
        const divv=document.getElementById('mylogdiv');
        const my_webcomp=divv.querySelector('registration-form');
        if (my_webcomp) {
            const shadowRoot = my_webcomp.shadowRoot;
            if (shadowRoot) {
                const form = shadowRoot.querySelector('#form');
                const username = shadowRoot.querySelector('#username');
                const email = shadowRoot.querySelector('#email');
                const password = shadowRoot.querySelector('#password');
                const cpassword = shadowRoot.querySelector('#cpassword');
                const btnsub=shadowRoot.querySelector('#mysubmit');
                // Make sure form is found before adding the event listener
                if (form && username && email && password && cpassword ) {
                    form.addEventListener('input', (e) => {
                        if (!validateInputs()) {
                            e.preventDefault();
                        }
                    });
                    
                   function validateInputs() {
                        const usernameVal = username.value.trim();
                        const emailVal = email.value.trim();
                        const passwordVal = password.value.trim();
                        const cpasswordVal = cpassword.value.trim();
                        let success = true;
                
                        if (usernameVal === '') {
                            success = false;
                            setError(username, 'Username is required');
                        } else {
                            setSuccess(username);
                        }
                
                        if (emailVal === '') {
                            success = false;
                            setError(email, 'Email is required');
                            btnsub.style.backgroundColor='black';
                            
                        } else if (!validateEmail(emailVal)) {
                            success = false;
                            btnsub.style.backgroundColor='black';
                            /////////////
                          
                                
                            
                            /////////////
                            setError(email, 'Please enter a valid email');
                        } else {
                            setSuccess(email);
                            btnsub.style.backgroundColor='#792099';
                        }
                
                        if (passwordVal === '') {
                            success = false;
                            setError(password, 'Password is required');
                            btnsub.style.backgroundColor='black';
                        } else if (passwordVal.length < 8) {
                            success = false;
                            setError(password, 'Password must be at least 8 characters long');
                            btnsub.style.backgroundColor='black';
                        } else {
                            setSuccess(password);
                        }
                
                        if (cpasswordVal === '') {
                            success = false;
                            setError(cpassword, 'Confirm password is required');
                        } else if (cpasswordVal !== passwordVal) {
                            success = false;
                            setError(cpassword, 'Password does not match');
                        } else {
                            setSuccess(cpassword);
                        }
                
                        return success;
                    }
                
                    function setError(element, message) {
                        const inputGroup = element.parentElement;
                        const errorElement = inputGroup.querySelector('.error');
                
                        errorElement.innerText = message;
                        inputGroup.classList.add('error');
                        inputGroup.classList.remove('success');
                    }
                
                    function setSuccess(element) {
                        const inputGroup = element.parentElement;
                        const errorElement = inputGroup.querySelector('.error');
                
                        errorElement.innerText = '';
                        inputGroup.classList.add('success');
                        inputGroup.classList.remove('error');
                    }
                
                    const validateEmail = (email) => {
                        return String(email)
                            .toLowerCase()
                            .match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            );
                    };
                    ////////////
                    if (validateInputs()) {
            
                        btnsub.disabled = false; // Enable submit if valid
                       
                      } else {
                        btnsub.disabled = true;  // Disable submit if invalid
                      }
                    ///////////
                } else {
                    console.error('Form or one of its elements was not found in the shadow DOM.');
                }
            } else {
                console.error('Shadow root is not available.');
            }
        } else {
            console.error('Web component "registration-form" not found.');
        }

       

        }
      ///////////////////////////
      // Initialize EmailJS 
      (function(){
        emailjs.init({
          publicKey: "S-LIZA9QkPPD2nmDH",
        });
     })();
      //////////////////////////////////

 //export let myForm={};

//storing registration data 
     export function Mysignup(){
        const divv=document.getElementById('mylogdiv');
        let mycomp=divv.querySelector('registration-form');
        if(!mycomp){
        const mywebc=document.getElementById('template_2');
        const content=mywebc.content.cloneNode(true);
        divv.appendChild(content);
         mycomp=divv.querySelector('registration-form');
    }

        const myshadReg=mycomp.shadowRoot;
        const regform=myshadReg.getElementById('form');
        regform.onchange=function(e){Mychange(e)}
        const btncls=myshadReg.querySelector('.close');
        /////////////////////
        //myForm.importedF=regform;
        ///////////////////
        
        btncls.addEventListener('click', function(){regform.style.display = 'none';});
        const myRegbtn=document.getElementById('Myreg');
        myRegbtn.addEventListener('click', function(){
            regform.style.display = 'block'; // Show the form
        })
   

// Listen for form submission
    regform.addEventListener('submit', function (event) {
  
    const username = myshadReg.getElementById('username').value;
    const email = myshadReg.getElementById('email').value;
    const password=myshadReg.getElementById('password').value;

    // Check if data already exists in localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username or email already exists
    const userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
      alert('User already exists!');
    } else {
      // Add the new user to the users array
      users.push({ username, email, password });

      // Save the updated array back to localStorage
      localStorage.setItem('users', JSON.stringify(users));

      alert('User added successfully!');

      // Send a confirmation email using EmailJS
      const emailParams = {
        email: email, 
        username: username,
        password: password };// Pass the username to the email template}; service_qtw73gp
    
        emailjs.send('service_qtw73gp', 'template_fvj9vco', emailParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Confirmation email sent successfully!');
                }, function (error) {
                    console.error('FAILED...', error);
                    alert('Failed to send confirmation email.');
                });

    }

    // Optionally, reset the form
  regform.reset();
 regform.style.display='none';
  });
  return regform;
}

//////////////////////////// sign up mini/////////////////////////

/////////////////////////////////////////////////////////////////

window.Mysignup=Mysignup;
window.Mychange=Mychange;

