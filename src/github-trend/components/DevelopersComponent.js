import React, { useEffect, useState, useReducer } from 'react';
import { Typography, Button, Link, Avatar } from '@material-ui/core';
import clsx from "clsx";
import { FormControl, Select, MenuItem, InputLabel, FormHelperText } from '@material-ui/core';
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import GitHubIcon from '@material-ui/icons/GitHub';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import UsbOutlinedIcon from '@material-ui/icons/UsbOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import DevelopersComponentStyle from './DevelopersComponentStyle';

const DevelopersComponent = () => {
    const classes = DevelopersComponentStyle();

    return (
        <React.Fragment>
            <article className={classes.boxRow}>
                <Link className={clsx(classes.numberEle, classes.responsiveText)} href="#" underline="none" variant="body2" color="#58a6ff">
                    1
                </Link>

                <div className={classes.image}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>

                <div className={classes.detailsdiv}>
                    <div className={classes.dataDiv}>
                        <div className={clsx(classes.nameDiv, classes.responsiveWidth)}>
                            <Link className={clsx(classes.link, classes.responsiveText)} href="#" underline="none" variant="body2" color="#58a6ff">
                                {'Deep mind/Mujoco'}
                            </Link>
                            <Link className={clsx(classes.subtext, classes.responsiveText)} href="#" underline="none" variant="body2" color="#58a6ff">
                                {'jessaue'}
                            </Link>
                        </div>
                        <div className={clsx(classes.nameDiv, classes.responsiveWidth)}>
                            <div className={clsx(classes.repo, classes.responsiveDetails)}>
                                <article className={classes.articleBox}>
                                    <div className={classes.popular}>
                                    <span className={classes.popularRepoIcon} />
                                        Popular repo
                                </div>
                                    <Link className={clsx(classes.gitlink)} href="#" underline="none" variant="body2" color="#58a6ff">
                                    <span className={classes.gitBookIcon} />
                                        {'jessaue'}
                                    </Link>
                                    <div className={classes.description}>
                                        simple terminal UI for git commands
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className={clsx(classes.sponserDiv, classes.responsiveDiv)}>
                        <div className={classes.sp}>
                            <Button className={classes.button} variant="outlined" startIcon={<FavoriteBorderIcon/>}>
                                <span className = {classes.text1}>Sponser</span>
                        </Button>
                        </div>

                        <div className={classes.follow}>
                            <Button className={classes.button} variant="outlined">
                            <span className = {classes.text1}>Follow</span>
                    </Button>
                        </div>
                    </div>
                </div>
            </article>
        </React.Fragment>
    )
}

export default DevelopersComponent;