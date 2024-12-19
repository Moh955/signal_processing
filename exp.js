function myFunction(x) {
    x.classList.toggle("open");
  }
/////////////////////////////////////////////////////////
function homePage(){
location.reload();
}

//////////////////////////////////////////////////
function styling(){
  let cssId = 'myCss';  // you could encode the css path itself to generate id..
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
}
//////////////////////////check login status//////////////////////////
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
 const trig = document.getElementById('labs_dis');
const dropdown = document.getElementById("myDropdown");
//-------------------------------
const trig1 = document.getElementById('tut_id');
const dropdown1 = document.getElementById("tut_dropdown");
/////------------------------------------------------
const trig2= document.getElementById('pyth_id');
const dropdown2 = document.getElementById("pyth_dropdown");
///--------------------------------------------------
const trig3= document.getElementById('mat_id');
const dropdown3 = document.getElementById("mat_dropdown");



function Mymenumanager(trig, dropdown){
let menuTimeout;

  function ShowMenu() {
   dropdown.style.display = 'block';
    clearTimeout(menuTimeout);
  }
  // Function to hide the menu
  function hideMenu() {
    
    menuTimeout=setTimeout(()=>{dropdown.style.display = 'none';}, 200);
    
  }
  // Get the trigger and menu elements
  // Add mouseover and mouseout event listeners to the trigger
  trig.addEventListener('mouseover', ShowMenu);
trig.addEventListener('mouseleave', function(event) {
    // Only hide the menu if the mouse has left both the trigger and the menu
    if (!dropdown.contains(event.relatedTarget)) {
      hideMenu();
    }
  });
  
  // Add mouseenter and mouseleave event listeners to the menu
  dropdown.addEventListener('mouseenter', ShowMenu);
  dropdown.addEventListener('mouseleave', function(event) {
    // Only hide the menu if the mouse has left both the menu and the trigger
    if (!trig.contains(event.relatedTarget)) {
      hideMenu();
    }
  });}

/////////////////////////////
//////////////////////////////////////////////////////
function DropDown(trig, dropdown) {
  if(checkLoginStatu()){
  dropdown.classList.add("show");
  Mymenumanager(trig, dropdown)

} else{
    alert('Log in to access labs')
  }
}

//////////////The function devoted for hidding menu on moveout//////////////////////

////////////////////////// Лаб 1................................./////////////////////////////////////////////////

export function Lab1(){
  styling()

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

  styling();
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
  styling();
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

export function Tut_sampling(){
 styling();
 const element=document.getElementById('midlle_col');
element.innerHTML=`<div lang='en' > 
   <h2> Sampling and quantization </h2>
<p>In order to create a signal which is digital, we need to convert continuous data into digital form. 
Sampling and quantization are necessary steps in signal processing in  order to convert continuous signal 
into digital form.</p> 


<ul id="main_ul" >
<li><h5>Definition of sampling</h5>
<p>	Sampling: Digitizing the co-ordinate value is called sampling, whereas digitizing the 
amplitude value is called quantization. Sampling is done prior to the quantization process. 
Sampling converts the independent variable
 (time in this example) from continuous to discrete.. The sampling 
theorem guarantees that an analog signal can be in theory 
perfectly recovered as long as the sampling rate is at least twice of the highest-frequency 
component of the analog signal to be sampled.</p>

</li>
<li><h5>Advantages of downsampling </h5>

<p> Downsampling reduces the size required for storing and transmitting signals, and in result, 
makes signal processing faster. It should be noticed that downsampling faster, but upsampling more precise.
</p>

</li>
</ul>

</div>`
}
/////////////////////////
export function Tut_quant(){
  styling();
  const element=document.getElementById('midlle_col');
 element.innerHTML=`<div lang='en' > 
    <h2> Quantization </h2>
 <p>The process of converting analog voltage with infinite precision to finite precision is 
 called the quantization process. For example, if the digital processor has only a 3-bit word, the amplitudes can be converted into eight different levels. 
A unipolar quantizer deals with analog signals ranging from 0 V to a 
positive reference voltage, and a bipolar quantizer has an analog signal 
range from a negative reference to a positive reference.</p>
<li>The notations and general rules for quantization are: The symbol Δ is the step size of the quantizer 
or the ADC resolution.
∆=(x_max-x_min)/L ; where xmax and xmin are the maximum value and minimum values, 
respectively, of the analog input signal x. </li>
<li>The symbol L denotes the number of quantization levels, which is determined by Eq.  L=2^m where m is the number of bits used in ADC.
i=round((x-x_min)/∆);  x_q=x_min ⁡ +i∆; </li> 
<li>Finally, x_q indicates the quantization level, and i is an index corresponding to the binary code.</li>
<li>When the DAC outputs the analog amplitude, x_q with finite precision, 
it introduces the quantization error defined as  
 e_q=x_q-x. The quantization error is bounded by half of the step size, that is, (-∆)/2<x_q≤∆/2  
 </li>. 
 <li>In practice, we can empirically confirm that the quantization error appears
  in uniform distribution when the step size is much smaller than the dynamic range 
  of the signal samples and there are a sufficiently large number of samples.</li>
 
 </div>`
 }

 export function Lab4(){
  styling();
  const element=document.getElementById('midlle_col');
 element.innerHTML=`<div lang='ru'  translate="no"> 
 <h2>Лабораторная работа - 4</h2>
    <h2>   Квантование сигналов  </h2>
    <ul id="main_ul" lang="ru">

<h4>Цель работы: <span style="font-weight:normal">  Изучить процесс 
квантования аналоговых сигналов, 
провести квантование с использованием 
MATLAB и проанализировать результаты.</span></h4>
<ul id="main_ul" lang="ru">
<li><h5>Теоретическая часть</h5></li>
<p> В процессе АЦП амплитуды преобразуемого аналогового сигнала имеют 
бесконечную точность. Непрерывная амплитуда должна быть преобразована в 
цифровые данные с конечной точностью, что называется квантованием.

Квантование — это процесс преобразования аналогового сигнала в цифровую форму 
с определённой точностью. Оно состоит в том, что значения сигнала на определённых интервалах 
амплитуды заменяются фиксированными дискретными значениями, что приводит к потере точности.

Квантование можно представить как процесс округления значений амплитуды сигнала до 
ближайшего уровня, который доступен для представления. Если сигнал принимает ( N ) 
уровней квантования, то диапазон амплитудного сигнала делится на ( N ) равных интервалов, 
и каждое значение сигнала будет округляться к ближайшему уровню.</p>

<li> <h5>Общие правила квантования</h5></li>
<ul class="simple">
<li> Разделение диапазона амплитуд на уровни (диапазон квантования): <i>∆=(x<sub>max</sub> - x<sub>min</sub>)/L</i>; 
где x <sub>max</sub>- максимальное, x <sub>min</sub>- минимальное значение амплитуды аналогового сигнала.
Символ L обозначает количество уровней квантования, которое определяется уравнением 
L=2<sup>m</sup>, где m — количество бит, используемых в АЦП.</li>
<li> Определение индекса, соответствующего двоичному коду, по следующей формуле:<i>i= round((x - x<sub>min</sub>)/∆)</i>;</li>
<li> Определение каждого уровня квантования следующим образом:<i> x<sub>q</sub>=x<sub>⁡min</sub> +i∆;</i> где x<sub>q</sub> указывает уровень квантования, а <i>i</i> — индекс, 
соответствующий двоичному коду.</li>
<li> Ошибка квантования — это разница между оригинальным значением аналогового сигнала и его квантованным значением. 
Чем меньше количество уровней квантования, тем большая ошибка может возникнуть.
Ошибка квантования <i>(e)</i> может быть выражена как: e<sub>q</sub> = x<sub>q</sub> - x. 

Эмпирически ошибка квантования проявляется в 
равномерном распределении, когда размер шага намного меньше 
динамического диапазона выборок сигнала и имеется достаточно 
большое количество выборок.</li>
<li> Среднеквадратичная ошибка квантования: Среднеквадратичная ошибка квантования 
— это важный параметр для оценки качества квантования. Она показывает среднюю величину 
ошибки на каждом уровне квантования. Выражается как: <p><i>P<sub>q</sub>= 1/12 .∆<sup>2</sup></p>. заменяя ∆: 
<i>P<sub>q</sub> = (1/12)(2A<sub>max</sub>/L)<sup>2</sup> = A<sup>2</sup><sub>max</sub>/3L<sup>2</sup></i>
</i>
<li> Мощность сигнала: <i>P<sub>s</sub>= A<sup>2</sup><sub>max</sub>/3</i></li>
</li>
<li>Мощность исходного сигнала можно рассчитать по следующей формуле: </li>
<li>Отношение мощности сигнала к мощности шума квантования (SNR) из-за квантования можно выразить 
как:SNR= <i>P<sub>s</sub>/P<sub>q</sub> = L<sup>2</sup></i>, 
SNR в децибелах (дБ) определяется по формуле: 
SNR<sub>dB</sub> = 10log<sub>10</sub>(L<sup>2</sup>), or SNR<sub>dB</sub> = 10.79 + 20log<sub>10</sub>(x<sub>rms</sub>/Δ)
</li>
</ul>
<li> <h5> Задания</h5></li>
  <h5>Задание 1:<span style="font-weight: normal;">
Предположив, что 3-битный канал АЦП принимает аналоговый 
входной сигнал в диапазоне от 0 до 5 В, определите
следующее:</span></h5>
<ul class="simple">
<li> Количество уровней квантования</li>
<li>Размер шага квантователя или разрешение</li>
<li>Уровень квантования, когда аналоговое напряжение составляет 3,2 В</li>
<li>Определите ошибку квантования, когда аналоговый вход равен 3,2 В.</li>
<li> Двоичный код, выдаваемый АЦП</li>

<h5>Задание 2: <span style="font-weight: normal;"> Предположим, что дана синусоидальная волна с частотой 90 Гц,
 <i>x(t)= 5 * sin(2π*100t)</i>, дискретизиро- ванная с частотой 5000 Гц </span> </h5>


<li>Напишите программу MATLAB для квантования x(t) с использованием 4-битного
 квантователя для получения и построения графика 
квантованного сигнала xq, предполагая, что диапазон сигнала составляет от 5 до 5 В.</li>
<li>Рассчитайте SNR из-за квантования</li>
</ul>
<p>===============================================================================</p>

<li> <h5>Содержание отчета </h5></li>

<ul class="simple">
<li> Титульный лист</li>
<li> Цель работы.</li>
<li> Результаты Задания 1,2 </li>
<li> Выводы.</li>
</ul>
</ul>
    </div>`
 }
////////////////////////////
export function Lab5(){
  styling();
  const element=document.getElementById('midlle_col');
 element.innerHTML=`<div lang='ru'  translate="no"> 
 <h2>Лабораторная работа - 5</h2>
    <h2>   Сегментация сигналов с использованием MATLAB  </h2>
    <ul id="main_ul" lang="ru">

<h4>Цель работы: <span style="font-weight:normal"> Изучить методы сегментации сигналов,
 а также научиться выделять полезные фрагменты сигнала для дальнейшей обработки.</span></h4>
<ul id="main_ul" lang="ru">
<li><h5>Теоретическая часть</h5></li>
<p> Сегментация сигналов — это процесс разбиения сигнала на отдельные фрагменты 
(сегменты), которые могут представлять собой части интересующих нас событий или структур в сигнале. 
Сегментация полезна, например, в таких задачах как анализ 
аудио или временных рядов, диагностика с использованием биосигналов (ЭКГ, ЭЭГ), 
обработка изображений и др.
Сегментация играет важную роль в машинном обучении, повышая качество анализа данных и производительность модели.</p>

<li> <h5>Методы сегментации медицинских сигналов</h5></li>
<ul class="simple">
Существуют разные подходы к сегментации:
<li> - Сегментация по амплитуде: анализ уровней амплитуды сигнала.; 
</li>
<li> - Сегментация по временному окну: разделение сигнала на интервалы фиксированной длительности.</li>
<li> - Сегментация на основе порогов: деление на сегменты в 
зависимости от достижения сигнала заданного порогового значения.</li>
<li> - Сегментация по характеристикам частотного спектра: 
использование Фурье-преобразования для выделения отдельных 
частотных компонентов сигнала.</li>
<li>  Сегментация сигналов на основе машинного обучения</li>
</ul>
<li> <h5> Задания </h5></li>
  <h5>Задание 1:<span style="font-weight: normal;"> Импортируйте сигнал ЭКГ в MATLAB и 
  визуализируйте только один канал. Где серии ЭКГ сохраняются в файле с названием ECG.txt</span></h5>
 
    <h5>Задание 2:<span style="font-weight: normal;"> Выберите сегмент, содержащий только пять комплексов QRS,
     и визуализируйте его.</span></h5>
       <h5>Задание 3:<span style="font-weight: normal;">Делите сигнал на сегменты, где амплитуда превышает 0.64 порог. </span></h5>
       <h5>Задание 4:<span style="font-weight: normal;"> Используйте buffer, который является 
       встроенной функцией в Matlab, для сегментации сигнала ЭКГ.</span></h5>
      

</ul>
<p>===============================================================================</p>

<li> <h5>Содержание отчета </h5></li>

<ul class="simple">
<li> Титульный лист</li>
<li> Цель работы.</li>
<li> Результаты Задания 1,2, 3, 4 </li>
<li> Выводы.</li>
</ul>
</ul>
    </div>`
 }
//////////////////////////

export function Lab6(){
  styling();
  const element=document.getElementById('midlle_col');
 element.innerHTML=`<div lang='ru'  translate="no"> 
 <h2>Лабораторная работа - 6</h2>
    <h2>    Использование быстрого преобразования Фурье (FFT) в MATLAB для анализа сигналов </h2>
    <ul id="main_ul" lang="ru">

<h4>Цель работы: <span style="font-weight:normal"> Изучить использование быстрого преобразования Фурье 
(БПФ, FFT) для анализа сигналов в MATLAB, а 
также познакомиться с применением БПФ для фильтрации и анализа спектра сигналов.</span></h4>
<ul id="main_ul" lang="ru">
<li><h5>Теоретическая часть</h5></li>
<p> Быстрое преобразование Фурье (БПФ, FFT — Fast Fourier Transform) является численным методом для вычисления дискретного преобразования Фурье (ДПФ) сигнала. С помощью БПФ можно преобразовать сигнал из временной области в частотную, что позволяет проанализировать его спектральные компоненты.
Применение FFT в MATLAB дает возможность:
Осуществлять спектральный анализ сигналов.
Применять фильтрацию для удаления нежелательных частот.
Реконструировать сигнал с помощью обратного преобразования Фурье.</p>

<p>Математическая формула для БПФ представлена следующим образом:
</p>

<p>
    Для последовательности значений сигнала <code>x[n]</code> длиной <code>N</code> БПФ вычисляется по следующей формуле:
</p>

<pre>
X[k] = ∑<sub>n=0</sub><sup>N-1</sup> x[n] * e<sup>-j2πkn/N</sup>  , где k = 0, 1, ..., N-1
</pre>

<p>
    Здесь:
    <ul style="text-align:left">
        <li><code>x[n]</code> — это значение сигнала в точке <code>n</code>,</li>
        <li><code>X[k]</code> — это комплексное значение в частотной области для индекса <code>k</code>,</li>
        <li><code>e<sup>-j2πkn/N</sup></code> — это комплексная экспонента, которая преобразует сигнал из временной области в частотную.</li>
    </ul>
</p>

<p>
    БПФ позволяет эффективно вычислять спектр сигнала, преобразуя его из временной области в частотную, что используется для анализа и фильтрации сигналов.
</p>


<li> <h5> Задания </h5></li>
<ul style="text-align:left">
  <h5>Задание 1:<p style="font-weight: normal;"> Вычислите спектр следующего периодического сигнала, используя выборки за один период:
  <p> <code>x(t) = sin(2πt)</code></p> </p></h5>
 
    <h5>Задание 2:<p style="font-weight: normal;"> Напишите скрипт на MATLAB,
     который генерирует несколько синусоидальных волн и применяет БПФ (FFT) для отображения спектральных 
     компонентов сигнала</p></h5>
       <h5>Задание 3:<p style="font-weight: normal;"> Примените БПФ (FFT) для разложения зашумленного 
       синусоидального сигнала и фильтрации шума.</p></h5>
       <h5>Задание 4:<p style="font-weight: normal;"> Используйте БПФ (FFT) для анализа сигнала ЭКГ и
        фильтрации высокочастотного шума.</p></h5>
      </ul>


<p>******************************************************************************************************</p>

<li> <h5>Содержание отчета </h5></li>

<ul class="simple">
<li> Титульный лист</li>
<li> Цель работы.</li>
<li> Результаты Задания 1,2, 3, 4 </li>
<li> Выводы.</li>
</ul>
</ul>
    </div>`
 }
///////////////////////////
window.myFunction=myFunction;
window.Lab1=Lab1;
window.Lab2=Lab2;
window.Lab3=Lab3;
window.Lab4=Lab4;
window.Lab5=Lab5;
window.Lab6=Lab6;
window.DropDown=DropDown;
window.homePage=homePage;
window.checkLoginStatu=checkLoginStatu;
window.Tut_sampling=Tut_sampling;
window.trig=trig;
window.dropdown=dropdown;
window.trig1=trig1;
window.dropdown1=dropdown1;
window.Tut_quant=Tut_quant;
window.trig2=trig2;
window.dropdown2=dropdown2;
window.trig3=trig3;
window.dropdown3=dropdown3;