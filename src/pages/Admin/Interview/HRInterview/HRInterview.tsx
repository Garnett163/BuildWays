import './HRInterview.css';
import { SectionTitle } from '../../Ui/SectionTitle/SectionTitle';
import { InterviewList } from '../../Ui/InterviewList/InterviewList';

import { commonHRQuestions } from './data/commonHRQuestions';

export default function HRInterview() {
  return (
    <section className="hr__interview">
      <SectionTitle title="Вопросы HR" />
      <InterviewList items={commonHRQuestions} />
    </section>
  );
}
