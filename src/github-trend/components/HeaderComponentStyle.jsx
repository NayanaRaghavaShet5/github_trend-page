import { makeStyles } from "@material-ui/core/styles";

const HeaderComponentStyle = makeStyles({
    boxHeader: {
        padding: '16px',
        margin: '-1px -1px 0',
        backgroundColor: '#161b22',
        borderColor: '#30363d',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
    },
    button: {
        position: 'relative',
        float: 'left',
        padding: '5px 16px',
        fontWeight: 500,
        lineHeight: '20px',
        color: '#c9d1d9',
        border: '1px solid #30363d',
        textTransform : 'None',
        fontSize : 16
    },
    bordersLeft: {
        borderTopLeftRadius: '6px',
        borderBottomLeftRadius: '6px'
    },
    bordersRight: {
        borderTopRightRadius: '6px',
        borderBottomRightRadius: '6px'
    },
    activeButton: {
        zIndex: 2,
        color: '#f0f6fc',
        backgroundColor: '#1f6feb',
        borderColor: '#1f6feb'
    },
    responsiveDisplay: {
        '@media (min-width: 768px)': {
            display: 'flex !important'
        },
    },
    responsiveContent: {
        '@media (min-width: 768px)': {
            justifyContent: 'flex-end !important',
            marginLeft: 0,
            marginTop: 0
        }
    },
    marginBottomStyle: {
        marginBottom: '16px'
    },
    dropdown: {
        '& .MuiInputBase-root': {
            width: '200px',
            color: '#8b949e'
        },
        marginRight: '16px',
    },

});

export default HeaderComponentStyle;