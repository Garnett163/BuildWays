import './Interview.css';

function Interview() {
  return (
    <section className="interview">
      <h2>Общие вопросы / Браузер</h2>
      <ul className="interview__list">
        <li className="interview__item">
          <span className="interview__item_number">1)</span> Мы ввели в url строчку кода и нажали Enter, что произойдет?
          - Браузер анализирует введенный URL, разделяя его на различные компоненты, такие как протокол (http, https, и
          т.д.), доменное имя, путь к ресурсу, параметры запроса и фрагмент. DNS-запрос: Если доменное имя не было
          закешировано, браузер отправляет DNS-запрос для разрешения доменного имени в IP-адрес. Установка соединения:
          Браузер устанавливает соединение с сервером, указанным в URL, используя протокол передачи данных (обычно HTTP
          или HTTPS).
          <br /> Отправка HTTP-запроса: Браузер отправляет HTTP-запрос на сервер для получения нужной страницы или
          ресурса. Обработка HTTP-ответа: Сервер обрабатывает запрос и отправляет обратно HTTP-ответ. Этот ответ может
          содержать HTML-код для отображения в браузере, а также другие ресурсы, такие как стили, скрипты, изображения и
          т.д.
          <br />
          Отображение страницы: Браузер получает ответ от сервера и отображает полученную страницу в окне браузера.
          Выполнение JavaScript и обработка ресурсов: Если страница содержит JavaScript, браузер выполняет его. Также
          начинается загрузка и обработка других ресурсов на странице, таких как стили, изображения, шрифты и т.д.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">2)</span> Протокол HTTPS - HTTPS (Hypertext Transfer Protocol Secure)
          - это защищенная версия протокола HTTP, обеспечивающая безопасность данных. В отличие от HTTP, HTTPS
          использует дополнительные протоколы, такие как SSL (Secure Sockets Layer) или его более современную версию TLS
          (Transport Layer Security), для обеспечения шифрования данных между браузером и сервером. Это шифрование
          делает данные невосприимчивыми к перехвату и изменению злоумышленниками, обеспечивая повышенный уровень
          конфиденциальности и целостности.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">3)</span> Как можно хранить информацию в браузере - cookie(сервер
          отдает, 4КБ каждый), localStorage(от 5 до 10 МБ), sessionStorage(от 5 до 10 МБ). IndexedDB – это встроенная
          база данных, более мощная, чем localStorage. Хранит практически любые значения по ключам, несколько типов
          ключей Поддерживает транзакции для надёжности. Поддерживает запросы в диапазоне ключей и индексы.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">4)</span> Что такое трехстороннее рукопожатие - Шаг 1: Отправка (SYN)
          Клиент отправляет серверу пакет с установленным флагом SYN (Synchronize). Этот пакет указывает, что клиент
          хочет установить соединение. Шаг 2: Подтверждение (SYN-ACK) Сервер получает пакет SYN, и, если он готов
          установить соединение, отправляет клиенту пакет с установленными флагами SYN и ACK (Acknowledgment). Флаг SYN
          указывает на готовность установить соединение, а флаг ACK подтверждает получение пакета SYN от клиента. Шаг 3:
          Подтверждение (ACK) Клиент получает пакет SYN-ACK от сервера и отправляет обратно серверу пакет с
          установленным флагом ACK. Это подтверждает серверу, что клиент получил его подтверждение, и теперь соединение
          установлено.
        </li>
      </ul>
      <h2>Вопросы по JS</h2>
      <ul className="interview__list">
        <li className="interview__item">
          <span className="interview__item_number">1)</span> Замыкание - Функция сохраняет доступ к переменным из своего
          внешнего контекста, даже после завершения выполнения этого контекста. Замыкания часто используются для
          создания частных переменных, создания функций с сохраненными контекстами или передачи данных между функциями
          без использования глобальных переменных.{' '}
        </li>
        <li className="interview__item">
          <span className="interview__item_number">2)</span> Event Loop - Это концепция выполнения асинхронного кода в
          браузере, потому что JS является однопоточным. Задачи поподают в CallStack и выполняются по очереди. Первым
          делом весь синхронный код, потом МикроТаски(Промисы), потом МакроТаски(SetInterval, SetTimeout).
        </li>
        <li className="interview__item">
          <span className="interview__item_number">3)</span> Context this - это всегда значение ключевого слова this,
          которое является ссылкой на объект, который запустил метод (функцию).Значение this зависит от того, как
          вызывается функция, и оно может быть определено неявно или явно. Неявный контекст - Если функция вызывается
          как метод объекта, то this будет ссылаться на сам объект, к которому принадлежит метод. Явный контекст -
          Методы call, apply и bind позволяют явно задать значение this для функции. Глобальный - ссылается на window
        </li>
        <li className="interview__item">
          <span className="interview__item_number">4)</span> Что такое всплытие или хостинг - Всплытие (hoisting) в
          JavaScript - это механизм, при котором объявления переменных и функций перемещаются вверх по коду перед
          выполнением самого кода. Таким образом, даже если переменная или функция определены позже в коде, они могут
          быть использованы до своего фактического объявления.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">5)</span> Методы, call, apply, bind - Функции которые привязывают
          контекст вызова this. Call вызывается с аргументами через запятую. Apply, аргументы передаются с помощью
          массива. Bind - Создает новую функцию, что важно не вызывает ее сразу.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">6)</span> Копирование объектов - Есть поверхностное копирование и
          глубокое. При поверхностном, мы скопируем первый слой ключей, вложенные будут отображаться как object и иметь
          ссылки на первый объект Spread оператор (...) или Object.assign(). Глубокое копирование можно реализовать с
          помощью JSON.parse(JSON.stringify(object)), но не поддерживает вложенные функции, выведет function or null.
          Глубокое копирование стало возможным с помощью функции structuredClone!!
        </li>
        <li className="interview__item">
          <span className="interview__item_number">7)</span> Set и Map - Set - новый тип данных который позволяет
          хранить уникальные значения, там можно хранить практически все типы данных, удаляет повторяющиеся элементы, и
          имеет встроенные свойства. Map - это структура данных, представляющая собой коллекцию пар ключ-значение, где
          ключи и значения могут быть любого типа. В отличие от объектов, ключами в Map могут быть любые значения,
          включая и объекты.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">8)</span> Rest and Spread - Rest позволяет собирать оставшиеся
          аргументы функции или оставшиеся элементы массива в один массив. В функциях он используется в параметрах, а в
          массивах - при объявлении или деструктуризации. Spread Она используется для распаковки элементов массива или
          свойств объекта. Это позволяет создавать копии массивов, объединять массивы, копировать объекты и т.д.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">9)</span> Throttling and debouncing - это два популярных подхода к
          управлению частотой выполнения функций в ответ на события, такие как прокрутка страницы или изменение размеров
          окна браузера. Throttling ограничивает частоту выполнения функции, обеспечивая, чтобы она не выполнялась
          слишком часто. Debouncing также управляет частотой выполнения функции, но в отличие от троттлинга, он
          откладывает выполнение функции до тех пор, пока не пройдет определенный промежуток времени без событий.
          Например, если у вас есть функция, реагирующая на изменение размера окна, дебаунсинг позволит выполнить эту
          функцию, например, через 300 миллисекунд после последнего изменения размера окна.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">10)</span> Web Workers - это механизм веб-платформы, который
          позволяет выполнять скрипты в фоновом потоке, отдельном от основного потока выполнения веб-страницы. Основная
          идея в том, чтобы выполнять тяжелые вычисления или задачи, которые могут занять много времени, в фоновом
          режиме, чтобы не блокировать пользовательский интерфейс.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">11)</span> Чистая функция - Однозначность (Deterministic): Для одних
          и тех же входных данных функция всегда возвращает одинаковый результат. Нет никаких скрытых состояний или
          побочных эффектов, которые могли бы изменять вывод функции. Отсутствие побочных эффектов (No Side Effects):
          Функция не должна влиять на внешнюю среду. Это означает, что она не изменяет переменные вне своей области
          видимости, не вызывает запросы к серверу, не взаимодействует с базой данных и т. д. Пример Reducer!!
        </li>
        <li className="interview__item">
          <span className="interview__item_number">12)</span> Методы массивов, Новые которые иммутабельные - toSorted(),
          toReversed(),toSpliced(), with(index, value) - Он возвращает новый массив, в котором элемент по заданному
          индексу заменен заданным значением. Slice тоже иммутабельный.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">13)</span> requestAnimationFrame - это метод в JavaScript, который
          используется для планирования выполнения анимаций и других задач, связанных с обновлением интерфейса в
          браузере. Он обеспечивает плавное выполнение анимаций и оптимизирует использование ресурсов, связанных с
          отрисовкой.
        </li>
      </ul>
      <h2>Вопросы по React</h2>
      <ul className="interview__list">
        <li className="interview__item">
          <span className="interview__item_number">1)</span> Virtul DOM -{' '}
        </li>
        <li className="interview__item">
          <span className="interview__item_number">2)</span> Оптимизация в React(кеширование)-
        </li>
        <li className="interview__item">
          <span className="interview__item_number">3)</span> Расскажи про хуки -
        </li>
        <li className="interview__item">
          <span className="interview__item_number">4)</span> useRef - Предназначен для сохранения и взаимодействия с
          изменяемыми значениями, которые не вызывают перерендеринг компонента.Хранение мутабельных значений: Вы можете
          использовать useRef для хранения переменных, которые не приводят к повторному рендерингу компонента. Часто
          используется для сохранения ссылок на DOM-элементы.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">5)</span> useEffect - это хук в React, который предназначен для
          выполнения side-эффектов в функциональных компонентах. Side-эффекты могут быть, например, выполнение запросов
          к серверу, манипуляции с DOM, подписка на события или любые другие операции, которые необходимо выполнить в
          процессе жизненного цикла компонента.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">6)</span> uselayoutEffect - Cрабатывает синхронно после всех
          изменений в DOM и перед тем, как браузер выполнит перерисовку экрана.
        </li>
      </ul>
    </section>
  );
}

export default Interview;
