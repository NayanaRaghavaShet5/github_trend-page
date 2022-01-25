import React, { useEffect, useState, useReducer } from 'react';
import { Typography, Button, Link, Avatar } from '@material-ui/core';
import clsx from "clsx";
import { FormControl, Select, MenuItem, InputLabel, FormHelperText } from '@material-ui/core';
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import GitHubIcon from '@material-ui/icons/GitHub';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import UsbOutlinedIcon from '@material-ui/icons/UsbOutlined';



import RepositoriesComponentStyle from './RepositoriesComponentStyle';

const RepositoriesComponent = () => {
    const classes = RepositoriesComponentStyle();

    return (
        <React.Fragment>
            <article className={classes.boxRow}>
                <div className={classes.startdiv}>
                    <div >
                        <Button className={classes.button} variant="outlined" startIcon={<StarBorderIcon />}>
                            Star
                        </Button>
                    </div>
                </div>
                <Link className={clsx(classes.link, classes.responsiveText)} href="#" underline="none" variant="body2" color="#58a6ff">
                    <span className={classes.gitBookIcon} />
                    {'Deep mind/Mujoco'}
                </Link>
                <Typography className={clsx(classes.description)} variant="body1" >Multi-Joint dynamics with Contact. A general purpose physics simulator.</Typography>

                <div className={classes.detailsdiv}>
                    <span className={classes.language}>Go</span>

                    <Link className={clsx(classes.numberLink)} href="#" underline="none" variant="body2" color="#58a6ff">
                        <span className={classes.starIcon} /> {'15000'} </Link>
                    <Link className={clsx(classes.numberLink)} href="#" underline="none" variant="body2" color="#58a6ff">
                        <span className={classes.gitForkIcon} /> {'15000'} </Link>

                    <span className={classes.imageDiv}>Built by
                        <Link className={clsx(classes.numberLink)} href="#" underline="none" variant="body2" color="#58a6ff">
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Link>
                    </span>

                    <span className={clsx(classes.responsiveDiv, classes.starsDiv)}>
                        <span className={classes.starIcon} /> 78 stars today
                    </span>
                </div>
            </article>

        </React.Fragment>
    )
}

export default RepositoriesComponent;