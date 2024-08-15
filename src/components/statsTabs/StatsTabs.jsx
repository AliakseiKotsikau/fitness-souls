import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Chart from '../chart/Chart';
import ExercisesTable from '../exercisesTable/ExercisesTable';
import deathStats from '../../data/dark-souls.json'

const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
    padding: '0rem'
}
));

const StyledTab = styled(Tab)(({ theme }) => ({
    '&.Mui-selected': {
        backgroundColor: theme.palette.secondary.main
    }
}
));

const StatsTabs = props => {
    const [value, setValue] = React.useState(0);
    const [bosses, setBosses] = React.useState(mapBossesToArray);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function mapBossesToArray() {
        let bossesArray = props.bosses;
        return Object.keys(bossesArray)
            .map(key => ({ 'enemy': key, 'deathCount': +bossesArray[key].deathCount, 'orderNumber': +bossesArray[key].orderNumber }))
            .sort((a, b) => a.orderNumber - b.orderNumber);
    }

    const totalNumberOfDeaths = () => {
        return deathStats.world + bosses.reduce((partalSum, bossStat) => partalSum + bossStat.deathCount, 0);
    }

    return (
        <Box sx={{ typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ height: '2.9rem', width: '70rem', borderBottom: 3, borderColor: 'primary' }}>
                    <TabList
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        variant='fullWidth'
                    >
                        <StyledTab value={0} label="Statistics" />
                        <StyledTab value={1} label="Bosses" />
                    </TabList>
                </Box>

                <StyledTabPanel value={0} textColor="primary">
                    <Box sx={{ width: '70rem', height: '10rem', textAlign: 'center', fontSize: '50px' }}>
                        Total number of deaths: {totalNumberOfDeaths()}
                    </Box>
                    <ExercisesTable exercisesStatistics={props.exercisesStatistics}/>
                </StyledTabPanel>

                <StyledTabPanel value={1} textColor="primary"><Chart bossesArray={bosses} /></StyledTabPanel>
            </TabContext>
        </Box>
    );
}

export default StatsTabs