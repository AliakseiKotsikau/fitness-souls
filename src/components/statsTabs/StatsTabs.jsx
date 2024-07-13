import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import './statsTabs.css';
import { ThemeProvider } from '@emotion/react';
import DEFAULT_THEME from '../Theme';
import {styled } from '@mui/material/styles';


const StyledTab = styled(Tab)(({ theme }) => ({
    '&.Mui-selected': {
        backgroundColor: theme.palette.secondary.main
    }}
  ));
  

const StatsTabs = props => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={DEFAULT_THEME}>
            <Box sx={{ height: '2.9rem', borderBottom: 3, borderColor: 'primary' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    variant='fullWidth'
                    
                >
                    <StyledTab value="one" label="Statistics" />
                    <StyledTab value="two" label="Bosses" />
                </Tabs>
            </Box>
        </ThemeProvider>
    );
}

export default StatsTabs