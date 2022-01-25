import React, { useEffect, useState, useReducer } from 'react';
import { Divider, Typography } from '@material-ui/core';
import clsx from "clsx";
import GithubTrendingStyle from './GithubTrendingStyle';
import HeaderComponent from './HeaderComponent';

const GithubTrending = () => {
    const classes = GithubTrendingStyle();

    return (
        <div>
            <div className={clsx(classes.topdiv, classes.responsiveDiv)}>
                <Typography className={classes.header} align="center" >Trending</Typography>
                <Typography className={clsx(classes.subtitle, classes.marginBottom)} align="center" >See what the GitHub community is most excited about today.</Typography>
            </div>
            <div className={clsx(classes.seconddiv, classes.responsiveDiv, classes.container)}>
                <div className={classes.box}>
                    <HeaderComponent />
                </div>
            </div>
        </div>
    )
}

export default GithubTrending;