import { makeStyles } from "@material-ui/core/styles";
import GitBook from '../images/GitBook.png';
import GitFork from '../images/GitFork.png';
import StarIcon from '../images/StarIcon.png';

const RepositoriesComponentStyle = makeStyles({
    boxRow: {
        '&:first-of-type': {
            borderTopColor: 'transparent',
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px'
        },
        padding: '16px',
        marginTop: '-1px',
        listStyleType: 'none',
        borderTopColor: '#21262d',
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        border: '1px solid #30363d',
    },
    startdiv: {
        display: 'flex',
        float: 'right !important'
    },
    link: {
        lineHeight: 1.25,
        fontWeight: 600,
        fontSize: '18px !important',
        color: '#58a6ff',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        margin: '.67em 0'
    },
    responsiveText: {
        '@media (min-width: 768px)': {
            fontSize: '20px !important'
        }
    },
    description: {
        color: '#8b949e',
        paddingRight: '24px',
        marginTop: '4px !important',
        marginBottom: '4px !important',
        width: '74.99999997%',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        wordWrap: 'break-word',
        fontSize: '15px',
        lineHeight: 1.5
    },
    detailsdiv: {
        color: '#8b949e',
        fontSize: '12px',
        marginTop: '8px',
        boxSizing: 'border-box',
        display: 'block'
    },
    language: {
        display: 'inline-block !important',
        marginRight: '16px',
        marginLeft: '0 !important',
        color: '#8b949e !important',
        fontSize: '14px !important',
        wordWrap: 'break-word',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    numberLink: {
        display: 'inline-block !important',
        marginRight: '16px !important',
        color: '#8b949e',
        fontSize: '14px !important',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    imageDiv: {
        display: 'inline-block !important',
        marginRight: '16px !important',
        color: '#8b949e !important',
        fontSize: '14px !important',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    starsDiv: {
        display: 'inline-block !important',
        float: 'right!important',
        color: '#8b949e',
        fontSize : '14px',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    responsiveDiv: {
        '@media (min-width: 544px)': {
            float: 'right !important'
        }
    },
    button: {
        color: '#c9d1d9',
        padding: '3px 12px',
        fontSize: '14px',
        lineHeight: '20px',
        backgroundColor: 'var(--color-btn-bg)',
        borderColor: 'rgb(240 246 252 / 10%)',
        boxShadow: 'var(--color-btn-shadow),var(--color-btn-inset-shadow)',
        transition: '.2s cubic-bezier(0.3, 0, 0.5, 1)',
        transitionProperty: 'color,background-color,border-color',
        border: '1px solid',
        borderRadius: '6px',
        textTransform : 'None',
        '.MuiSvgIcon-root' : {
            color: '#8b949e'
        }
    },
    gitBookIcon : {
        backgroundImage: `url(${GitBook})`,
        '&:before': {
            display: 'inline-block !important',
            width: 19,
            height: 20,
            backgroundImage: `url(${GitBook})`,
            content: '""',
            borderRadius: '4px'
        },
    },
    gitForkIcon : {
        backgroundImage: `url(${GitFork})`,
        '&:before': {
            display: 'inline-block !important',
            width: 19,
            height: 16,
            backgroundImage: `url(${GitFork})`,
            content: '""',
            borderRadius: '4px'
        },
    },
    starIcon : {
        backgroundImage: `url(${StarIcon})`,
        '&:before': {
            display: 'inline-block !important',
            width: 19,
            height: 16,
            backgroundImage: `url(${StarIcon})`,
            content: '""',
            borderRadius: '4px'
        },
    }
});

export default RepositoriesComponentStyle;