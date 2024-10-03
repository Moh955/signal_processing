
import { Lab1, Lab2 } from "./exp.js";
import { Mysignup} from "./Registation.js";
import { myForm } from "./Registation.js";
import { Mylogin } from "./loginnnn.js";
import { checkLoginStatu } from "./exp.js";

class mini_menu extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        const shadow=this.attachShadow({mode:'open'});
        const main_list=document.createElement('ul');
        main_list.setAttribute('id','myUL');
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
        /////////////////
        const itemm_3_3=document.createElement('li');
        itemm_3_3.setAttribute('class','list')
        itemm_3_3.textContent='Second-tutorial';
        branch_listtt.appendChild(itemm_3_3);

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
  }
        `
    }
    

    
}

customElements.define('mobile-menu', mini_menu);
////////////////////////


function Mysignuppp(elem){
      
  
  const divv=document.getElementById('my_div');
  let mycompmin=divv.querySelector('mobile-menu');
  if(!mycompmin){
  const mywebc=document.getElementById('temp_1');
  const content=mywebc.content.cloneNode(true);
  divv.appendChild(content);
  mycompmin=divv.querySelector('mobile-menu');
  }

  const myshad=mycompmin.shadowRoot;
  const mybtn=myshad.querySelector('#signup');
  const ffform=myForm.importedF;

  mybtn.addEventListener('click',()=>{
    ffform.style.display='block';
  })
  
  //elem.onclick = null;
  const hamburgerIcon = document.getElementById('hamburger-icon');
  hamburgerIcon.setAttribute('onclick', 'myFunction(this);');
 

  ///////////////////////
let toggler = myshad.querySelectorAll(".caret");
let i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
}

window.Mysignuppp = Mysignuppp;

function preventClose(event) {
  event.stopPropagation();
}
window.preventClose=preventClose;
///////////////////////