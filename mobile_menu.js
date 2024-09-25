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
        item.setAttribute('class','caret');
        main_list.appendChild(item);
        ////////////////////////////
        const span=document.createElement('span');
        span.textContent='Materials';
        item.appendChild(span);
        //////////////////////////
        const branch_list=document.createElement('ul');
        branch_list.setAttribute('class','nested');
        item.appendChild(branch_list);
        //////////////////////////////////////
        const item_2=document.createElement('li');
        item_2.textContent='Water';
        branch_list.appendChild(item_2);
        /////////////////
        const item_3=document.createElement('li');
        item_3.textContent='Coffee';
        branch_list.appendChild(item_3);
        ////////////////////////////////...............
        const itemm=document.createElement('li');
        itemm.setAttribute('class','caret');
        main_list.appendChild(itemm);
        ////////////////////////////
        const spann=document.createElement('span');
        spann.textContent='Meals';
        itemm.appendChild(spann);
        //////////////////////////
        const branch_listt=document.createElement('ul');
        branch_listt.setAttribute('class','nested');
        itemm.appendChild(branch_listt);
        //////////////////////////////////////
        const itemm_2=document.createElement('li');
        itemm_2.textContent='chicken';
        branch_listt.appendChild(itemm_2);
        /////////////////
        const itemm_3=document.createElement('li');
        itemm_3.textContent='Rice';
        branch_list.appendChild(itemm_3);
        ///////////////////////////////////
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
  content: '\X15';
  color: black;
  display: inline-block;
  margin-right: 6px;
}

.caret-down::before {
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari */
  transform: rotate(90deg);  
}

.nested {
  display: none;
}

.active {
  display: block;
}
        `
    }
}

customElements.define('mobile-menu', mini_menu);