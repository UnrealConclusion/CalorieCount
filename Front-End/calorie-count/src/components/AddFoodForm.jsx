import {Box, Button, Paper, TextField} from '@mui/material';

export default function AddFoodForm() {
    return (
        <Paper elevation={3} sx={{minWidth: "380px"}}>
            <Box component="form" padding="20px" display="flex" gap="20px" justifyContent="center" flexWrap="wrap">
                <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth/>
                <TextField id="outlined-basic" label="Calories" variant="outlined" fullWidth/>
                <Button variant="outlined" sx={{alignSelf: "flex-end"}} >Clear</Button>
                <Button variant="outlined" sx={{alignSelf: "flex-end"}} >Add</Button>
            </Box>
        </Paper>
    );
}