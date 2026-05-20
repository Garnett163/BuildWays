import './SectionTitle.css';

type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="section__title-wrapper">
      <h2 className="section__title">{title}</h2>
    </div>
  );
};
