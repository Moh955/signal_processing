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
         ///////////////////////////////

          ////////////////////////////111-----
        const btnclose=document.createElement('div');
        btnclose.setAttribute('class','close');
        btnclose.innerHTML='&times;'
        form.appendChild(btnclose);
        ////222/////////////////////////////////
         //////////////////////////
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
         loginusername.setAttribute('placeholder','email ...');
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
         logout.setAttribute('class','outt')
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
    
     background-color:  #d1e1fc;
     border-radius: 10px;
     padding:1px 30px 30px 30px;


     position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*border: 3px solid #f1f1f1;*/
  z-index: 9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
     
 }
 

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





#outform{
width:250px;
background-color:  #d1e1fc;

position: fixed;
  top: 20%;
  left: 90%;
  transform: translate(-50%, -50%);
  /*border: 3px solid #f1f1f1;*/
  z-index: 9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
/*---------------------------------------*/
 @media only screen and (max-width: 780px) {
      #outform {
      width:100px;
      font-size:15px;
        position: fixed;
        top: 5%;
        left: 70%;
      }
    }
 @media only screen and (max-width: 780px) {
    #outform .outt{
     background-color: #7b73be;
     color:white;
     border: 1px solid #792099;
     border-radius: 20px;
     padding:3px;
     margin-top:5px;
     margin-right:5px; 
     cursor:pointer;
     font-size:15px;
     width:60px;
            }

    }

/*---------------------------------------*/
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
 
export function Mylogin(){
    const divv_log=document.getElementById('mylogdiv');
    let mycomp_log=divv_log.querySelector('login-form');
    if (!mycomp_log){
 const mywebc_log=document.getElementById('template_3');
 const content_log=mywebc_log.content.cloneNode(true);
 
 divv_log.appendChild(content_log);
  mycomp_log=divv_log.querySelector('login-form');

}
 const myshad_log=mycomp_log.shadowRoot;
 const loginForm=myshad_log.getElementById('form');
 const logoutBtn=myshad_log.getElementById('logout');
 const logoutForm=myshad_log.getElementById('outform');
 const spanOut=myshad_log.getElementById('spanout');
 const spanlog=myshad_log.getElementById('spanlog');
 
 ///////////////////////////closing button/////////////
 const closingbtn=myshad_log.querySelector('.close');
 closingbtn.addEventListener('click', ()=>{
    loginForm.style.display='none';
 })
  
 const headlogbtn=document.getElementById('btnlg');
 headlogbtn.addEventListener('click',()=>{
    loginForm.style.display='block';
 })
 /////////////////////////////////////////////
// Function to check login status
 function checkLoginStatus() {
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const middlecol=document.getElementById('midlle_col');
      let success=false;
    if (email && isLoggedIn === 'true') {
        // User is logged in
        //spanOut.textContent = `Welcome, ${username}!`;
        loginForm.style.display = 'none';
        logoutForm.style.display = 'block';
        success=true;
    } else if (email) {
        // User has an account but is logged out
        spanlog.textContent = `Welcome, ${username}. Please log in.`;
        loginForm.style.display = 'block';
        logoutForm.style.display = 'none';
        middlecol.innerHTML=' Vlsu'
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
 const loginbtn=myshad_log.getElementById('subbtn');
 
 loginbtn.addEventListener('click', function(e) {
    e.preventDefault();
    const enteredEmail = myshad_log.getElementById('loginusername').value;
    const enteredPassword = myshad_log.getElementById('loginpassword').value;
    
    const spanlog=myshad_log.getElementById('spanlog');
    
    
        // Check if the entered username and password match any stored user
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        const user = storedUsers.find(user => user.email === enteredEmail && user.password === enteredPassword);


        if (user) {
            // Here you can add validation for the username and password
            let rname=user.username;
            console.log(rname);
            spanOut.textContent = `Welcome, ${rname}!`;
            localStorage.setItem('email', enteredEmail);
            localStorage.setItem('isLoggedIn', 'true');
            checkLoginStatus();
            ////////////////
           
               /////////// /////////////////
        } else {
            
            spanlog.textContent='Please enter both username and password'}
     });
     ///////////////////////////////////
  
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


window.Mylogin=Mylogin;