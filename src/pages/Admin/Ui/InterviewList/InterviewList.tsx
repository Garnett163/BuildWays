import './InterviewList.css';

type InterviewQuestion = {
  id: number;
  question: string;
  answer: string;
};

type InterviewListProps = {
  items: InterviewQuestion[];
};

export const InterviewList = ({ items }: InterviewListProps) => {
  return (
    <ul className="interview__list">
      {items.map(item => (
        <li key={item.id} className="interview__item">
          <h3 className="interview__question">
            {item.id}. {item.question}
          </h3>
          <p className="interview__answer">{item.answer}</p>
        </li>
      ))}
    </ul>
  );
};
