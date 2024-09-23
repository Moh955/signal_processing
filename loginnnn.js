//login form-18-09-2024
//copyright

class loginhub extends HTMLElement{
    constructor(){
     super()
    }
 
    connectedCallback(){
         const shadow=this.attachShadow({mode:'open'});
         
         const form=document.createElement('form');
         form.setAttribute('id','form');
         shadow.appendChild(form);
         const heading1=document.createElement('h4');
         heading1.textContent='Log in';
         form.appendChild(heading1);
         const span=document.createElement('div');
         span.setAttribute('id','spanlog');
         form.appendChild(span);
         const loginusername=document.createElement('input');
         loginusername.setAttribute('type','text');
         loginusername.setAttribute('id','loginusername');
         loginusername.setAttribute('name','loginusername');
         loginusername.setAttribute('required',true);
         loginusername.setAttribute('placeholder','Username ...');
         form.appendChild(loginusername);
         /////////////////////////////////////
 
       
        
         const loginpassword=document.createElement('input');
         loginpassword.setAttribute('type','password');
         loginpassword.setAttribute('id','loginpassword');
         loginpassword.setAttribute('name','loginpassword');
         loginpassword.setAttribute('required',true);
         loginpassword.setAttribute('placeholder','Password ...');
         form.appendChild(loginpassword);
         //////////////////////////////////
         const subbtn=document.createElement('button');
         subbtn.setAttribute('id', 'subbtn');
         subbtn.setAttribute('type', 'button');
         subbtn.textContent='Sign in';
         form.appendChild(subbtn);
         //////////////////////////////////////////
        
        
         ////////////////////////////////////////
         const outform=document.createElement('form');
         outform.setAttribute('id','outform');
         shadow.appendChild(outform);
         const spanout=document.createElement('div');
         spanout.setAttribute('id','spanout');
         outform.appendChild(spanout);
         const logout=document.createElement('button');
         logout.setAttribute('id','logout');
         logout.textContent='log out'
         outform.appendChild(logout);
         ////////////////////////////////////////
         const style=document.createElement('style');
         shadow.appendChild(style);
         style.textContent=` 
 
 
 ::-ms-input-placeholder { /* Edge 12-18 */
   color: gray;
 }
 
 ::placeholder {
   color: gray;
   font-size:20px;
   text-align:center;
 }
 
 
 
 #form{
    display:flex;
    flex-direction: column;
     width:300px;
     margin:3vh auto 0 auto;
     background-color:  #d1e1fc;
     border-radius: 10px;
     padding:1px 30px 30px 30px;
     
 }
 

#outform{
width:300px;
background-color:  #d1e1fc;}


 h4{
     text-align: center;
     color:black;
     margin:1px;
 }
 
 #form button, #logout {
     background-color: #7b73be;
     color:white;
     border: 1px solid #792099;
     border-radius: 20px;
     padding:10px;
     margin-top:20px;
     margin-right:10px; 
     cursor:pointer;
     font-size:20px;
     width:100px;
 }
 
 #form button:hover{
   transform: scale(1.3);
   transition: 0.4s;
 }  
 

 
 
 #spanlog{
 display:flex;
 width: 200px;
 height: 20px;
 color: red;
 font-size:14px;
 }

 
 input{
 width:250px;
 height:25px;
     display:flex;
    
     font-size:20px;  
     border:black solid 2px;
     border-radius:20px;
     margin: 20px;
 }
 
 .input-group.success input{
     border-color: #0cc477;
 }
 
 .input-group.error input{
     border-color:rgb(206, 67, 67);
 }
         `          
    }
 }
 
 
 customElements.define('login-form', loginhub);
 
 //////////////////////////  // Login logic///////////////////////////////
 

 
    
 ////////////////
function Mylogin(){

 const mywebc=document.getElementById('template_3');
 const content=mywebc.content.cloneNode(true);
 const divv=document.getElementById('mylogdiv');
 divv.appendChild(content);
 const mycomp=divv.querySelector('login-form');
 const myshad=mycomp.shadowRoot;
 const loginForm=myshad.getElementById('form');
 const logoutBtn=myshad.getElementById('logout');
 const logoutForm=myshad.getElementById('outform');
 const spanOut=myshad.getElementById('spanout');
 const spanlog=myshad.getElementById('spanlog');
 ///////////////////////////////////////////////

  
 /////////////////////////////////////////////
// Function to check login status
 function checkLoginStatus() {
    const username = localStorage.getItem('username');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
      let success=false;
    if (username && isLoggedIn === 'true') {
        // User is logged in
        spanOut.textContent = `Welcome back, ${username}!`;
        loginForm.style.display = 'none';
        logoutForm.style.display = 'block';
        success=true;
    } else if (username) {
        // User has an account but is logged out
        spanlog.textContent = `Welcome, ${username}. Please log in.`;
        loginForm.style.display = 'block';
        logoutForm.style.display = 'none';
        success=false
    } else {
        // No user stored in localStorage
        spanlog.textContent = 'Please sign up or log in';
        loginForm.style.display = 'block';
        logoutForm.style.display = 'none';
        success=false;
    }
    return success
}

 //////////////////////////////////////////////////
 const loginbtn=myshad.getElementById('subbtn');
 
 loginbtn.addEventListener('click', function(e) {
    e.preventDefault();
    const enteredUsername = myshad.getElementById('loginusername').value;
    const enteredPassword = myshad.getElementById('loginpassword').value;
    
    const spanlog=myshad.getElementById('spanlog');
    
    
        // Check if the entered username and password match any stored user
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        const user = storedUsers.find(user => user.username === enteredUsername && user.password === enteredPassword);


        if (user) {
            // Here you can add validation for the username and password
            localStorage.setItem('username', enteredUsername);
            localStorage.setItem('isLoggedIn', 'true');
            checkLoginStatus();
            ////////////////
            
                /////////////////
        } else {
            
            spanlog.textContent='Please enter both username and password'}
      
 
      
     
       /*if (user){
            alert(`You are welcome: ${enteredUsername}`)
            spanlog.textContent=`${enteredUsername} logged in`;
            localStorage.setItem('isLoggedIn', 'true');
            checkLoginStatus();
            //window.location.href = 'bb.html'; // Redirect to a welcome page (optional)
        } else {
            alert(` ${enteredUsername} is not a user`)}*/
     
     
     
     /*const enteredUsername = myshad.getElementById('loginusername').value;
     const enteredPassword = myshad.getElementById('loginpassword').value;
     const lab_disabled=document.getElementById('labs_dis');
     const spanlog=myshad.getElementById('spanlog');*/
     
 /*/ Retrieve the users array from localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users'));
     // Check if the entered username and password match any stored user
     const user = storedUsers.find(user => user.username === enteredUsername && user.password === enteredPassword);
     ////////////////////////////////////
 
 
     lab_disabled.addEventListener('click', function(ev) {
         if (!user) {
             alert("You must be registered to perform this action.");
             ev.preventDefault(); // Prevent the onclick action from firing
             //return;
         }
     
         // Allow the original onclick function to run
         DropDown();*/
        // loginForm.reset();
     });
     ///////////////////////////////////
     
 
 /////////////////////////////////////////
 // Logout Function
 logoutBtn.addEventListener('click', function () {
     localStorage.setItem('isLoggedIn', 'false');
     checkLoginStatus();
 });
 
     ///////////////////////////////////
       
     checkLoginStatus();   
 //loginForm.reset();
      

     return checkLoginStatus
     
 };
/////////////////////////login-mini--------------////


function Mylogin_mini(){

    const mywebc=document.getElementById('template_3');
    const content=mywebc.content.cloneNode(true);
    const divv=document.getElementById('midlle_col');
    divv.appendChild(content);
    const mycomp=divv.querySelector('login-form');
    const myshad=mycomp.shadowRoot;
    const loginForm=myshad.getElementById('form');
    const logoutBtn=myshad.getElementById('logout');
    const logoutForm=myshad.getElementById('outform');
    const spanOut=myshad.getElementById('spanout');
    const spanlog=myshad.getElementById('spanlog');
    ///////////////////////////////////////////////
   
     
    /////////////////////////////////////////////
   // Function to check login status
    function checkLoginStatus() {
       const username = localStorage.getItem('username');
       const isLoggedIn = localStorage.getItem('isLoggedIn');
         let success=false;
       if (username && isLoggedIn === 'true') {
           // User is logged in
           spanOut.textContent = `Welcome back, ${username}!`;
           loginForm.style.display = 'none';
           logoutForm.style.display = 'block';
           success=true;
       } else if (username) {
           // User has an account but is logged out
           spanlog.textContent = `Welcome, ${username}. Please log in.`;
           loginForm.style.display = 'block';
           logoutForm.style.display = 'none';
           success=false
       } else {
           // No user stored in localStorage
           spanlog.textContent = 'Please sign up or log in';
           loginForm.style.display = 'block';
           logoutForm.style.display = 'none';
           success=false;
       }
       return success
   }
   
    //////////////////////////////////////////////////
    const loginbtn=myshad.getElementById('subbtn');
    
    loginbtn.addEventListener('click', function(e) {
       e.preventDefault();
       const enteredUsername = myshad.getElementById('loginusername').value;
       const enteredPassword = myshad.getElementById('loginpassword').value;
       
       const spanlog=myshad.getElementById('spanlog');
       
       
           // Check if the entered username and password match any stored user
           const storedUsers = JSON.parse(localStorage.getItem('users'));
           const user = storedUsers.find(user => user.username === enteredUsername && user.password === enteredPassword);
   
   
           if (user) {
               // Here you can add validation for the username and password
               localStorage.setItem('username', enteredUsername);
               localStorage.setItem('isLoggedIn', 'true');
               checkLoginStatus();
               ////////////////
               
                   /////////////////
           } else {
               
               spanlog.textContent='Please enter both username and password'}
        });
       
    // Logout Function
    logoutBtn.addEventListener('click', function () {
        localStorage.setItem('isLoggedIn', 'false');
        checkLoginStatus();
    });
    
        ///////////////////////////////////
          
        checkLoginStatus();   
    //loginForm.reset();
         
   
        return checkLoginStatus
        
    };
   
///////////////////////////////////////