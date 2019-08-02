import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: yellow,
        secondary: red
    }
})

export default theme;