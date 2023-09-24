import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from "react-router";
import { useSelector, useDispatch} from "react-redux";
import { setParticipantsAction } from "../../redux/actions";

export const  BasicCard = () => {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const noOfParticipants = useSelector((state:any)=> state.noOfParticipants);
  const navigate = useNavigate();
  const handleOnChange = (e:any) =>{

    dispatch(setParticipantsAction(e.target.value));
    if(e.target.value > 5){
        setIsError(true);
    }else {
        setIsError(false);
    }
  }

  const handleSubmit = () => {
    navigate("/participants");
  }
  return (
    <Card sx={{ minWidth: 275, minHeight: 300 }}>
      <CardContent>
        <Typography variant='h4' gutterBottom>
          Activity Planner
        </Typography>
         <Grid container alignItems={"center"} padding={"12px"} gap={"8px"}>
            <Grid item >
                <Typography>
                    No of Participants 
                </Typography>
            </Grid>
            <Grid item>
            <TextField id="outlined-basic" label="" variant="outlined" 
             onChange={handleOnChange}
             error={isError}
            />
            </Grid>
         </Grid>
      </CardContent>
      <CardActions>
      <Grid container alignItems={"center"} justifyContent={"center"}>
      <Button variant="contained" disabled={!(noOfParticipants?.trim()) || isError} 
       onClick={handleSubmit}
      >Submit</Button>
      </Grid>
      </CardActions>
    </Card>
  );
}
