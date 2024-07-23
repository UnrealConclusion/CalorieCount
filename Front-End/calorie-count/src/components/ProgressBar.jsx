import PropTypes from 'prop-types';
import {Box, CircularProgress, Paper, Typography} from '@mui/material';

export default function ProgressBar({calorieCount=2000, calorieLimit=2000}) {
    const percentage = Math.round((calorieCount / calorieLimit) * 100); // percentage of calorie limit consumed (rounded to nearest whole percentage)

    return (
        <Paper elevation={3} 
            sx={{
                minWidth: "380px",
                padding: "20px"
            }}
        >
            <Box 
                sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}
            >
                <CircularProgress position='absolute' variant="determinate" value={100} size="15em"/>
                <Typography
                    position='absolute'
                    margin='0'
                    variant="h3" 
                    align="center" 
                    gutterBottom
                >
                {percentage}%
                </Typography>   
            </Box>
            <Box>
            <Typography
                    marginTop='10px'
                    marginBottom='0'
                    variant="h2" 
                    align="center" 
                    gutterBottom
                >
                    {calorieCount} / {calorieLimit}
                </Typography>
            </Box>
        </Paper>
    );
}

ProgressBar.propTypes = {
    calorieCount: PropTypes.number.isRequired, // current calorie count
    calorieLimit: PropTypes.number.isRequired // the maximum number of calories we can consume
};