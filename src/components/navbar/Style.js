import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        padding: '7px',
        height: '43px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
    },
    cat: {
        color: 'black',
        textDecoration: 'none',
    },
}))

export default style
