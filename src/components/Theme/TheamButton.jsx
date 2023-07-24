import React, { useContext } from 'react';
import { useContextData } from '../Context/Context';
import css from './Theam.module.css';

import { SunSVG } from '../SVG/SunSVG';
import { MoonSVG } from '../SVG/MoonSVG';
import { ThemeContext } from 'styled-components';

export default function ChangeThemeButton() {
  const { toggleTheme } = useContextData();
  // const { userTheme } = useContextData();

  // const themeContext = useContext(ThemeContext);
  // console.log('themeContext : ', themeContext);
  const handleChange = () => {
    // themeContext.changeTheme();
    // console.log(themeContext.userTheme);
    toggleTheme();
  };
  return (
    <>
      <input
        className={css.input}
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleChange}
      />
      <label className={css.label} htmlFor="darkmode-toggle">
        <SunSVG />
        <MoonSVG />
      </label>
    </>
  );
}
