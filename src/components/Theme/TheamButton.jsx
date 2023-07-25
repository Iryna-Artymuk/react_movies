import css from './Theam.module.css';

import { SunSVG } from '../SVG/SunSVG';
import { MoonSVG } from '../SVG/MoonSVG';

import { useEffect, useState } from 'react';
import { light, dark } from '../Theme/Theme';
// стаття про зміну теми в style-components
// https://blog.logrocket.com/build-react-theme-switcher-app-styled-components/
export default function ChangeThemeButton({ HandleThemeChange }) {
  const [themeValue, SetthemeValue] = useState(light);

  const [buttonStatus, SetButtonStatus] = useState(false);
  console.log('buttonStatus: ', buttonStatus);
  console.log('themeValue', themeValue);
  const handleInputchange = () => {
    // огорнули все в setTimeout томущо onChange функція синхронна а   SetButtonStatus
    // SetthemeValue
    // асинхронні тому щоб зробити все асинхронно обгорнул в setTimeout з мінімаьною затримкою
    setTimeout(() => {
      SetButtonStatus(!buttonStatus);
      // SetthemeValue(() => {
      //   return buttonStatus ? SetthemeValue(dark) : SetthemeValue(light);
      // });
      // HandleThemeChange(themeValue);
    }, 100);
  };
  useEffect(() => {
    SetthemeValue(() => {
      return buttonStatus ? SetthemeValue(dark) : SetthemeValue(light);
    });
    HandleThemeChange(themeValue);
  }, [buttonStatus, HandleThemeChange, themeValue]);
  return (
    <>
      <input
        className={css.input}
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleInputchange}
        checked={buttonStatus}
      />
      <label className={css.label} htmlFor="darkmode-toggle">
        <SunSVG />
        <MoonSVG />
      </label>
    </>
  );
}
