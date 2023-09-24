import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router";
import { setParticipantsNameAction } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { fetchActivities} from "../../redux/actions";
export const  Participants = () => {
  const {noOfParticipants, participants} = useSelector((state:any)=> state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/result");
    dispatch(fetchActivities(noOfParticipants));
  }

  const handleNameChange = (e:any, index:any) => {
    dispatch(setParticipantsNameAction({name:e.target.value, index}))
  }

const fields: JSX.Element[] = [];
for (let i = 1; i <= noOfParticipants; i++) {
  fields.push(
  <Grid item padding={"6px"}>
  <TextField id="outlined-basic" label={`Participant ${i}`} variant="outlined" 
   onChange={(e)=>handleNameChange(e, i-1)}
  />
  </Grid>);
}
  return (
    <Card sx={{ minWidth: 400, minHeight: 400 }}>
      <CardContent>
        <Typography variant='h4' gutterBottom>
          Activity Planner
        </Typography>
         <Grid container alignItems={"center"} padding={"12px"} gap={"8px"}>
            <Grid item >
                <Typography>
                    No of Participants : {noOfParticipants}
                </Typography>
            </Grid>
         </Grid>
         <Grid container flexDirection={"column"} gap={"2px"}>
                {fields}
         </Grid>

      </CardContent>
      <CardActions>
     <Grid container alignItems={"center"} justifyContent={"center"}>
     <Button variant="contained" disabled={noOfParticipants != participants?.length} 
       onClick={handleSubmit}
      >Submit</Button>
     </Grid>
      </CardActions>
    </Card>
  );
}

