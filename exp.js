function myFunction(x) {
    x.classList.toggle("open");
  }


  
/////////////////////////////////////////////////////////* When the user clicks on the button,toggle between hiding and showing the dropdown content */
function DropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

/////////////////////////////////////////////////////////////


function Mohammed(){
  document.getElementById('midlle_col').innerHTML=`<h1> Not god but Allah</h1>`
}

//////////////////////////////////////////

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
     let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

////////////////////////////////////

function Mygirl(){
  const element=document.getElementById('midlle_col');
element.innerHTML=`<h1> I am from mobile menu ----------------------------</h1>`
}
////////////////////////// Лаб 1................................./////////////////////////////////////////////////
function Lab1(){
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
element.innerHTML=`<div lang='Rus'> 

      <h2>Лабораторная работа - 1 </h2>
<h3>Операции над матрицами и векторами в системе MATLAB</h2>

<h4>Цель работы: Изучение основных операций c векторами и матрицами в системе MATLAB</h3>
<ul id="main_ul">
<li> <h5>Основные положения</h5> </li>

 <p> В MATLAB создание вектора или матрицы является достаточно простой задачей. При вводе значения векторов и матриц перечисляются в квадратных скобках. 
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
       <li><p>Для создания вектора в MATLAB без использования встроенных функций, таких как :, 
        linspace, или других готовых решений, необходимо самостоятельно реализовать алгоритм, 
        который шаг за шагом заполнит элементы вектора.</p>
        <p>1. Определение параметров для вектора: Начальное значение, Конечное значение,  Шаг и количества элементов в векторе.
          (количества элементов=floor(Начальное значение -Конечное значение)/Шаг+1 )
        </p>
        <p>2. Инициализация пустого вектора:
          <p>В MATLAB можно заранее выделить память для вектора с помощью массива из нулей 
            (чтобы избежать динамического изменения длины вектора в цикле). Для инициализации пустого вектора используем команду zeros(1, n), где 
            n — это количество элементов в векторе.</p>

        </p>

        <p> 3. Заполнение вектора с помощью цикла
          <p>Используя цикл for, мы будем последовательно присваивать каждому элементу вектора значение, начиная с 
            Начальное значение и увеличивая его на шаг на каждом шаге цикла.</p>
          
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
        <h5>Задание 1:  <span style="font-weight: normal;">Создайте программный скрипт и функцию, которые можно использовать для создания вектор-столбеца (без транспонирования).</span> </h5>


      </li>
      <li><h5>Индексация векторa</h5>
      
      <p>Векторная индексация в MATLAB — это способ доступа к элементам массива или вектора с использованием индексов в виде векторов.</p>
      <p>Допустим, у вас есть вектор: x=[1 2 4 6 7 8 9 3]; Чтобы выбрать определенные элементы (например, первый), испольузем x(1); результат x(4) будет 6; результат x([1 3 6]) будет 1     4     8 </p>
    <p style="font-weight: bold;">Логическая индексация
      <p> Можно использовать логические операторы для индексации, так как > , < , >, = </p> 
      Например: <pre>
        >> A=[20 10 19 30 11 50];
        >> A(A>20)
        ans = 30    50
      </pre>
    </p>

      <p style="font-weight: bold;">Изменение элементов вектора с помощью индексации:
      <p>индексация в основным используется для изменения элементов вектора. </p>
      Например:  <pre>
        A=[20 10 19 30 11 50]
         A([1 2 3])=[100 200 300]

         %% Результат будет:
         A = 20    10    19    30    11    50
     
     
          A = 100   200   300    30    11    50

      </pre>

      <h5> Задание 2: <span style="font-weight: normal;">Допустим  A=[3 5 6 2 8 2.4 8 9 0 3 7 1]; Удалите все элементы, которые больше чем 4</span> </h5>

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

        <h5> Задание 3: <span style="font-weight: normal;">Допустим  A=[3 5 6 2 8 2.4 8 9 0 3 7 1]; Используйте функцию reshape(), чтобы преобразовать вектор (А) в матрицу </span> </h5>

        <h5> Задание 4: <span style="font-weight: normal;">Разработайте свою собственную функцию для преобразования вектора в матрицу в MATLAB. </span> </h5>
      
      </li>
    </ul>

    <li>Порядок выполнения лабораторной работы</li>
       
    <ul class="simple"><h5>Содержание отчета</h5> 
   <li>1. Титульный лист</li>
   <li>2. Цель работы.</li>
   <li>3. Результаты Задания 1,2,3,4 </li>
   <li>4. Выводы.</li>
   </ul>
   
   <ul class="simple"> Контрольные вопросы
     <pre>
       1. Как осуществляется ввод вектора-строки?
       2. Как осуществляется ввод вектора-столбца?
       3. Как определяется индексация элементов векторa? 
       </pre>
   </ul>

</ul>
</div>
`}