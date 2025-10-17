import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {


  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //Não segue o link

    console.log('Clicado', Date.now());

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    //document.documentElement.setAttribute('data-theme', theme);
  
  }

  return (
    <nav className={styles.menu}>
      <a
        className={styles.MenuLink}
        href='#'
        aria-label='Página Inicial'
        title='Página Inicial'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.MenuLink}
        href='#'
        aria-label='Histórico'
        title='Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.MenuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a className={styles.MenuLink}
      href='#' 
      aria-label='Tema' 
      title='Tema'
      onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
