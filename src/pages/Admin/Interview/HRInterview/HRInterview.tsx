import './HRInterview.css';
import { SectionTitle } from '../../Ui/SectionTitle/SectionTitle';
import { InterviewList } from '../../Ui/InterviewList/InterviewList';

import { trickQuestions } from './data/index';

export default function HRInterview() {
  return (
    <section className="hr__interview">
      <SectionTitle title="Вопросы с подвохом" />
      <InterviewList items={trickQuestions} />
      <SectionTitle title="Работа с людьми" />
    </section>
  );
}
