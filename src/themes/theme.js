import BlueGrey from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: BlueGrey,
        secondary: pink,
        error: {
            main: red.A400
        }
    }
});

export default theme;