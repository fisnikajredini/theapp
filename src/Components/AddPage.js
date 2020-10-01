import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RaisedButton from 'material-ui/RaisedButton';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 600,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();
  return (
    <div>
    <MuiThemeProvider>
    <React.Fragment> 
            <AppBar 
            title="Era Consulting"
            style={styles.banner}
            id="banner"
            />
            <h2 
            style={styles.subheading}
            >Додај</h2>
            <br/>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Избери Фирма</InputLabel>
                <Select native defaultValue="" id="grouped-native-select">
                    <option aria-label="None" value="" />
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                </Select>
            </FormControl>
            <br/>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Категорија</InputLabel>
                <Select native defaultValue="" id="grouped-native-select">
                    <option aria-label="None" value="" />
                    <option value={1}>01 - ОСНОВАЊЕ, ОРГАНИЗАЦИЈА И РАЗВОЈ</option>
                    <option value={2}>02 - УПРАВУВАЊЕ И РАКОВОДЕЊЕ</option>
                    <option value={3}>03 - КАНЦЕЛАРИСКО - АРХИВСКИ, ПРАВНИ И ОПШТИ РАБОТИ</option>
                    <option value={4}>04 - ЧОВЕЧКИ РЕСУРСИ</option>
                    <option value={5}>05 - ФИНАНСИСКО И МАТЕРИЈАЛНО РАБОТЕЊЕ</option>
                    <option value={6}>06 - ОДБРАНА И БЕЗБЕДНОСТ</option>
                    <option value={7}>07 - ЕЛЕКТРОНСКИ СИСТЕМ И АВТОМАТСКА ОБРАБОТКА НА ПОДАТОЦИ (АОП)</option>
                    <option value={8}>08 - ПОСЕБЕН ДЕЛ</option>
                </Select>
            </FormControl>
            <br/>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Под-Категорија</InputLabel>
                <Select native defaultValue="" id="grouped-native-select">
                <option aria-label="None" value="" />
                    <option value={1}>Option 1</option>
                    <option value={1}>Option 2</option>
                    <option value={2}>Option 3</option>
                    <option value={2}>Option 4</option>
                </Select>
            </FormControl>
            <br/>
            <RaisedButton 
                label="Назад"
                primary={false}
                style={styles.button}
            />
            <RaisedButton
                label="Додај"
                id="button-continue" 
                primary={true}
                style={styles.button}
            />
    </React.Fragment>
    </MuiThemeProvider>
    </div>
  );
}

const styles ={
    button: {
        margin: 15,
    },
    banner:{
        backgroundColor: "#3257a8"
    },
    subheading: {
        color: "rgb(136, 136, 136)",
        fontWeight: "600"
    },
}
