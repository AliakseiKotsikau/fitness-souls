import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Chart from '../chart/Chart';
import ExercisesTable from '../exercisesTable/ExercisesTable';
import DeathStatsBox from './deathStatsBox/DeathStatsBox';
import SingleBossInfo from '../specificBossInfo/SingleBossInfo';
import { useSelector, useDispatch } from 'react-redux'

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
    const bosses = useSelector(state => state.fitnessSouls.bosses);
    const currentBoss = useSelector((state) => state.fitnessSouls.currentBoss);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const totalNumberOfDeaths = () => {
        return props.worldDeathCount + numberOfDeathOnBosses();
    }

    const numberOfDeathOnBosses = () => {
        return Object.values(bosses).map(bossStat => +bossStat.deathCount).reduce((partalSum, deathCount) => partalSum + deathCount, 0);
    }

    const getUnbeatenBossesSorted = (bosses) => {
        return Object.entries(bosses)
            .filter(([_, boss]) => !boss.beaten)
            .sort((a, b) => a[1].orderNumber - b[1].orderNumber)
            .map(([bossName]) => bossName);
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
                    <Box sx={{ height: '20rem' }}>
                        <Box sx={{ width: '70rem', height: '6rem', textAlign: 'center', fontSize: '50px' }}>
                            Total number of deaths: {totalNumberOfDeaths()}
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <DeathStatsBox onClick={props.onHandleWorldDeath} numberOfDeathsText={'World: ' + props.worldDeathCount} />
                            <DeathStatsBox onClick={props.onHandleBossDeath} numberOfDeathsText={'Bosses: ' + numberOfDeathOnBosses()} />
                            <SingleBossInfo bosses={getUnbeatenBossesSorted(bosses)} deathCount={bosses[currentBoss].deathCount} onHandleBossKill={props.onHandleBossKill} />
                        </Box>
                    </Box>
                    <ExercisesTable exercisesStatistics={props.exercisesStatistics} />
                </StyledTabPanel>

                <StyledTabPanel value={1} textColor="primary"><Chart bossesArray={bosses} /></StyledTabPanel>
            </TabContext>
        </Box>
    );
}

export default StatsTabs