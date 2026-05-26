import { useEffect } from 'react';
import { useAppSelector } from './redux';

export function useTheme() {
  const theme = useAppSelector(state => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return theme;
}
