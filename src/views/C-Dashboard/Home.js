import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './home.css';
import { Container } from '@mui/material';
import Rating from '@mui/material/Rating';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';


export default function Home() {
    const [value, setValue] = React.useState(2);
  return (
      <Container>
    <Card  className="card" sx={{marginTop: "30vh"}}>
      <CardMedia
        component="img"
        height="140"
        image="https://t3.ftcdn.net/jpg/01/15/51/04/240_F_115510431_vglxdf45WJZBLjGGanstf5JU6IEuMAR8.jpg"
        alt="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       DO YOU WANT TO HAVE LUNCH TODAY?
        </Typography>
      
      </CardContent>
      <CardActions >
      <Button variant="contained" className="button">YES</Button>
      <Button variant="contained" className="button">NO</Button>
      </CardActions>
    </Card>
    <Card  className="card"  sx={{marginTop: "10vh"}}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       FEEDBACK PLEASE!!
       <br></br>
       <InsertEmoticonIcon ></InsertEmoticonIcon>
       <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon>
        </Typography>
      
      </CardContent>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Card>
    </Container>


  );
}