import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({
  SimplePaper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginTop: -2,
      width: 602,
      height: 603,
    },
    '&.child': {
      height: 400,
    }
  },
  CardContent: {
    width: 602,
    height: 603,
  }
}));

export default function Miscellaneous(props) {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();



  return (
    <div className={classes.SimplePaper}>
      <Paper elevation={3}>
        <CardContent className={classes.CardContent}>
          <Typography>
            <h3>{props.title}</h3>
            <br />
          </Typography>
          <Typography className={classes.Paragraph} align="left">
          <Typography><b>{props.subtitle}</b></Typography>
          <br />

            <table >
            <td width='175'><Typography className={classes.body} variant="body2">{props.language1}</Typography></td>
            <td width='200' align="left"><Typography className={classes.body} variant="body2">{props.language2}</Typography></td>
            <td width='200' align="right"><Typography className={classes.body} variant="body2">{props.language3}</Typography></td>
            </table>
            <br/>

          <Typography><b>{props.subtitle2}</b></Typography>
          <Typography className={classes.body} variant="body2">
          <br />
          40 years gaming experience
          <ul>
          <li>Markint 4A</li>
          <li>Amstrad CPC 6128</li>
          <li>Sega Master System</li>
          <li>Amiga 500</li>
          <li>Playstation</li>
          <li>PCs</li>
          </ul>

          </Typography>
          <Typography className={classes.body} variant="body2">

          Co-organizer Lan Arena 4 in 2000 (esport meetup)
          </Typography>
          <Typography className={classes.body} variant="body2">
          <br />
          Amateur guitar player
          </Typography>
          <Typography className={classes.body} variant="body2">
          <br />
          Young talent contest jury member at Spa Francofolies
          </Typography><Typography className={classes.body} variant="body2">
          <br />
          Multiple Trips and Journeys abroad: United States, Mexico, Brasil, Germany, Spain, Italy, Belgium, Netherlands, Denmark, Romania, Algeria, Tunisia, Nigeria.
          </Typography>
          </Typography>
          <div style={{ position: 'relative', zIndex: '0'}}>
          </div>

          </CardContent>


      </Paper>
    </div>
  );
}
