import './ThemeToggleButton.css';
import { useAppDispatch } from '../../../../hooks/redux';
import { toggleTheme } from '../../../../redux/themeSlice';

export default function ThemeToggleButton() {
  const dispatch = useAppDispatch();
  return (
    <button className="theme-toggle-button" onClick={() => dispatch(toggleTheme())}>
      Toggle theme
    </button>
  );
}
