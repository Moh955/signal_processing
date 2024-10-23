
import { Lab1, Lab3, Lab2, Lab4 } from "./exp.js";
import { Mysignup} from "./Registation.js";
import { Mylogin } from "./loginnnn.js";
import { checkLoginStatu } from "./exp.js";
import { Tut_sampling, Tut_quant } from "./exp.js";


class mini_menu extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        const shadow=this.attachShadow({mode:'open'});
        const main_list=document.createElement('ul');
        main_list.setAttribute('id','myUL');
        main_list.setAttribute('z-index','5');
        shadow.appendChild(main_list);
        /////////////////////////////
        const item=document.createElement('li');
        const span=document.createElement('span');
        span.setAttribute('class','caret');
        span.textContent='Matlab';
        item.appendChild(span);
        main_list.appendChild(item);
        ////////////////////////////
        
        //////////////////////////
        const branch_list=document.createElement('ul');
        branch_list.setAttribute('class','nested');
        item.appendChild(branch_list);
        //////////////////////////////////////
        const item_2=document.createElement('li');
        item_2.textContent='First-lessson';
        item_2.setAttribute('class','list')
        item_2.setAttribute('id','water');
        branch_list.appendChild(item_2);
        /////////////////
        const item_3=document.createElement('li');
        item_3.textContent='Second-lesson';
        item_3.setAttribute('class','list')
        branch_list.appendChild(item_3);
        ////////////////////////////////...............
        const itemm=document.createElement('li');
        const spann=document.createElement('span');
        spann.textContent='Python';
        spann.setAttribute('class','caret');
        itemm.appendChild(spann);
        main_list.appendChild(itemm);
        ////////////////////////////
        
        //////////////////////////
        const branch_listt=document.createElement('ul');
        branch_listt.setAttribute('class','nested');
        itemm.appendChild(branch_listt);
        //////////////////////////////////////
        const itemm_2=document.createElement('li');
        itemm_2.setAttribute('class','list')
        itemm_2.textContent='Variables';
        branch_listt.appendChild(itemm_2);
        /////////////////
        const itemm_3=document.createElement('li');
        itemm_3.setAttribute('class','list')
        itemm_3.textContent='Function';
        branch_listt.appendChild(itemm_3);
        ////////////////////////////-Tutorials---------

        const itemmm=document.createElement('li');
        const spannn=document.createElement('span');
        spannn.textContent='Tutorials';
        spannn.setAttribute('class','caret');
        itemmm.appendChild(spannn);
        main_list.appendChild(itemmm);
        ////////////////////////////
       
        const branch_listtt=document.createElement('ul');
        branch_listtt.setAttribute('class','nested');
        itemmm.appendChild(branch_listtt);
        //////////////////////////////////////
        const itemm_2_3=document.createElement('li');
        itemm_2_3.setAttribute('class','list')
        itemm_2_3.textContent='First-tutorial';
        branch_listtt.appendChild(itemm_2_3);

       itemm_2_3.addEventListener('click',()=>{ 
          
          if(checkLoginStatu()){
            Tut_sampling()}else{
              alert('You should log in');
              
            }
          
          });
        /////////////////
        const itemm_3_3=document.createElement('li');
        itemm_3_3.setAttribute('class','list')
        itemm_3_3.textContent='Second-tutorial';
        branch_listtt.appendChild(itemm_3_3);


        itemm_3_3.addEventListener('click',()=>{ 
          
          if(checkLoginStatu()){
            Tut_quant()}else{
              alert('You should log in');
              
            }
          
          });

        /////////////////////Labs---------------------

        const itemmm_5=document.createElement('li');
        const spannn_5=document.createElement('span');
        spannn_5.textContent='Labs';
        spannn_5.setAttribute('class','caret');
        itemmm_5.appendChild(spannn_5);
        main_list.appendChild(itemmm_5);
        ////////////////////////////
       
        const branch_listtt_5=document.createElement('ul');
        branch_listtt_5.setAttribute('class','nested');
        itemmm_5.appendChild(branch_listtt_5);
        //////////////////////////////////////
        const itemm_2_5=document.createElement('li');
        itemm_2_5.setAttribute('class','list')
        itemm_2_5.textContent='Lab-1';
        branch_listtt_5.appendChild(itemm_2_5);
        
        itemm_2_5.addEventListener('click',()=>{ 
          
          if(checkLoginStatu()){
            Lab1()}else{
              alert('You should log in');
              
            }
          
          });
        /////////////////
        const itemm_3_5=document.createElement('li');
        itemm_3_5.setAttribute('class','list')
        itemm_3_5.textContent='Lab-2';
        branch_listtt_5.appendChild(itemm_3_5);
        itemm_3_5.addEventListener('click',()=>{ 
          if(checkLoginStatu()){
            Lab2()}else{
              alert('You should log in');
              
            }
          
          });
        ///////////////////////////////////////////////
        const itemm_3_52=document.createElement('li');
        itemm_3_52.setAttribute('class','list')
        itemm_3_52.textContent='Lab-3';
        branch_listtt_5.appendChild(itemm_3_52);
        itemm_3_52.addEventListener('click',()=>{ 
          if(checkLoginStatu()){
            Lab3()}else{
              alert('You should log in');
              
            }
          
          });
////////////////////////////////////////////////
const itemm_3_53=document.createElement('li');
itemm_3_53.setAttribute('class','list')
itemm_3_53.textContent='Lab-4';
branch_listtt_5.appendChild(itemm_3_53);
itemm_3_53.addEventListener('click',()=>{ 
  if(checkLoginStatu()){
    Lab4()}else{
      alert('You should log in');
      
    }
  
  });
        /////////////////////////////Registration////////
        const itemmm_6=document.createElement('li');
        const spannn_6=document.createElement('span');
        spannn_6.textContent='Registration';
        spannn_6.setAttribute('class','caret');
        itemmm_6.appendChild(spannn_6);
        main_list.appendChild(itemmm_6);
        ///////////////////////////////

        const branch_listtt_6=document.createElement('ul');
        branch_listtt_6.setAttribute('class','nested');
        itemmm_6.appendChild(branch_listtt_6);
        ///////////////////////////////////////
        
        const itemm_2_6=document.createElement('li');
        itemm_2_6.setAttribute('class','list');
        itemm_2_6.setAttribute('id','signup');
        itemm_2_6.textContent='Sign up';
        branch_listtt_6.appendChild(itemm_2_6);
        //const ffform=Mysignup();
        itemm_2_6.addEventListener('click',()=>{ 
          
          Mysignup()});
       
          itemm_2_6.addEventListener('click',()=>{
            const ffform=Mysignup();
            ffform.style.display='block';})

        //spannn_6.addEventListener('click',()=>{Mysignup()})
        ///////////////////////////////////////////login------------

        const itemmm_7=document.createElement('li');
        const spannn_7=document.createElement('span');
        spannn_7.textContent='Log in';
        spannn_7.setAttribute('class','caret');
        itemmm_7.appendChild(spannn_7);
        main_list.appendChild(itemmm_7);
        ////////////////////////////////
        const branch_listtt_7=document.createElement('ul');
        branch_listtt_7.setAttribute('class','nested');
        itemmm_7.appendChild(branch_listtt_7);
        //////////////////////////////////////////
        const itemm_2_7=document.createElement('li');
        itemm_2_7.setAttribute('class','list');
        itemm_2_7.setAttribute('id','signin');
        itemm_2_7.textContent='Sign in';
        branch_listtt_7.appendChild(itemm_2_7);
        itemm_2_7.addEventListener('click',()=>{ Mylogin()});


        /////////////////////////////////////////////////////

        const style=document.createElement('style');
        shadow.appendChild(style);
        style.textContent=`


.mobile-menu{
  display: none;
  position:absolute;
  top: 50px;
  right:1px;
  direction: rtl;
  
  background-color: rgba(207, 216, 236, 0.795);
  border: 4px solid white;
  border-radius: 15px;
  height: calc(100vh-50px);
  width:150px;}
  


        ul, #myUL {
  list-style-type: none;
}

#myUL {
  margin: 0;
  padding: 0;
}

.caret {
  cursor: pointer;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
}

.caret::before {
  content: '\u25C0';
  color: rgb(8, 32, 247);
  display: inline-block;
  margin-left: 6px;
  
  
}

.caret-down::before {
  -ms-transform: rotate(270deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari */
  transform: rotate(270deg);  
}

.nested {
cursor: pointer;
  display: none; 
}

.active {
  display: block;
  padding:9px;
}


.list{
padding:8px;}


 .list:hover{
    transform: scale(1.3);
  transition: 0.4s;
  }`;
  
    }
    
 // Method to show the menu
 // Method to toggle visibility of branches
 addToggleFunctionality() {
  const toggler = this.shadowRoot.querySelectorAll('.caret');
  toggler.forEach(item => {
      item.addEventListener('click', () => {
          item.parentElement.querySelector('.nested').classList.toggle('active');
          item.classList.toggle('caret-down');
      });
  });
}


    // Method to toggle visibility of branches
    addToggleFunctionality() {
      const toggler = this.shadowRoot.querySelectorAll('.caret');
      toggler.forEach(item => {
          item.addEventListener('click', () => {
              item.parentElement.querySelector('.nested').classList.toggle('active');
              item.classList.toggle('caret-down');
          });
      });
  }



// Method to close the menu
close() {
  this.removeAttribute('activ');
  // Collapse all open branches when closing
  const nestedItems = this.shadowRoot.querySelectorAll('.nested.active');
  nestedItems.forEach(nested => {
      nested.classList.remove('active');
  });
  const carets = this.shadowRoot.querySelectorAll('.caret-down');
  carets.forEach(caret => {
      caret.classList.remove('caret-down');
  });
}

   // Method to check if click is inside the menu
   contains(target) {
    return this.shadowRoot.contains(target);
}  
}

customElements.define('mobile-menu', mini_menu);
////////////////////////
let myshad;

////////////////////////////view tree automate close------------
function Mysignuppp(elem){
      
  
  const divv=document.getElementById('my_div');
  let mycompmin=divv.querySelector('mobile-menu');
  if(!mycompmin){
  const mywebc=document.getElementById('temp_1');
  const content=mywebc.content.cloneNode(true);
  divv.appendChild(content);
  mycompmin=divv.querySelector('mobile-menu');
  }

  myshad=mycompmin.shadowRoot;
  //const mybtn=myshad.querySelector('#signup');
 
  /*mybtn.addEventListener('click',()=>{
    const ffform=Mysignup();
    ffform.style.display='block';
  })*/
  
  //elem.onclick = null;
  const hamburgerIcon = document.getElementById('hamburger-icon');
  hamburgerIcon.setAttribute('onclick', 'myFunction(this);');
 

  ///////////////////////
 // Add toggle functionality for the caret elements
 mycompmin.addToggleFunctionality();

 
///////////////////////////////
const bbar1=document.querySelector('.bar1');
const bbar2=document.querySelector('.bar2');
const bbar3=document.querySelector('.bar3');
/////////////////////////////

 // Close menu when clicking outside
 document.addEventListener('click', function(event) {
  const isClickInside = mycompmin.contains(event.target) || event.target === hamburgerIcon || event.target === bbar1 || event.target === bbar2 || event.target === bbar3;
   
  if (!isClickInside) {
      mycompmin.close(); // Close the menu
      hamburgerIcon.classList.remove('open');
  } 
});
// Function to close the menu
function closeMenu() {
  mycompmin.close(); // Close the menu
  hamburgerIcon.classList.remove('open');
}
// Function to detect hover out
function setUpHoverClose() {
  // For the menu component
  mycompmin.addEventListener('mouseleave', closeMenu);

  // If using a hamburger icon or other buttons, add mouseleave to those too if necessary
  hamburgerIcon.addEventListener('mouseleave', function(event) {
      // Add a slight timeout to close the menu if hovering out
      setTimeout(function() {
          if (!mycompmin.contains(event.relatedTarget)) {
              closeMenu();
          }
      }, 150); // Adjust delay as needed
  });
}

// Call this function to set up hover detection
setUpHoverClose();
////////////////////////////
}

window.Mysignuppp = Mysignuppp;

function preventClose(event) {
  event.stopPropagation();
}
window.preventClose=preventClose;
///////////////////////
