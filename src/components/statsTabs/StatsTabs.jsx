import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Chart from '../chart/Chart';


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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{typography: 'body1'}}>
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
            <StyledTabPanel value={0} textColor="primary">Statistics TODO</StyledTabPanel>
            <StyledTabPanel value={1} textColor="primary"><Chart/></StyledTabPanel>
        </TabContext>
        </Box>
    );
}

export default StatsTabs