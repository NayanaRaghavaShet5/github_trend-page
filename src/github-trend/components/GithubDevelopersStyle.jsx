import { makeStyles } from "@material-ui/core/styles";

const GithubDevelopersStyle = makeStyles({
    header: {
        fontSize: '32px',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        color: '#c9d1d9',
        fontWeight: 600,
        lineHeight: 1.5,
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    subtitle: {
        fontSize: '16px',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        color: '#8b949e',
        lineHeight: 1.5,
        wordWrap: 'break-word',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    marginBottom: {
        marginBottom: '20px'
    },
    responsiveDiv: {
        '@media (min-width: 544px)': {
            padding: '40px',
        },
        '@media (min-width: 1012px)': {
            padding: '16px',
        },
    },
    topdiv: {
        backgroundColor: '#161b22',
        borderBottom: '1px solid #30363d',
    },
    seconddiv: {
        paddingTop: '40px',
        position: 'relative',
        color:'#24292f'
    },
    container : {
        maxWidth: '1012px',
        marginRight: 'auto',
        marginLeft: 'auto'
    }, 
    box : {
        backgroundColor: '#0d1117',
        borderColor: '#0d1117',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '6px'
    },
});

export default GithubDevelopersStyle;