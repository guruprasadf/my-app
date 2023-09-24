import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";

export const  Result = () => {
  const {participants, actvities} = useSelector((state:any)=> state);
  return (
    <Card sx={{ minWidth: 750, minHeight: 400 }}>
      <CardContent>
        <Typography variant='h4' gutterBottom>
          Activity Planner
        </Typography>
         <Grid container alignItems={"center"} padding={"12px"} gap={"8px"} flexDirection={"column"}>
            <Grid item >
                <Typography variant='h5'>
                 Participants
                </Typography>
            </Grid>
            <Grid item>
                <ul>
                {participants.map((data:any)=> <li>{data}</li>)}
                </ul>    
            </Grid>
         </Grid>
      </CardContent>
      <CardActions>
            <Grid container flexDirection={"column"}>
                    <Grid item>
                        <Typography variant='h5'>
                            Activities
                        </Typography>
                    </Grid>
                    <Grid item>
                <ul>
                {actvities.map((data:any)=> <li>{`${data?.activity} - $${data?.price}`}</li>)}
                </ul>  
            </Grid>
            </Grid>
      </CardActions>
    </Card>
  );
}



