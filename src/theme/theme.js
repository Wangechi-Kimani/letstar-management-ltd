// import indigo from '@material-ui/core/colors/indigo';
// import pink from '@material-ui/core/colors/pink';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#556cd6',  //#556cd6
        },
        secondary: {
          // main: '#19857b',
          main: 'rgba(2, 35, 45)'
        },
        error: {
          main: red.A400,
        },
        background: {
          default: '#fff',
        },
      },
      grey: {
        main: 'rgb(168, 169, 172)'
      }
//   palette: {
//     primary: indigo,
//     secondary: pink,
//   },
});

export default theme;