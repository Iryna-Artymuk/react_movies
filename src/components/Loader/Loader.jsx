import ReactLoading from 'react-loading';

const Loader = () => (
  <ReactLoading
    style={{
      margin: '0 auto',
      height: '20%',
      width: '20%',
      fill: `${({ theme }) => theme.colors.primary_color}`,
      borderRadius: 3,
    }}
    type={'cylon'}
    color={'red'}
  />
);

export default Loader;
