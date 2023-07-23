import React from 'react';
import { useContextData } from '../Context/Context';
import css from './Theam.module.css';

import { SunSVG } from '../SVG/SunSVG';
import { MoonSVG } from '../SVG/MoonSVG';

export default function ChangeThemeButton() {
  const { toggleTheme } = useContextData();
  return (
    <>
      <input
        className={css.input}
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className={css.label} htmlFor="darkmode-toggle">
        <SunSVG />
        <MoonSVG />
      </label>
    </>
  );
}
