import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar:{
        backgroundColor: '#203040',
        '& a':{
            color: '#FFFFFF',
            marginLeft: 10,
        }
    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        textAlign: 'center',
    },
    brand:{
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    grow: {
        flexGrow: 1
    }
})

export default useStyles;