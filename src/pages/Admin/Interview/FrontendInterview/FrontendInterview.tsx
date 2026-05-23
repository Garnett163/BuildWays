import './FrontendInterview.css';
import { SectionTitle } from '../../Ui/SectionTitle/SectionTitle';
import { InterviewList } from '../../Ui/InterviewList/InterviewList';

import { browserAndCommonQuestions } from './data/browserAndCommonQuestions';
import { htmlAndCssQuestions } from './data/htmlAndCssQuestions';
import { javaScriptQuestions } from './data/javaScriptQuestions';
import { typeScriptQuestions } from './data/typeScriptQuestions';
import { reactQuestions } from './data/reactQuestions';
import { vueQuestions } from './data/vueQuestions';

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
      <SectionTitle title="React" />
      <InterviewList items={reactQuestions} />
      {/* <ul className="interview__list">
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
          <span className="interview__item_number">8)</span> Расскажи про хуки в React
          <br />
          useEffect это хук в React, который предназначен для выполнения side-эффектов в функциональных компонентах.
          Side-эффекты могут быть, например, выполнение запросов HTTP, изменение состояний компонента или обновление
          DOM-элементов.
        </li>                   
      </ul> */}
      <SectionTitle title="Vue 2 and Vue 3" />
      <InterviewList items={vueQuestions} />
      {/* <ul>
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
      </ul> */}
    </section>
  );
}

export default FrontendInterview;
