import { useEffect, useState } from 'react';
import './InterviewSideNavigation.css';

type NavigationItem = {
  id: string;
  title: string;
};

type InterviewSideNavigationProps = {
  items: NavigationItem[];
};

export function InterviewSideNavigation({ items }: InterviewSideNavigationProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <nav className="side-navigation">
      <ul className="side-navigation__list">
        {items.map(item => (
          <li key={item.id} className="side-navigation__item">
            <button
              onClick={() => handleClick(item.id)}
              className={
                activeId === item.id ? 'side-navigation__link side-navigation__link--active' : 'side-navigation__link'
              }
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
