import './FrontendInterview.css';
import { SectionTitle } from '../../Ui/SectionTitle/SectionTitle';
import { InterviewList } from '../../Ui/InterviewList/InterviewList';

import { browserAndCommonQuestions } from './data/browserAndCommonQuestions';
import { htmlAndCssQuestions } from './data/htmlAndCssQuestions';
import { javaScriptQuestions } from './data/javaScriptQuestions';
import { typeScriptQuestions } from './data/typeScriptQuestions';

function FrontendInterview() {
  return (
    <section className="frontend__interview">
      <SectionTitle title="Общие вопросы / Браузер" />
      <InterviewList items={browserAndCommonQuestions} />
      <SectionTitle title="Вопросы по HTML и CSS" />
      <InterviewList items={htmlAndCssQuestions} />
      <SectionTitle title="JavaScript" />
      <InterviewList items={javaScriptQuestions} />
      <SectionTitle title="TypeScript" />
      <InterviewList items={typeScriptQuestions} />
      {/* <ul className="interview__list">
        <li className="interview__item">
          <span className="interview__item_number">1)</span>
          JS слабая типизаци, в ран тайме, TS-сложная и статическая(на этапе компиляции) + структурная (одинаковые поля)
        </li>
        <li className="interview__item">
          <span className="interview__item_number">2)</span> Generic - аргумент для типа функции интерфейса, дает
          гибкость. Пример - useState
        </li>
        <li className="interview__item">
          <span className="interview__item_number">3)</span>
          Различие между type и interface - type - можно указывать литералы и явное значение, ункальное
          название.interface - можно делать extends, производительность лучше чем у type с пересечением
        </li>
        <li className="interview__item">
          <span className="interview__item_number">4)</span>
          Mapped types позволяет создовать типы на основе существующих, путем трансформации их свойств.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">5)</span>
          Assert — это statement, который проверяет булево выражение. Если выражение истинно, выполнение продолжается.
          Если ложно — выбрасывается ошибка.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">6)</span>
          Infer - вытащить параметр или return тип из функции.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">7)</span>
          TypeGuard - это функция которая возвращает true или false в зависимости от проверки типа. Имеет специальный
          тип возврата value is Type
        </li>
        <li className="interview__item">
          <span className="interview__item_number">8)</span>
          Utility Types: ----
          <br></br>
          Partial(Type) Создает тип, который делает все свойства указанного типа необязательными, помечая их как ?.
          <br></br>
          Required(Type): Создает тип, который делает все свойства указанного типа обязательными путем удаления ? из
          всех свойств.
          <br></br>
          Readonly(Type): Создает тип, который делает все свойства указанного типа доступными только для чтения.
          <br></br>
          Pick(Type, Keys): Создает тип, содержащий только указанные свойства из исходного типа.
          <br></br>
          Record(Keys, Type): Создает тип, представляющий объект, где ключи типа Keys имеют тип Type.
          <br></br>
          Exclude(Type, ExcludedUnion): Создает тип, исключая из него все члены, которые являются подтипами
          ExcludedUnion.
          <br></br>
          Omit(Type, Keys): Создает тип, исключая из него указанные свойства.
          <br></br>
          NonNullable(Type): Создает тип, исключая null и undefined из указанного типа.
          <br></br>
          ReturnType(Type): Извлекает тип возвращаемого значения функции.
        </li>
      </ul> */}
      <SectionTitle title="React" />
      <ul className="interview__list">
        <li className="interview__item">
          <span className="interview__item_number">1)</span>
          JSX - это расширение синтаксиса для JavaScript, которое позволяет вам писать HTML-подобный код прямо внутри
          JavaScript-файлов. React экранирует все значения, встроенные в JSX, перед тем как отрендерить их. Это
          означает, что невозможно внедрить XSS-атаки путем простой вставки пользовательского контента. Компиляция в
          эффективный код.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">2)</span>
          Классовые компоненты — это ES6-классы, которые расширяют React.Component и используют методы жизненного цикла.
          Функциональные компоненты — это обычные JavaScript-функции, которые возвращают JSX.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">3)</span>
          Props (properties) — это входные параметры, которые компонент получает от родительского компонента. Их можно
          сравнить с аргументами функции. Если дочерний компонент изменяет props, это создает: непредсказуемое
          поведение, нарушение архитектуры React. Потеря оптимизаций — нарушение поверхностного сравнения
        </li>
        <li className="interview__item">
          <span className="interview__item_number">4)</span>Без ключей React перерисовывает весь список при любом
          изменении. С ключами React понимает, какой именно элемент изменился, и обновляет только его.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">5)</span> Fiber - когда у нас впервые строится дерево реакт
          элементов, то для каждого элемента впервые создается Fiber Noda
        </li>
        <li className="interview__item">
          <span className="interview__item_number">6)</span> Эвристика в React - алгоритмы которые строят в начале
          CurrentTree а потом переходят в WorkInProgressTree имеют в среднем сложность O(n3). Поэтому есть 2 правила 1)
          Элементы разных типов - разные деревья, принцип в кратце, что React удаляет компоненты и строит их заного а
          просто пересоздает их. 2) Можно использовать key, чтобы пометить какие элементы будут стабильны в разных
          рендерах.
          <br></br>
          За счет этих правил сложность O(n)
        </li>
        <li className="interview__item">
          <span className="interview__item_number">7)</span> Оптимизация в React(кеширование)-
        </li>
        <li className="interview__item">
          <span className="interview__item_number">8)</span> Расскажи про хуки в React
          <br />
          useEffect это хук в React, который предназначен для выполнения side-эффектов в функциональных компонентах.
          Side-эффекты могут быть, например, выполнение запросов HTTP, изменение состояний компонента или обновление
          DOM-элементов.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">9)</span> useRef - Предназначен для сохранения и взаимодействия с
          изменяемыми значениями, которые не вызывают перерендеринг компонента.Хранение мутабельных значений: Вы можете
          использовать useRef для хранения переменных, которые не приводят к повторному рендерингу компонента. Часто
          используется для сохранения ссылок на DOM-элементы.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">10)</span> useEffect - это хук в React, который предназначен для
          выполнения side-эффектов в функциональных компонентах. Side-эффекты могут быть, например, выполнение запросов
          к серверу, манипуляции с DOM, подписка на события или любые другие операции, которые необходимо выполнить в
          процессе жизненного цикла компонента.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">11)</span> uselayoutEffect - Cрабатывает синхронно после всех
          изменений в DOM и перед тем, как браузер выполнит перерисовку экрана.
        </li>
      </ul>
      <SectionTitle title="Vue 2 and Vue 3" />
      <ul>
        <li className="interview__item">
          <span className="interview__item_number">1)</span>Vue 2 использует Object.defineProperty(определяет новое или
          изменяет существующее свойство объекта и возвращает этот объект.) с ограничениями. Object.defineProperty
          применяется только к существующим свойствам при инициализации. Новые свойства не имеют геттеров/сеттеров.
          this.$set и this.$delete помогает добавить/удалить свойства.
          <br />
          Vue 3 использует Proxy, который обеспечивает полное контроль над свойствами. Proxy может быть использован для
          чтения, записи и удаления свойств.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">2)</span>
          Composition API - обеспечивающий лучшую организацию кода, переиспользование логики и поддержку TypeScript
        </li>
        <li className="interview__item">
          <span className="interview__item_number">3)</span>
          ref глубокая реактивность с ключевым словом .value; shallowRef - поверхностная реактивность (на векрхнем
          уровне), reactive работает только с объектами/массивами
        </li>
        <li className="interview__item">
          <span className="interview__item_number">4)</span>
          nextTick — это функция, которая позволяет отложить выполнение кода до следующего цикла обновления DOM. Пример
          поставить фокус на элемент или в тестах
        </li>
        <li className="interview__item">
          <span className="interview__item_number">3)</span>
          v-model — это директива для двустороннего связывания данных (two-way binding) между формой ввода и данными
          компонента. Синтаксический сахар для :value + @input="message = $event.target.value".
        </li>
        <li className="interview__item">
          <span className="interview__item_number">4)</span>
          Директивы: <br />
          v-if / v-else-if / v-else - Когда элемент должен полностью добавляться/удаляться из DOM, в зависимости от
          условий.
          <br />
          v-show - Условное отображение через CSS display: none.
          <br /> v-for - Директива для рендеринга элементов списка.
          <br /> v-bind - Директива для привязки атрибутов HTML к компоненту. Привязка всех свойств объекта и пропсов.
          Передача пропсов в дочерние компоненты
          <br /> v-slot - Директива для рендеринга содержимого слота внутри компонента. Можно именовать слоты. Слоты с
          данными когда дочерний компонент передает данные обратно в слот, а родитель решает, как их отрендерить.
          <br />
          v-memo - Директива для оптимизации рендеринга компонента.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">5)</span>
          Жизненный цикл компонента: <br />
          created — инициализация данных, API запросы. <br /> mounted — работа с DOM, сторонние библиотеки
          <br /> updated — операции после обновления DOM (осторожно infinite loop) <br />
          beforeUnmount — очистка ресурсов, отмена подписок
        </li>
        <li className="interview__item">
          <span className="interview__item_number">6)</span>
          Computed - вычисляемые свойства, которые вычисляются на основе других свойств. Возвращают значения,
          кэшируются.Синхронные. <br />
          Watch - наблюдатель, который следит за изменением свойств. Ленивый — не выполняется сразу, если не указать
          immediate: true. Глубокое отслеживание deep. Могут быть асинхронные + не кешируются. Используются для сайд
          эффектов(подписки, таймеры, асихронные запросы)
          <br /> WatchEffect - Выполнение побочного эффекта, который автоматически отслеживает все реактивные
          зависимости, использованные внутри. Выполняется немедленно как immediate: true. Не дает старое значение —
          только новое. Подходит для эффектов, где нужно "следить за всем, глубоко, что используется"
        </li>
        <li className="interview__item">
          <span className="interview__item_number">7)</span>
          Mixins позволяют выносить общую функциональность (data, methods, computed, хуки жизненного цикла) в отдельные
          объекты и подключать их к компонентам. Сначала отработают жизненные циклы миксинов в последовательности
          подключения, а потом уже самого компонента
        </li>
        <li className="interview__item">
          <span className="interview__item_number">8)</span>
          Модификаторы для событий @click.stop, @click.prevent, @click.capture - обработчик на фазе перехвата,
          @click.self - срабатывает только при клике на сам элемент, @click.once, @scroll.passive - улучшает
          производительность
        </li>
        <li className="interview__item">
          <span className="interview__item_number">9)</span>
          Prevent и inject - обеспечивают возможность передачи данных из родительского компонента в дочерний. Это
          реактовский useContext
        </li>
        <li className="interview__item">
          <span className="interview__item_number">10)</span>
          Динамические компоненты (:is) — это механизм Vue для рендеринга разных компонентов в одном месте на основе
          динамического значения. По умолчанию при переключении компонент пересоздается, теряя состояние.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">11)</span>
          Keep alive - при переключении компонентов сохраняет состояние.
        </li>
        <li className="interview__item">
          <span className="interview__item_number">12)</span>
          Suspense — это как "обертка-защита" для компонентов, которым нужно время чтобы "загрузиться". Он показывает
          fallback (запасной контент) пока дочерние компоненты не закончат свои асинхронные операции. Не нужно ручное
          управление флагами loading/error
        </li>
        <li className="interview__item">
          <span className="interview__item_number">13)</span>
          defineAsyncComponent - для ленивой загрузки компонентов, есть delay(задержка перед показом loading) и
          timeout(таймаут загрузки)
        </li>
        <li className="interview__item">
          <span className="interview__item_number">14)</span>
          Глобальные хуки - router.beforeEach - Выполняется ПЕРЕД каждым переходом, router.afterEach - ПОСЛЕ каждого
          перехода, router.onError - при ошибке <br />
          Хуки навигации: beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave
        </li>
        <li className="interview__item">
          <span className="interview__item_number">16)</span>
          Composables - тоже самое что и кастомный хук в реакте. Выделение логики. Абстракция побочных эффектов, к
          примеру размер окна. Есть библиотека VueUse (с локал стораджем и событиями AddEventListener)
        </li>
        <li className="interview__item">
          <span className="interview__item_number">17)</span>
          toRefs - Это нужно, чтобы деструктурировать реактивный объект без потери реактивности.Связь с reactive —
          toRefs работает только с объектами, созданными reactive (не с ref).
        </li>
      </ul>
    </section>
  );
}

export default FrontendInterview;
