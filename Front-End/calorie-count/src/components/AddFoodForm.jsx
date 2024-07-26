import {Button, Grid, Paper, TextField} from '@mui/material';

export default function AddFoodForm() {
    return (
        <Paper elevation={3} sx={{minWidth: "380px", padding:"20px"}}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Calories" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{display: "flex", justifyContent:"flex-end", gap:"10px"}}>
                    <Button variant="outlined" sx={{alignSelf: "flex-end"}} >Clear</Button>
                    <Button variant="outlined" sx={{alignSelf: "flex-end"}} >Add</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}