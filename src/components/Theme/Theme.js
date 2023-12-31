// const Gradient1 = ` linear-gradient(
//   -180deg,
//   rgba(255, 255, 255, 0.5) 0%,
//   rgba(0, 0, 0, 0.5) 100%)`;
// // const Gradient2 = `linear-gradient(to right top, #2874e5, #0093d5, #00a2aa, #75a991, #a8ad9d);)`;
// export const theme = {
//   userTheme: 'light',
//   changeTheme: function () {
//     if (this.userTheme === 'light') {
//       return (this.userTheme = 'dark');
//     } else if (this.userTheme === 'dark') {
//       return (this.userTheme = 'light');
//     }
//   },
//   // this.userTheme === 'light' ? `${Gradient1}` : `${Gradient2}`;
//   // background: function () {
//   //   if (this.userTheme === 'light') {
//   //     return `${Gradient1}`;
//   //   } else if (this.userTheme === 'dark') {
//   //     return `${Gradient2}`;
//   //   }
//   // },
//   background: `${Gradient1}`,
//   primary_color: '#046049;',
//   secondary_color: 'wheat',
//   text_color: '#494947',
//   box_shadow:
//     'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,rgba(0, 0, 0, 0.09) 0px 32px 16px;',
// };
export const light = {
  name: 'light-theme',
  colors: {
    body_background: '#fefbfb',
    background: '#f7f1fb',
    primary_color: '#7a5af5',
    secondary_color: '#ba9ffb',
    text_color: '#000',
    box_shadow: `rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,rgba(0, 0, 0, 0.09) 0px 32px 16px`,
  },
};

export const dark = {
  name: 'dark-theme',
  colors: {
    body_background: '#737171',
    background: '#7a5af5',
    primary_color: '#ba9ffb',
    secondary_color: '#7b718b',
    text_color: '#fff',
    box_shadow: `rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,rgba(0, 0, 0, 0.09) 0px 32px 16px`,
  },
};
