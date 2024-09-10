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
    </ul>

    <ul class="simple">
        <h5>1.2. Создание матрицы</h5> 
        <p>Матрица задается в виде элементов, заключенных в квадратные скобки, разделенных пробелами или запятыми по строкам, и точками с запятой — по столбцам.</p>
        
        <li>Пример 2x3 матрицы: A = [1, 2, 3; 4, 5, 6]; </li>
        <li> Создание нулевой, единичной или случайной матрицы: A = zeros(3, 3);
        </li>
        <li> Единичная матрица размером 4x4: A = eye(4);
        </li>
        <li> Матрица с случайными элементами размером 3x2: A = rand(3, 2);  % Случайные числа от 0 до 1
        </li>
        <li>Матрицы с диапазонами: A = [1:3; 4:6; 7:9];
        </li>
        <li>Матрицу можно свести к нулевой размерности, используя выражение вида:
            Имя_матрицы = [].
            при этом имя матрицы сохраняется, и в дальнейшем ее можно расширить и использовать.</li>
            <li>Уничтожение матрицы осуществляется с помощью команды:
                clear Имя_матрицы.</li>
    </ul>
 

   <ul class="simple">
<h5>функции для создания матрицы</h5>
     Вы также можете создать функцию, которая генерирует матрицы в зависимости от параметров:
     <li>Пример функции для создания матрицы</li>

     <li> <p>function matrix = create_matrix(rows, cols)</p>
      <p>   % Функция для создания матрицы размером rows x cols</p>
      <p>matrix = randi(10, rows, cols); % Генерация случайной матрицы с элементами от 1 до 10</p>

     <li><p>function  matrix=create_matrix(x1, x2)</p>
      <p> matrix=zeros(x1,x2);</p>
     <p>  for i=1:x1</p>
    <p>for j=1:x2</p>
              matrix(i,j)=i+j;
          end
      end  
      end</li> 
   
      
  end
  </li>

  <li>Использование функции: % Генерация матрицы 4x5
    generated_matrix = create_matrix(4, 5);
    disp('Сгенерированная матрица 4x5:');
    disp(generated_matrix);
    </li>
   </ul>
    
<ul> <h5>Многомерные матрицы в MATLAB</h5>
  <p>Многомерные матрицы в MATLAB — это массивы, имеющие более двух измерений. 
    В отличие от обычных матриц (2D), многомерные массивы могут иметь три, четыре и больше измерений. 
    MATLAB поддерживает работу с многомерными матрицами так же, как и с обычными матрицами.</p> 
    <li> Создание многомерной матрицы 
      <p>Многомерную матрицу можно создать несколькими способами:

        Пример 1: Использование функции zeros, ones, rand
        Эти функции могут создавать многомерные массивы.</p>
    </li>
    <li>% Создание 3x3x3 матрицы, заполненной нулями
      A = zeros(3, 3, 3);
      
      % Создание 4x2x5 матрицы, заполненной единицами
      B = ones(4, 2, 5);
      
      % Создание 2x3x4 матрицы с случайными числами от 0 до 1
      C = rand(2, 3, 4);
      </li>
      <li>Ручное создание многомерной матрицы</li>
      <p>Можно вручную задать элементы для каждого измерения:</p>
      <p>% Создание 3D матрицы (2x2x2)
        D(:,:,1) = [1, 2; 3, 4];  % Первый срез
        D(:,:,2) = [5, 6; 7, 8];  % Второй срез
        
        disp(D);
        </p>
      





  </ul>



 <h3> В MATLAB возможны следующие операции с векторами и матрицами:</h3>
 <ul>
    <li>+ – сложение;</li>
    <li> – – вычитание;</li>
    <li>* – умножение;</li>

   <li>/ – оператор деления. Если оба операнда - скаляры, то результат - частное от деления скаляр на скаляр. Если первый операнд матрица, а второй скаляр, то результат будет матрица, в которой каждый элемент - частное от деление на скаляр. 
    Если оба операнда квадратные матрицы одного ранга, то результат будет - произведение матрицы первого операнда на матрицу, обратную матрице-второму операнду.</li>
    <li>\ - оператор левостороннего деления. Операндами являются квадратные матрицы одного ранга. 
        Результатом является матрица, равная матрицы, обратной к первому операнду-матрице, на второй операнд-матрицу.</li>
    
    <li> ' – транспонирование;</li>
    <li>  ^ – возведение в степень;</li>
   <li> inv(m) – вычисление обратной матрицы m;</li>
  
   <li>pinv(m) – псевдообращение матрицы m;</li>
   <li>sqrtm(m) – матричный квадратный корень;</li>
    
    <li>poly(m) – вектор с коэффициентами характеристического многочлена матрицы;</li>
    <li>det(m) – значение определителя матрицы m;</li>
    <li> trace(m) – след матрицы m;</li>
    <li>  rank(m) – ранг матрицы m.</li>
</ul>
<p>Система MATLAB имеет ряд функций, предназначенных для обработки данных, заданных в матричной или векторной форме.
    Функция size(m) служит для определения числа строк и столбцов матрицы m. Она возвращает вектор [n, p], содержащий эти данные.
    Функция max(v) возвращает значение максимального по значению элемента вектора v. Если ее аргументом является матрица, например, max(m), то функция возвращает вектор-строку, содержащий значения максимальных элементов каждого из столбцов.
    Аналогично действует функция min(m), выделяющая элементы с минимальными значениями.
    Функция mean(v) возвращает среднее значение элементов вектора v, а функция mean(m) с матричным аргументом возвращает вектор-строку средних значений каждого из столбцов данных.
    Функция std(v) возвращает статистический параметр – стандартное (квадратичное) отклонение для одномерного массива данных, представленного вектором v. Для матричного аргумента эта функция возвращает вектор-строку стандартных отклонений для каждого из столбцов.
    Функция сортировки sort(v) возвращает вектор, элементы которого расположены в порядке роста их значений. Для матричного аргумента эта функция возвращает матрицу, у которой отсортированы элементы каждого столбца.
    Функция sum(v) возвращает сумму элементов вектора v, а для матричного аргумента функция sum(m) возвращает вектор-строку сумм элементов по каждому из столбцов.
    Аналогично функция prod(m) возвращает вектор произведений элементов каждого из столбцов.
    Порядок выполнения лабораторной работы</p>

<li> <h5>Ввод с клавиатуры векторов и матриц</h5> </li> 

<ul>
    <li>Ввести:
        – вектор-строку (v);
        >> v= [1 2 3]
        v =
         1     2     3</li>


         <li>– вектор-столбец (w);
            >> w= [3;2;1]
            w =
             3
             2
             1</li>
             <li>– матрицу (m).
                >> m= [1 2 3;3 2 1;1 3 2]
                m =
                 1     2     3
                 3     2     1
                 1     3     2 </li>
                 <li></li>
</ul>




<li> <h5>Генерация матриц специального вида</h5>  </li> 
Создать:
– матрицу с нулевыми элементами (m0);
>> m0= zeros(3,3)
m0 =
 0     0     0
 0     0     0
 0     0     0
– матрицу с единичными элементами(m1);
>> m1= ones(3,3)
m1 =
 1     1     1
 1     1     1
 1     1     1
– матрицу с элементами, имеющими случайные значения(mr);
>> mr= rand(3,3)
mr =
0.8147    0.9134    0.2785
0.9058    0.6324    0.5469
0.1270    0.0975    0.9575

– матрицу с единичными элементами в главной диагонали (mе);
>> me= eye(3,3)
me =
 1     0     0
 0     1     0
 0     0     1
- извлечение из матрицы вектора-столбца;
>> m(1:3,2)
ans=
   2
   2
   3
- извлечение из матрицы вектора-строки;
>> m(3,1:3)
ans=
   1   3   2
- извлечение подматриц (миноров);
>> m(1:2,1:2)
ans=
   1   2
   3   2
Определение числа строк и столбцов матрицы mm.
>> size(mm)
ans =
 3     3
Определение максимального элемента матрицы mm каждого столбца.
>> max(mm)
ans =
13.9058   13.0975   13.2785
Определение минимального элемента матрицы mm каждого столбца.
>> min(mm)
ans =
11.1270   12.6324   11.5469
Суммирование элементов матрицы mm каждого столбца.
>> sum(mm)
ans =
36.8475   38.6433   37.7829
Перемножение элементов матрицы mm каждого столбца.
>> prod(mm)
2.2.4 Решение системы линейных уравнений.

.
Систему уравнений можно представить в матричном виде как    или  .
>> A=[1 2 3;-1 1 2;1 -2 5]
A=
1   2   3
-1   1   2
1  -2   5
>> b=[10;1;4]
b=
10
  1
  4
Обратную матрицу А-1 можно получить только их невырожденной матрицы А, у которой детерминант отличен от нуля (делить на ноль нельзя).
>> det(A)
ans=26
Первый способ решения.
Обратная матрица А-1 определяется командой inv(A).
>> A1= inv(A)
A1=
  0.3462   -0.6154    0.0385
  0.2692    0.0769   -0.1923
  0.0385    0.1538    0.1154
Второй способ решения.
Вместо вычисления обратной матрицы А1 и умножения ее (слева) на вектор b, можно использовать оператор левостороннего деления \.
>> x= A\b
x=
 3
 2
 1

Решение системы уравнений: х1=3; x2=2; x3=1. Очевидно, что второй способ предпочтительнее, чем первый.
2.3 Содержание отчета

1. Цель работы.
2. Результаты пунктов 2.2.1-2.2.3.
3. Выводы.
2.4 Контрольные вопросы

1. Как осуществляется ввод вектора-строки?
2. Как осуществляется ввод вектора-столбца?
3. Как определяется число строк и столбцов матрицы?
4. Какие операции служат для определения max-го и min-го элемента матрицы?
5. Как осуществляется суммирование и умножение элементов матрицы?
</ul>
Задание
1.	Изучить пользовательский интерфейс системы MATLAB.
2.	Выполнить все ниже приведенные команды и примеры решения конкретных задач.
3.	Из заданной преподавателем матрицы вычленить указанный блок.
4.	Провести почленное деление (умножение) заданных матриц.
5.	Сохранить итоговое рабочее пространство в созданном под своим именем  каталоге.
6.	Отредактировать «Историю выполненных команд» (Command History),  сохранить ее в файле и привести ее распечатку в отчете.
7.	Подготовить таблицу с описанием изученных команд и функций.

Отчёт должен содержать:
1. Титульный лист
2. Цель и задачи работы
3. Порядок выполнения работы
4. Графические окна сигналов до и после фильтрации различными фильтрами.
5. Параметры и наименования используемых фильтров.
6. Выводы о выбранном фильтре и его оптимальных параметрах.
7. Вывод по работе


Matrix Indexing in MATLAB
Indexing into a matrix is a means of selecting or modifying a subset of elements from the matrix. MATLAB® has several indexing styles that are not only powerful and flexible, but also readable and expressive. Matrices are a core component of MATLAB for organizing and analyzing data, and indexing is key to the effectiveness of manipulating matrices in an understandable way.
Indexing is closely related to another term MATLAB users often hear: vectorization. Vectorization means using MATLAB matrix and vector operations instead of scalar operations—usually resulting in code that is shorter, more mathematically expressive and readable, and sometimes faster.

Выделение элементов матрицы (а) производится с помощью команд:
a(i,j) – выделение элемента i-й строки j-го столбца;
a(i,:) – выделение i-й строки;
a(:,j) – выделение j-го столбца.


Indexing Vectors
Let’s start with the simple case of a vector and subscripts.
v = [16 5 9 4 2 11 7 14];
The subscript can be a single value:
v(3)     % Extract the third element
ans =
  9
Or a subscript can itself be another vector.
v([1 5 6])      % Extract the first, fifth, and sixth elements
ans =
  16   2   11
The colon notation in MATLAB provides an easy way to extract a range of elements from v.
v(3:7)     % Extract the third through the seventh elements
ans =
  9   4   2   11   7
Swap the two halves of v to make a new vector.
v2 = v([5:8 1:4])     % Extract and swap the halves of v
v2 =
 2   11   7   14   16   5   9   4
The special end operator is an easy shorthand way to refer to the last element of v.
v(end)     % Extract the last element
ans =
  14
The end operator can be used in a range.
v(5:end)     % Extract the fifth through the last elements
ans =
  2   11   7   14
You can even do arithmetic using end.
v(2:end-1)     % Extract the second through the next-to-last elements
ans =
  5   9   4   2   11   7
Combine the colon operator and end to achieve a variety of effects, such as extracting every k-th element or flipping the entire vector.
v(1:2:end)   % Extract all the odd elements
ans =
  16   9   2   7
v(end:-1:1)   % Reverse the order of elements
ans =
  14   7   11   2   4   9   5   16
By using an indexing expression on the left side of the equal sign, you can replace certain elements of the vector.
v([2 3 4]) = [10 15 20]   % Replace some elements of v
v =
16   10   15   20   2   11   7   14
Usually, the number of elements on the right must be the same as the number of elements referred to by the indexing expression on the left. You can always, however, use a scalar on the right side. This is called scalar expansion.
v([2 3]) = 30   % Replace second and third elements by 30
v =
16   30   30   20   2   11   7   14
Indexing Matrices with Two Subscripts
Now consider indexing into a matrix. We’ll use a magic square for our examples.
A = magic(4)
A =
      16           2           3          13
       5          11          10           8
       9           7           6          12
       4          14          15           1
A(2,4)   % Extract the element in row 2, column 4
ans =
   8
More generally, one or both of subscripts can be vectors.
A(2:4,1:2)
ans =
       5          11
       9           7
       4          14
A single “:” in a subscript position is shorthand notation for 1:end and is often used to select entire rows or columns.
A(3,:)   % Extract third row
ans =
 9   7   6   12
A(:,end)   % Extract last column
ans =
     13
      8
     12
      1
Extracting scattered elements from a matrix requires a different style of indexing, and that brings us to our next topic.
Linear Indexing
What does this expression A(14) do?
When you index into the matrix A using only one subscript, MATLAB treats A as if its elements were strung out in a long column vector, by going down the columns consecutively, as in:


Function 
Reshape 
Function buffer 
The single subscript can be a vector containing more than one linear index, as in:
A([6 12 15])
ans =
  11   15   12
Consider again the problem of extracting just the (2,1), (3,2), and (4,4) elements of A. You can use linear indexing to extract those elements.
A([2 7 16])
ans =
  5   7   1
That’s easy to see for this example, but how do you compute linear indices in general? MATLAB provides a function called sub2ind that converts from row and column subscripts to linear indices. You can use it to extract the desired elements this way:
idx = sub2ind(size(A), [2 3 4], [1 2 4])
ans =
  2   7   16
A(idx)
ans =
  5   7   1
Logical Indexing
Another indexing variation, logical indexing, is a compact and expressive notation that’s useful in many applications, including image processing. In logical indexing, you use a single, logical array for the matrix subscript.
Here is an example of a logical array you could use:
A > 12 
ans =
4×4 logical array

1  0  0  1
0  0  0  0
0  0  0  0
0  1  1  0
These are the locations in the matrix in which the logical expression is true, in this case, any location greater than 12.
Now the expression A(A > 12) extracts the matrix elements corresponding to the nonzero values of the logical array. The output is always in the form of a column vector.
A(A > 12) 

ans =

16
14
15
13
Many MATLAB functions that start with is return logical arrays and are very useful for logical indexing. For example, you could replace all the NaN elements in an array with another value by using a combination of isnan, logical indexing, and scalar expansion with one line of code.
B(isnan(B)) = 0
nan_locations = find(isnan(A)); 

A(nan_locations) = 0; 

A = filter2(ones(3,3), A); 

A(nan_locations) = NaN; 
    </div>
`}