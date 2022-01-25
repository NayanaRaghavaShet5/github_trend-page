import { makeStyles } from "@material-ui/core/styles";
import PopularRepoIcon from '../images/PopularIcon.png';
import GitBook from '../images/GitBook.png';

const DevelopersComponentStyle = makeStyles({
    boxRow: {
        borderTopColor: 'transparent',
        '&:first-of-type': {
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px'
        },
        padding: '16px',
        marginTop: '-1px',
        listStyleType: 'none',
        borderTopColor: '#21262d',
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        display: 'flex !important',
        border: '1px solid #30363d',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    startdiv: {
        display: 'flex',
        float: 'right !important'
    },
    numberEle: {
        width: '16px',
        fontSize: '14px !important',
        color: '#8b949e',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    responsiveText: {
        '@media (min-width: 768px)': {
            fontSize: '20px !important'
        }
    },
    image: {
        marginRight: '16px',
        marginLeft: '16px',
        boxSizing: 'border-box'
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
        color: '#c9d1d9',
        fontSize: '14px',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        boxSizing: 'border-box',
        flex: 'auto !important',
        display: 'flex !important'
    },
    dataDiv: {
        display: 'flex !important',
        width: '66.66666664%',
        boxSizing: 'border-box',
    },
    sponserDiv: {
        display: 'flex !important',
        wordWrap: 'break-word'
    },
    responsiveDiv: {
        '@media (min-width: 544px)': {
            marginLeft: '16px !important',
            justifyContent: 'flex-end !important',
            width: '33.33333332%',

        }
    },
    responsiveWidth: {
        '@media (min-width: 768px)': {
            width: '49.99999998%'
        }
    },
    nameDiv: {
        display: 'block !important',
        wordWrap: 'break-word',
        boxSizing: 'border-box',
    },
    link: {
        lineHeight: 1.25,
        fontWeight: 600,
        fontSize: '18px !important',
        color: '#58a6ff',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        margin: '.67em 0',
        display: 'block'
    },
    responsiveText: {
        '@media (min-width: 768px)': {
            fontSize: '20px !important'
        }
    },
    subtext: {
        lineHeight: 1.25,
        fontWeight: 400,
        fontSize: '18px !important',
        color: '#8b949e',
        backgroundColor: 'transparent',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        display: 'block'
    },
    responsiveDetails: {
        '@media (min-width: 768px)': {
            marginTop: '0 !important',
            marginBottom: '0 !important'
        },
    },
    repo: {
        display: 'block',
        boxSizing: 'border-box',
        wordWrap: 'break-word',
        marginBottom: ' 16px !important',
        marginTop: '8px !important'
    },
    articleBox: {
        display: 'block',
        boxSizing: 'border-box',
        wordWrap: 'break-word'
    },
    popular: {
        color: '#8b949e',
        textTransform: 'uppercase !important',
        fontSize: '14px !important',
        marginBottom: '4px !important',
        display: 'flex',
    },
    description: {
        color: '#8b949e',
        fontSize: '12px !important',
        marginBottom: '4px !important'
    },
    gitlink: {
        lineHeight: 1.25,
        fontWeight: 600,
        fontSize: '16px !important',
        margin: '.67em 0',
        color: '#58a6ff',
        maxWidth: '175px',
        display: 'inline-block',
        verticalAlign: 'top',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        display: 'flex',
    },
    follow: {
        boxSizing: 'border-box',
        display: 'block !important'
    },
    button: {
        width: '100%',
        textAlign: 'center',
        color: '#db61a2',
        padding: '3px 12px',
        fontSize: '14px',
        lineHeight: '20px',
        backgroundColor: '#21262d',
        borderColor: 'rgb(240 246 252 / 10%)',
        boxShadow: 'var(--color-btn-shadow),var(--color-btn-inset-shadow)',
        transition: '.2s cubic-bezier(0.3, 0, 0.5, 1)',
        transitionProperty: 'color,background-color,border-color',
        border: '1px solid',
        borderRadius: '6px',
        textTransform: 'None',
    },
    sp: {
        marginRight: '8px !important',
        boxSizing: 'border-box',
        display: 'block !important',
        '.MuiSvgIcon-root': {
            color: '#db61a2'
        },
    },
    text1 : {
        color:'#c9d1d9'
    },
    popularRepoIcon : {
        backgroundImage: `url(${PopularRepoIcon})`,
        '&:before': {
            display: 'block',
            width: 18,
            height: 20,
            backgroundImage: `url(${PopularRepoIcon})`,
            content: '""',
            borderRadius: '4px'
        },
    },
    gitBookIcon : {
        backgroundImage: `url(${GitBook})`,
        '&:before': {
            display: 'block',
            width: 19,
            height: 20,
            backgroundImage: `url(${GitBook})`,
            content: '""',
            borderRadius: '4px'
        },
    }


});

export default DevelopersComponentStyle;