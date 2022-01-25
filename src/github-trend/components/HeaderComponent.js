import React, { useEffect, useState, useReducer } from 'react';
import { Typography } from '@material-ui/core';
import clsx from "clsx";
import { FormControl, Select, MenuItem, InputLabel, FormHelperText, Button } from '@material-ui/core';
import RepositoriesComponent from './RepositoriesComponent';
import DevelopersComponent from './DevelopersComponent';

import HeaderComponentStyle from './HeaderComponentStyle';

const HeaderComponent = () => {
    const classes = HeaderComponentStyle();

    const [spLang, setSpLang] = useState('Spoken Language : Any');
    const [lang, setLang] = useState('Language : Any');
    const [date, setDate] = useState('Date Range : Today');
    const [checkTrend, setTrend] = useState('repo');

    const handleChange = () => {

    }

    const handleLanguageChange = () => {

    }

    const handleDateChange = () => {

    }

    const handleDeveloper = () => {
        setTrend('dev');
    }

    const handleRepo = () => {
        setTrend('repo');
    }

    return (
        <div>
            <div className={clsx(classes.boxHeader, classes.responsiveDisplay)}>
                <nav className="subnav mb-0" aria-label="Trending" data-pjax>
                    <Button className={clsx(classes.button, classes.activeButton, classes.bordersLeft)} variant="outlined" onClick={handleRepo}>
                        Repositories
                        </Button>
                    <Button className={clsx(classes.button, classes.bordersRight)} variant="outlined" onClick={handleDeveloper}>
                        Developers
                        </Button>
                    {/* <a class="js-selected-navigation-item selected subnav-item" aria-current="page" data-selected-links="trending_repositories /trending" href="/trending">Repositories</a>
                    <a class="js-selected-navigation-item subnav-item" data-selected-links="trending_developers /trending/developers" href="/trending/developers">Developers</a> */}
                </nav>

                <div className={clsx(classes.responsiveContent, classes.responsiveDisplay)}>
                    <div className={classes.dropdown}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={spLang}
                                onChange={handleChange}
                                label=""
                            >
                                <MenuItem value="Spoken Language : Any">Spoken Language : Any</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className={classes.dropdown}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={lang}
                                onChange={handleLanguageChange}
                                label=""
                            >
                                <MenuItem value="Language : Any">Language : Any</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className={classes.dropdown}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={date}
                                onChange={handleDateChange}
                                label=""
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Date Range : Today">Date Range : Today</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div>
                {checkTrend === 'repo' ? <RepositoriesComponent /> : <DevelopersComponent />}
            </div>
        </div>
    )
}

export default HeaderComponent;