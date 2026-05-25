import './SectionTitle.css';

type SectionTitleProps = {
  title: string;
  id?: string;
};

export const SectionTitle = ({ title, id }: SectionTitleProps) => {
  return (
    <div id={id} className="section__title-wrapper">
      <h2 className="section__title">{title}</h2>
    </div>
  );
};
