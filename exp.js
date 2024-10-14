function myFunction(x) {
    x.classList.toggle("open");
  }
/////////////////////////////////////////////////////////
function homePage(){
location.reload();
}

//////////////////////////////////////////////////

//////////////////////////check login status//////////////////////////////
export function checkLoginStatu() {
  const username = localStorage.getItem('email');
  const isLoggedIn = localStorage.getItem('isLoggedIn');
    let success=false;
  if (username && isLoggedIn === 'true') {
      // User is logged in
      
      success=true;
  } else if (username) {
      // User has an account but is logged out
      success=false
  } else {
      // No user stored in localStorage
     
      success=false;
  }
  return success
}
  
/////////////////////////////////////////////////////////* When the user clicks on the button,toggle between hiding and showing the dropdown content */

/*function ShowMenu(){
  const mydropDown=document.getElementById("myDropdown");
  mydropDown.style.display='block';
}
function hideMenu(){
  const mydropDown=document.getElementById("myDropdown");
  mydropDown.style.display='none';
}*/
///////////////////////////

// Function to show the menu
/*function toggleshowANDhide(){*/
function Mymenumanager(){
let menuTimeout;
  function ShowMenu() {
    const mydropDown = document.getElementById("myDropdown");
    mydropDown.style.display = 'block';
    clearTimeout(menuTimeout);
  }
  
  // Function to hide the menu
  function hideMenu() {
    const mydropDown = document.getElementById("myDropdown");
    menuTimeout=setTimeout(()=>{mydropDown.style.display = 'none';}, 200);
    
  }
  
  // Get the trigger and menu elements
  const lab_disabled = document.getElementById('labs_dis');
  const mydropDown = document.getElementById("myDropdown");
  
  // Add mouseover and mouseout event listeners to the trigger
  lab_disabled.addEventListener('mouseover', ShowMenu);
  lab_disabled.addEventListener('mouseleave', function(event) {
    // Only hide the menu if the mouse has left both the trigger and the menu
    if (!mydropDown.contains(event.relatedTarget)) {
      hideMenu();
    }
  });
  
  // Add mouseenter and mouseleave event listeners to the menu
  mydropDown.addEventListener('mouseenter', ShowMenu);
  mydropDown.addEventListener('mouseleave', function(event) {
    // Only hide the menu if the mouse has left both the menu and the trigger
    if (!lab_disabled.contains(event.relatedTarget)) {
      hideMenu();
    }
  });}

/////////////////////////////
//////////////////////////////////////////////////////
function DropDown() {
  const lab_disabled=document.getElementById('labs_dis');
  const mydropDown=document.getElementById("myDropdown");
  if(checkLoginStatu()){
  mydropDown.classList.add("show");
  Mymenumanager()

} else{
    alert('Log in to access labs')
  }
}

//////////////The function devoted for hidding menu on moveout//////////////////////

/////////////////////333333////////////////////

const trigger1 = document.getElementById('d1'); // Adjust as per your element's ID
const trigger2 = document.getElementById('d2'); // Adjust as per your element's ID
const trigger3 = document.getElementById('d3'); // Adjust as per another element's ID
const trigger4 = document.getElementById('d4');
const trigger5 = document.getElementById('d5');
const trigger9 = document.getElementById('d9');
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
////////////////////////// Лаб 1................................./////////////////////////////////////////////////

export function Lab1(){
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

  const element=document.getElementById('midlle_col');
element.innerHTML=`<div lang='ru' translate="no"> 

      <h2>Лабораторная работа - 1 </h2>
     
<h3 style='margin-top:10px; margin-bottom:40px;'>Операции над векторами в системе MATLAB</h3>
 <h4>Цель работы: <span style="font-weight:normal"> Изучение основных операций c векторами  в системе MATLAB</span></h4>

<ul id="main_ul" lang="ru">
<li> <h5>Основные положения</h5> </li>

 <p> В MATLAB создание вектора или матрицы является достаточно простой задачей. 
 При вводе значения векторов и матриц перечисляются в квадратных скобках. 
    Для разделения столбцов используются пробелы, для разделения строк – знак «;».
    <ul class="simple">
        <h5>1.1 Создание вектора</h5> 
        Вектор может быть строкой (горизонтальным вектором) или столбцом (вертикальным вектором).
        <li> <h5>Строка (горизонтальный вектор):</h5> 
            v = [1, 2, 3, 4, 5];  % Вектор-строка с названием v и с элементами от 1 до 5</li>

       <li> <h5>Столбец (вертикальный вектор): </h5> 
        v = [1; 2; 3; 4; 5];  % Вектор-столбец с элементами от 1 до 5</li>
       <li> <h5>Линейный вектор с шагом:</h5>
         v = 1:2:9;  % Вектор-строка с шагом 2: [1 3 5 7 9] </li>
       <li> <h5>Логарифмический вектор (линейная сетка):</h5>  v = linspace(0, 1, 5);  % Вектор с 5 элементами от 0 до 1: [0 0.25 0.5 0.75 1] </li>
       <li> <h5> Создание вектора в MATLAB без использования встроенных функций</h5></li>
       <li><span>Для создания вектора в MATLAB без использования встроенных функций, таких как, 
        linspace, или других готовых решений, необходимо самостоятельно реализовать алгоритм, 
        который шаг за шагом заполнит элементы вектора.</span>
        <p>1. Определение параметров для вектора: Начальное значение, Конечное значение, 
         Шаг и количества элементов в векторе.
          <p>( <var>Количества элементов</var>=floor(<var>Начальное значение</var> - <var>Конечное значение</var>)/<var>Шаг</var>+1 )</p>
        </p>
        <p>2. Инициализация пустого вектора:
          <p>В MATLAB можно заранее выделить память для вектора с помощью массива из нулей 
            (чтобы избежать динамического изменения длины вектора в цикле). 
            Для инициализации пустого вектора используем команду zeros(1, n), где 
            n — это количество элементов в векторе.</p>

        </p>

        <p> 3. Заполнение вектора с помощью цикла
          <p>Используя цикл for, мы будем последовательно присваивать каждому элементу вектора значение, начиная с 
            начального значения и увеличивая его на шаг в каждом шаге цикла.</p>
          
        </p> <h5> Например: Построение Скрипта для создания вектора</h5>
        <pre>% Параметры для создания вектора
          a = 1;   % начальное значение
          b = 10;  % конечное значение
          step = 2; % шаг
          % 1. Вычисление количества элементов в векторе
          n = floor((b - a) / step) + 1;
          % 2. Инициализация вектора нулями
          v = zeros(1, n);
          % 3. Заполнение вектора с помощью цикла
          current_value = a;
          for i = 1:n
              v(i) = current_value;  % присваиваем значение текущему элементу вектора
              current_value = current_value + step;  % увеличиваем текущее значение на шаг
          end
        </pre>
        <h5> Например: Построение функции для создания вектора (вектор-строка)</h5>
        <pre>
          function  v=create_matrix(a, b, step)
          % 1. Вычисление количества элементов в векторе
          n = floor((b - a) / step) + 1;
          % 2. Инициализация вектора нулями
          v = zeros(1, n);
          % 3. Заполнение вектора с помощью цикла
          current_value = a;
          for i = 1:n
              v(i) = current_value;  % присваиваем значение текущему элементу вектора
              current_value = current_value + step;  % увеличиваем текущее значение на шаг
          end
         end
        </pre>
        <h5>Задание 1:  <span style="font-weight: normal;">Создайте программный скрипт и функцию, 
        которые можно использовать для создания вектор-столбеца (без транспонирования).</span> </h5>
      </li>
      <li><h5>Индексация векторa</h5>
      <p>Векторная индексация в MATLAB — это способ доступа к элементам массива или вектора с 
      использованием индексов в виде векторов.</p>
      <p>Допустим, у вас есть вектор: x=[1 2 4 6 7 8 9 3]; Чтобы выбрать определенные элементы (например, первый), 
      испольузем x(1); 
      <p>результат x(4) будет 6; </p>
      <p>результат x([1 3 6]) будет 1     4     8 </p>
      <p> x(1:3);  % Подмножество с 1 по 3 элемент</p>
      </p>
    <p style="font-weight: bold;">Логическая индексация
      <p> Можно использовать логические операторы для индексации, так как > , < , >, = </p> 
      Например: <pre>
        >> A=[20 10 19 30 11 50];
        >> A(A>20)
        ans = 30    50
      </pre>
    </p>
    </ul>
    <li><h5> Преобразование вектора</h5></li>
    <ul class="simple">
     <li> <span style="font-weight: bold;">Изменение элементов вектора с помощью индексации:</span>
      <p>индексация в основным используется для изменения элементов вектора. Например:</p>  
      <pre>
        A=[20 10 19 30 11 50]
         A([1 2 3])=[100 200 300]

         %% Результат будет:
         A = 20    10    19    30    11    50
          A = 100   200   300    30    11    50
      </pre>
      <h5> Задание 2: <span style="font-weight: normal;">Допустим  
      A=[3 5 6 2 8 2.4 8 9 0 3 7 1]; Удалите все элементы, которые больше чем 4</span> </h5>
    </p>
      </li>
      
      <li> 
        
        <h5>Преобразование вектора в матрицу с использованием встроенной функции reshape()</h5>
      
      <p>В MATLAB функция reshape() позволяет преобразовать вектор в матрицу определенного размера. Она изменяет размер массива без изменения порядка элементов. 
        Важное требование: количество элементов в исходном векторе должно соответствовать количеству элементов в результирующей матрице.</p>
        <pre> Синтаксис:  B = reshape(A, m, n);
          A — исходный вектор или массив.
          m — количество строк в новой матрице.
          n — количество столбцов в новой матрице.
          Пример: Преобразование вектора в матрицу Допустим, у нас есть вектор A: A = [1 2 3 4 5 6];
          Мы хотим преобразовать этот вектор в матрицу размером 2x3 (2 строки, 3 столбца): B = reshape(A, 2, 3);
          Результат: 
          B =
         1     3     5
         2     4     6
        </pre>

         <p><h5> Задание 3: <span style="font-weight: normal;">Допустим  A=[3 5 6 2 8 2.4 8 9 0 3 7 1];
          Используйте функцию reshape(), чтобы преобразовать вектор (А) в матрицу </span> </h5></p>

        <h5> Задание 4: <span style="font-weight: normal;">Разработайте свою собственную 
        функцию для преобразования вектора в матрицу в MATLAB. </span> </h5>
      
      </li>
    </ul>
    <li> <h5>Операции с векторами </h5></li>
    <ul class="simple">
         <h5>Арифметические операции, Сложение и вычитание:</h5>
<pre> >> v1 = [1 2 3];
v2 = [4 5 6];
sum_v = v1 +    v2=5     7     9;
diff_v = v1 - v2= -3    -3    -3;</pre>
        <p> 1- Покомпонентное умножение: prod_v = v1.*v2;</p>
        <p> 2-  Скалярное произведение векторов ( C = A(1)*B(1) + A(2)*B(2) + A(3)*B(3)): 
        dot_product = dot(A, B);</p>
         <p>3- Векторное произведение (только для трёхмерных векторов): cross_product = cross(v1, v2);</p>
        <p> 4- Покомпонентное деление: div_v = v1./ v2; </p>
        <p> 5- Возведение элементов вектора в степень: pow_v = v1.^2;</p>
          
        <h5>Анализ векторов</h5>
        <p> 1- Длина вектора:  len = length(v);  % Возвращает количество элементов в векторе;</p>
        <p> 2-Сумма элементов вектора: sum_v = sum(v);</p>
        <p> 3-Среднее значение элементов вектора: avg = mean(v);</p>
        <p> 4-Максимальное и минимальное значения:max_val = max(v); min_val = min(v);</p>

        <li><h5> Соединение векторов</h5>
        <p>1- Горизонтальная конкатенация: v3 = [v1, v2];  % Соединение векторов-строк в один </p>
        <p> 2- Вертикальная конкатенация: v3 = [v1; v2];  % Соединение векторов-столбцов </p>

       <h5> Задание 5: <span style="font-weight: normal;"> 
       Разработайте функцию, которая может вычислять среднее значение, 
       минимум, максимум и длину вектора в MATLAB.</span></h5> </li>
        </ul>

    

    <li> <h5>Порядок выполнения лабораторной работы </h5></li>
    <ul class="simple"><h5>Содержание отчета</h5> 
   <li>1. Титульный лист</li>
   <li>2. Цель работы.</li>
   <li>3. Результаты Задания 1,2,3,4,5 </li>
   <li>4. Выводы.</li>
   </ul>
   
   <ul class="simple"> <h5>Контрольные вопросы</h5>
    <li>1. Как осуществляется ввод вектора-строки?</li>
    <li> 2. Как осуществляется ввод вектора-столбца?</li>
    <li>3. Как определяется индексация элементов векторa? </li>
   </ul>
</ul>
</div>
`}


////////////////////////////////////////////////////////////
export function Lab2(){
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

  const element=document.getElementById('midlle_col');
element.innerHTML=`<div lang='ru' translate="no"> 

      <h2>Лабораторная работа - 2 </h2>
     
<h3 style='margin-top:10px; margin-bottom:40px;'>Операции над матрицами в системе MATLAB</h3>
 <h4>Цель работы: <span style="font-weight:normal"> Изучение основных операций c матрицами  в системе MATLAB</span></h4>

<ul id="main_ul" lang="ru">
<li> <h5>Основные положения</h5> </li>

 <p> В MATLAB создание  матрицы является достаточно простой задачей. При вводе значения  матриц перечисляются в квадратных скобках. 
    Для разделения столбцов используются пробелы, для разделения строк- знак «;».
    <ul class="simple">
        <h5>1.1 Создание матриц</h5> 
        Создание матриц может осуществляться вручную,
         с использованием встроенных функций или
        с помощью написания собственных скриптов и функций.
        <li> <h5>Создание матрицы вручную:</h5> 
            в MATLAB осуществляется с использованием квадратных скобок, 
            где элементы разделяются запятыми
             или пробелами, а строки — точкой с запятой. Пример: A=[1 2 3; 4 4 4; 1 2 3]; % Матрица 3x3
             <pre>
             A =
                  1     2     3
                  4     4     4
                  1     2     3 
                  </pre></li>

       <li> <h5>Создание матрицы с использованием встроенных функций в MATLAB: </h5> 

       <div>Нулевая матрица — все элементы равны нулю: Z = zeros(3, 4); % Создает нулевую матрицу 3x4</div>
       <div>Единичная матрица — матрица с единицами на главной диагонали: I = eye(4); % Создает единичную матрицу 4x4
       <pre>
       I =

          1     0     0     0
          0     1     0     0
          0     0     1     0
          0     0     0     1</pre> </div>
        <div> Матрица, заполненная единицами:O = ones(2, 5); % Создает матрицу 2x5, заполненную единицами
        </div>
        <div> Случайная матрица — элементы матрицы выбираются случайным образом (Случайные числа от 0 до 1): R = rand(3, 3); % Случайная матрица 3x3 с числами от 0 до 1
 </div>
<div> Случайная матрица (Случайные целые числа:) R_int = randi([1, 10], 3, 3); % Матрица 3x3 со случайными целыми числами от 1 до 10
</div>
<div>Диагональная матрица — матрица, в которой элементы главной диагонали заданы вектором: D = diag([1, 2, 3, 4]); % Диагональная матрица с элементами 1, 2, 3, 4 на главной диагонали
</div>
 </li>


 <li> <h5> Индексация матрицы в MATLAB </h5>
 <p>Индексация матриц в MATLAB — это мощный инструмент, позволяющий эффективно работать с данными, извлекать, изменять и 
 анализировать элементы матриц в зависимости от потребностей задачи.
 Индексация матрицы в MATLAB позволяет обращаться к отдельным элементам, строкам, 
 столбцам или подматрицам. </p>
 <h5> Индексация отдельных элементов </h5>
 <p>Чтобы обратиться к конкретному элементу матрицы, укажите его индекс в формате A(row, column), 
 где row — номер строки, а column — номер столбца.
 A = [1, 2, 3; 4, 5, 6; 7, 8, 9];
  element = A(2, 3); % Получение элемента во 2-й строке и 3-м столбце (значение 6)</p>
  <h5> Индексация строк и столбцов </h5>
  <p>Чтобы получить всю строку или столбец матрицы, используйте двоеточие :
  Получение строки:
  row_vector = A(2, :); % Получение второй строки: [4, 5, 6]</p>
<p> Получение столбца:
column_vector = A(:, 3); % Получение третьего столбца: [3; 6; 9]
</p>
<h5> Индексация подматриц </h5>
<p>Вы можете извлечь подматрицу, указывая диапазон индексов для строк и столбцов.
sub_matrix = A(1:2, 2:3); % Получение подматрицы: [2, 3; 5, 6]</p>
<h5> Логическая индексация </h5>
 <p> Логическая индексация позволяет выбирать элементы на основе условия.
  A = [1, 2, 3; 4, 5, 6; 7, 8, 9]; 
  logical_index = A > 5; % Создание логического массива, где элементы больше 5
selected_elements = A(logical_index); % Извлечение элементов, удовлетворяющих условию (значения 6, 7, 8, 9)</p>
<h5> Изменение элементов матрицы</h5>
<p>Индексация также позволяет изменять значения в матрице. 
 A = [1, 2, 3; 4, 5, 6; 7, 8, 9]; 
A(1, 2) = 10; % Изменение элемента в первой строке и втором столбце на 10</p>
         </li>

     
       
       <li> <h5> Преобразование матриц </h5>
       
          Функция reshape в MATLAB используется для изменения формы матрицы без
           изменения её данных. Она позволяет преобразовать матрицу одного размера в матрицу другого размера,
           при этом количество элементов должно оставаться неизменным.
       
           <p> Синтаксис: B = reshape(A, new_rows, new_cols);
           B = reshape(A, new_rows, new_cols);
           A — исходная матрица.
new_rows и new_cols — новые размеры для матрицы.
B — новая матрица с заданными размерами.

           </p>

           <p>Пример : Преобразование матрицы 3x3 в вектор
           <p> A = [1, 2, 3; 4, 5, 6; 7, 8, 9]; % Исходная матрица 3x3
B = reshape(A, 9, 1);             % Преобразование в вектор из 9 элементов
disp(B);
</p>

<p>Пример: Преобразование матрицы 2x4 в матрицу 4x2</p>
<p> A = [1, 2, 3, 4; 5, 6, 7, 8]; % Исходная матрица 2x4
B = reshape(A, 4, 2);          % Преобразование в матрицу 4x2
disp(B);
</p>
           </p>
       </li>
    
   
     <li> <h5> Задание 1:  <span style="font-weight: normal;">Создайте программный скрипт и функцию, которые можно использовать для создания 2D матриц.</span> </h5></li>
      <li><h5>Задание 2:  <span style="font-weight: normal;">Преобразуйте матрицу 4x5 с помощью функции reshape() в столбец-вектор.</span> </h5></li>
      <li><h5>Задание 3:  <span style="font-weight: normal;">Преобразуйте матрицу 4x5 с помощью функции reshape() в в строку-вектор.</span> </h5></li>
      <li><h5> Задание 4:  <span style="font-weight: normal;">Создайте программную  функцию, которая можно использовать для создания 3D матриц.</span> </h5></li>
      <li><h5> Задание 5:  <span style="font-weight: normal;">Создайте программную функцию, которая можно использовать для преобразования 3D матрицы в 2D матрицы.</span> </h5></li>
    
      </li>
 
        </ul>

    <li> <h5>Порядок выполнения лабораторной работы </h5></li>
    <ul class="simple"><h5>Содержание отчета</h5> 
   <li>1. Титульный лист</li>
   <li>2. Цель работы.</li>
   <li>3. Результаты Задания 1,2,3,4,5 </li>
   <li>4. Выводы.</li>
   </ul>
   
   <ul class="simple"> <h5>Контрольные вопросы</h5>
    <li>1. Как создать матрицу размером 3×4, заполненную единицами, с использованием встроенной функции MATLAB?</li>
    <li> 2. Напишите скрипт для создания случайной матрицы размером 
5×5, элементы которой находятся в диапазоне от 0 до 100.</li>
    <li>3. Как определяется индексация элементов матрицы? </li>
   </ul>
</ul>
</div>
`
}

//////////lab3/////////////////////
export function Lab3(){
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

  const element=document.getElementById('midlle_col');
element.innerHTML=`<div lang='ru' translate="no"> 

      <h2>Лабораторная работа - 3 </h2>
     
<h3 style='margin-top:10px; margin-bottom:40px;'>Дискретизация сигналов с помощью MATLAB</h3>
 <h4>Цель работы: <span style="font-weight:normal">  Изучить процесс 
 дискретизации сигналов, понять влияние частоты 
 дискретизации на восстановление сигнала.</span></h4>

<ul id="main_ul" lang="ru">
<li> <h5>Теоретические сведения</h5> </li>
<p>


Дискретизация — это процесс преобразования непрерывного сигнала в последовательность отсчетов, которые можно анализировать и обрабатывать с помощью компьютеров и цифровых систем. Частота дискретизации (количество отсчетов в секунду) играет ключевую роль в сохранении информации о сигнале. Важно соблюдать теорему Котельникова–Шеннона, согласно которой частота дискретизации должна быть больше удвоенной максимальной частоты спектра сигнала, чтобы избежать эффекта алиасинга (наложения спектров).

Теорема Найквиста—Шеннона—Котельникова: Теорема гласит (упрощенно), что для сигнала, представленного последовательностью дискретных отсчетов, точное восстановление возможно, только если частота дискретизации более чем в 2 раза выше максимальной частоты в спектре сигнала.

субдискретизация - это процесс уменьшения разрешения сигнала  путем сокращения количества сэмплов на определенном расстоянии друг от друга.
Передискретизация - Это дискретизация сигнала с частотой, превышающей основную частоту дискретизации. 
идеальная дискретизация - частота дискретизации равна максимальной частоте в спектре сигнала.
</p>
<li><h5>Основные этапы работы</h5></li>

<p>Создание непрерывного сигнала.</p>
<pre>
A = 1; % Амплитуда
 f = 5; % Частота сигнала, Гц 
t = 0:0.0001:1; % Временной интервал (очень мелкий шаг 
%для моделирования непрерывного    
% сигнала) Генерация непрерывного синусоидального сигнала 
s = A * sin(2 * pi * f * t); 
figure; % Визуализация непрерывного сигнала 
plot(t, s); 
title('Непрерывный сигнал'); 
xlabel('Время, с'); 
ylabel('Амплитуда');
</pre>
  <ul class="simple">
<li> <h5> Задание 1:  <span style="font-weight: normal;">Рассмотрим аналоговый сигнал: 
<pre> x(t)=3 cos(⁡100πt); </pre>
Определите минимальную частоту дискретизации, необходимую для избежания наложения спектров.
Предположим, что сигнал дискретизируется с частотой Fs = 200 Гц. Какой дискретный по времени сигнал получается после дискретизации?
</span> </h5></li>

<li> <h5> Задание 2:  <span style="font-weight: normal;">Рассмотрим аналоговый сигнал: 
<pre>x(t)=3 cos⁡(50πt)+10 cos⁡(100πt)+3 cos⁡(150πt );</pre>
Какова частота Найквиста для этого сигнала?</span> </h5></li>

<li> <h5> Задание 3:  <span style="font-weight: normal;">Сгенерируйте синусоидальный сигнал с частотой 6 Гц и дискретизируйте сигнал с различными частотами дискретизации. Постройте график оригинального сигнала и дискретизированного сигнала, а затем сравните их.
</span> </h5></li>
<li> <h5> Задание 4:  <span style="font-weight: normal;">Используйте Simulink Toolbox в Matlab для генерации синусоидального сигнала, сэмплера и исследуйте влияние   субдискретизации, передискретизации, идеальной дискретизации на сигналы.
</span> </h5></li>
</ul>
 

    <li> <h5>Содержание отчета </h5></li>
    <ul class="simple">
   <li>1. Титульный лист</li>
   <li>2. Цель работы.</li>
   <li>3. Результаты Задания 1,2,3,4 </li>
   <li>4. Выводы.</li>
   </ul>
   
   
</ul>
</div>
`
}
/////////////////////////////
window.myFunction=myFunction;
window.Lab1=Lab1;
window.Lab2=Lab2;
window.Lab3=Lab3;
window.DropDown=DropDown;
window.homePage=homePage;
window.checkLoginStatu=checkLoginStatu;
