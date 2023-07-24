const Gradient1 = ` linear-gradient(
  -180deg,
  rgba(255, 255, 255, 0.5) 0%,
  rgba(0, 0, 0, 0.5) 100%)`;
const Gradient2 = `background-image: linear-gradient(to right top, #2874e5, #0093d5, #00a2aa, #75a991, #a8ad9d);)`;
export const theme = {
  userTheme: 'light',
  changeTheme: function () {
    if (this.userTheme === 'light') {
      return (this.userTheme = 'dark');
    } else if (this.userTheme === 'dark') {
      return (this.userTheme = 'light');
    }
  },

  // background: this.userTheme === 'light' ? `${Gradient1}` : `${Gradient2}`,
  primary_color: '#ed2828;',
  secondary_color: 'wheat',
  text_color: '#b1b0ac',
  box_shadow:
    'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,rgba(0, 0, 0, 0.09) 0px 32px 16px;',
};
