import { createContext, useContext, useState } from 'react';

const Context = createContext();
// console.log('Context: ', Context);

export const useContextData = () => useContext(Context);
// Дозволяє отримати доступ до поточного значення контексту. Отримує поточний контекст із найближчого порівнянного <Provider> вище у дереві.
// Очікує єдиний аргумент – посилання на створений контекст.
// Поверне значення контексту найближчого провайдера для цього контексту вище дереві.
// Щоразу, коли оновиться значення контексту, залежний компонент ре-рендерується з новим значенням.

export const ContextDataProvider = ({ children }) => {
  const [userTheme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(userTheme === 'light' ? 'dark' : 'light');
  };
  const color =
    userTheme === 'light'
      ? props => props.theme.themeLight.primary_color
      : '#FFF';
  const backgroundColor = userTheme === 'light' ? ' #d8c9c9' : '#333';

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <Context.Provider
      value={{
        userTheme,
        toggleTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// export const ThemeContext = React.createContext<ThemeContext>(
//   {} as ThemeContext
// );

// export const ThemeProvider: React.FC = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>("light");
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const color = theme === "light" ? "#333" : "#FFF";
//   const backgroundColor = theme === "light" ? "#FFF" : "#333";

//   document.body.style.color = color;
//   document.body.style.backgroundColor = backgroundColor;

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
// створимо кастомний хук useContext
// за допомогою ньго можна передавати дані між компонентами  різних рівнів без допомоги пропсів
// створюємо компонент ContextDataProvider який поверне з себе Context.Provider  яким ми обгорнем наш АРР
// те що буде записано в value можна буде деструктуризувати і використовувати в будь-якому місці додатку
// https://www.edu.goit.global/uk/learn/7133518/31183/31221/textbook
