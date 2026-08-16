import './SystemDesignInterview.css';
import { SectionTitle } from '../../Ui/SectionTitle/SectionTitle';
import { InterviewList } from '../../Ui/InterviewList/InterviewList';

import { commonSystemDesignQuestions } from './data/commonSystemDesignQuestions';

export default function SystemDesignInterview() {
  return (
    <section className="system-design__interview">
      <SectionTitle title="System Design" />
      <InterviewList items={commonSystemDesignQuestions} />
    </section>
  );
}
