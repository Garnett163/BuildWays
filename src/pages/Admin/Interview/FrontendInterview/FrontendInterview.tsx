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
      <SectionTitle title="Vue 2 and Vue 3" />
      <InterviewList items={vueQuestions} />
    </section>
  );
}

export default FrontendInterview;
