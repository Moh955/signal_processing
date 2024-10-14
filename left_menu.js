class left_menu extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        const shadow=this.attachShadow({mode: 'open'});
        const div_left=document.createElement('div');
        div_left.setAttribute('id','div_left');
        shadow.appendChild(div_left);
        const main_list=document.createElement('ul');
        main_list.setAttribute('id','main_list');
        main_list.setAttribute('class','main_list');
       div_left.appendChild(main_list);
        const style=document.createElement('style');
        shadow.appendChild(style);
        ////////////////////////////
        const li_1=document.createElement('li');
        main_list.appendChild(li_1);
        li_1.setAttribute('id','d1');
        li_1.textContent='Signal'
        /////////////////////////////

        const li_2=document.createElement('li');
        main_list.appendChild(li_2);
        li_2.setAttribute('id','d2');
        li_2.textContent='Signal processing'

        ////////////////////////////
        
        const li_3=document.createElement('li');
        main_list.appendChild(li_3);
        li_3.setAttribute('id','d3');
        li_3.textContent='Continuous signal'

        ///////////////////////////

        const li_4=document.createElement('li');
        main_list.appendChild(li_4);
        li_4.setAttribute('id','d4');
        li_4.textContent='Digital signal'

        ////////////////////////

        const li_5=document.createElement('li');
        main_list.appendChild(li_5);
        li_5.setAttribute('id','d5');
        li_5.textContent="Time domain"
        /////////////////////
        const li_6=document.createElement('li');
        main_list.appendChild(li_6);
        li_6.setAttribute('id','d6');
        li_6.textContent='Frequency domain'

        ///////////////////////////
        const li_7=document.createElement('li');
        main_list.appendChild(li_7);
        li_7.setAttribute('id','d7');
        li_7.textContent='Time-frequency domain'
       ////////////////////////

       const li_8=document.createElement('li');
       main_list.appendChild(li_8);
       li_8.setAttribute('id','d8');
       li_8.textContent='Statistics'
        ////////////////////

        
       const li_9=document.createElement('li');
       main_list.appendChild(li_9);
       li_9.setAttribute('id','d9');
       li_9.textContent='Sampling'
        ////////////////////
          
       const li_10=document.createElement('li');
       main_list.appendChild(li_10);
       li_10.setAttribute('id','d10');
       li_10.textContent='Quantization'
        ///////////////////////
        const li_11=document.createElement('li');
        main_list.appendChild(li_11);
        li_11.setAttribute('id','d11');
        li_11.textContent='Fourier series'
        ////////////////////
        const li_12=document.createElement('li');
        main_list.appendChild(li_12);
        li_12.setAttribute('id','d12');
        li_12.textContent='Fourier transform'
       ////////////////////////
       const li_13=document.createElement('li');
        main_list.appendChild(li_13);
        li_13.setAttribute('id','d13');
        li_13.textContent='Wavelete transform'
        ///////////////////////////
        const li_14=document.createElement('li');
        main_list.appendChild(li_14);
        li_14.setAttribute('id','d14');
        li_14.textContent='Principal component analysis'
        ///////////////////////////////
        
        const li_15=document.createElement('li');
        main_list.appendChild(li_15);
        li_15.setAttribute('id','d15');
        li_15.textContent='Singular value decomposition'
        //////////////////////////////////
        const li_16=document.createElement('li');
        main_list.appendChild(li_16);
        li_16.setAttribute('id','d16');
        li_16.textContent='Filteration'
        ///////////////////////////////
        const li_17=document.createElement('li');
        main_list.appendChild(li_17);
        li_17.setAttribute('id','d17');
        li_17.textContent='ECG processing'
        /////////////////////////
        const li_18=document.createElement('li');
        main_list.appendChild(li_18);
        li_18.setAttribute('id','d18');
        li_18.textContent='EEG'
        ///////////////////
        const li_19=document.createElement('li');
        main_list.appendChild(li_19);
        li_19.setAttribute('id','d19');
        li_19.textContent='Image processing'

        //////////////////////////////
       style.textContent=`

#div_left{
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 10px;
  background-color: rgba(99, 142, 206, 0.603); 
  overflow-y: auto;
  overflow-x: hidden;
  height: 800px;
  
}


#div_left::-webkit-scrollbar{
  width: 5px;
 
}
#div_left::-webkit-scrollbar-thumb{
  background-color: rgb(12, 83, 110);
  
}


.main_list {
  background-color: rgba(99, 142, 206, 0.603);
  border: 1px solid rgb(88, 91, 146);
  border-radius: 10px;
    list-style:none;
    padding-left:0;
    margin-top:0;
  
}

#main_list>li{
  cursor: pointer;
  font-size:medium;
  margin-top: 8px;
  font-weight:normal;
  color: aliceblue;
  border: 1px solid beige;
  border-radius: 10px;

  padding:1px;
  width: auto;
  height: auto;
}

li:hover{
  transform: scale(1.05);
  transition: 0.4s;
  border-color: rgb(158, 29, 147);
}`
    }
//////////////////////////////////////////

///////////////////////////////////////////

}


customElements.define('left-menu', left_menu);

///////////////////////////////////////////////





const mycustom=document.querySelector('left-menu');
const shdroot=mycustom.shadowRoot;

const trigger1 = shdroot.querySelector('#d1'); // Adjust as per your element's ID
const trigger2 = shdroot.querySelector('#d2'); // Adjust as per your element's ID
const trigger3 = shdroot.querySelector('#d3'); // Adjust as per another element's ID
const trigger4 = shdroot.querySelector('#d4');
const trigger5 = shdroot.querySelector('#d5');
const trigger9 = shdroot.querySelector('#d9');
const content1=` <div id="hoverDiv" translate="no"><p> <span> Интуитивно: </span> 
    сигнал — это описание того, как один параметр или величина связана с другим параметром или величиной.</p>
    
    <p> <span> Математически:</span> сигнал описывается математически как функция двух или более независимых переменных, например,
    X(t)=25t^2;    X(c,n)=2c+4n;  s(x,y)=2xy+10y^2; </p>
    <p><span>Для цифровых технологий:</span> сигнал — вектор или комбинация векторов (матрица).</p> </div>
    `
    const content2=` <div id="hoverDiv" translate="no"> Обработка сигнала относится к 
    любому виду модификации или анализа сигнала.
        <p><span> Какие ключевые навыки необходимы для работы в сфере обработки сигналов?</span></p>
        <p> Цифровая электроника, аналоговая электроника, численный анализ, статистика и вероятность, 
        теория связи (цифровая связь), теория управления, 
        язык программирования (Python или MATLAB) и теория принятия решений.</p>
    </div>`
  const content3=` <div id="hoverDiv" translate="no">Термин «аналоговый» используется для
   описания формы волны, которая является непрерывной или может принимать непрерывный 
   диапазон значений, и называется непрерывным сигналом, 
   например x(t)= A cos (ωt + θ), где A — амплитуда 
   (действительная);
   ω — радианная частота в радианах в секунду; θ — фазовый угол в радианах. </div>`

   const content4=` <div id="hoverDiv" translate="no">
   Термин дискретный временной сигнал используется для 
   описания сигнала, независимая временная переменная которого квантуется. </div>
   `

   const content5=` <div id="hoverDiv" translate="no"> <p><span>Анализ сигналов обычно подразделяется на 
   анализ во временной, пространственной и частотной областях </span></p>
   Слово «область» в
    обработке сигналов относится к независимой переменной. Сигнал, который использует 
    время в качестве независимой переменной 
   (тип параметра по горизонтальной оси — это домен), 
   называется сигналом во временной области. </div>`
   const content9=` <div id="hoverDiv" translate="no">  Оцифровка значения координаты называется дискретизацей.
   
   <p>Оцифровка значения амплитуды называется квантованием.</p>
   <p> дискретизация преобразует независимую переменную (время в этом примере) из непрерывной в дискретную. 
    квантование преобразует зависимую переменную 
   (напряжение в этом примере) из непрерывной в дискретную.</p>
   </div>`

//-------------------------------------
function signal(trigger, contentt) {
  var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'tom.css';
    link.media = 'all';
    head.appendChild(link);
}
  const hoverDiv = document.createElement('div');
  document.body.appendChild(hoverDiv);
  hoverDiv.style.display = 'none';
  hoverDiv.innerHTML = contentt; // Replace with the desired content

  function ShowUp() {
      hoverDiv.style.display = 'block';
  }

  function hidefull() {
      hoverDiv.style.display = 'none';
  }

  trigger.addEventListener('mouseover', ShowUp);
  trigger.addEventListener('mouseout', hidefull);
}

// Usage example-------------------------------------//


signal(trigger1,content1); // Attach hover functionality to the first trigger
signal(trigger3, content3); // Attach hover functionality to the second trigger

signal(trigger2,content2);
signal(trigger4,content4);

signal(trigger5,content5);
signal(trigger9,content9);