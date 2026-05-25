import './FrontendInterview.css';
import { InterviewSideNavigation } from '../../Ui/InterviewSideNavigation/InterviewSideNavigation';
import { SectionTitle } from '../../Ui/SectionTitle/SectionTitle';
import { InterviewList } from '../../Ui/InterviewList/InterviewList';

import { navigationItems } from './constants';

import { browserAndCommonQuestions } from './data/browserAndCommonQuestions';
import { htmlAndCssQuestions } from './data/htmlAndCssQuestions';
import { javaScriptQuestions } from './data/javaScriptQuestions';
import { typeScriptQuestions } from './data/typeScriptQuestions';
import { reactQuestions } from './data/reactQuestions';
import { vueQuestions } from './data/vueQuestions';

function FrontendInterview() {
  return (
    <section className="frontend__interview">
      <InterviewSideNavigation items={navigationItems} />
      <SectionTitle title="Общие вопросы / Браузер" id="browserQuestions" />
      <InterviewList items={browserAndCommonQuestions} />
      <SectionTitle title="Вопросы по HTML и CSS" id="htmlAndCssQuestions" />
      <InterviewList items={htmlAndCssQuestions} />
      <SectionTitle title="JavaScript" id="javaScriptQuestions" />
      <InterviewList items={javaScriptQuestions} />
      <SectionTitle title="TypeScript" id="typeScriptQuestions" />
      <InterviewList items={typeScriptQuestions} />
      <SectionTitle title="React" id="reactQuestions" />
      <InterviewList items={reactQuestions} />
      <SectionTitle title="Vue 2 and Vue 3" id="vueQuestions" />
      <InterviewList items={vueQuestions} />
    </section>
  );
}

export default FrontendInterview;
