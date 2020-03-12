import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

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

export default function Renewable(props) {
  const classes = useStyles();

  return (
    <div className={classes.SimplePaper}>
      <Paper elevation={3}>
        <CardContent className={classes.CardContent}>
          <Typography>
            <h3>{props.title}</h3>
            <br />
          </Typography>

          <Typography className={classes.Paragraph} align="left">
            <table>
            <td width='250'>{props.year}</td>
            <td width='200'><em>{props.subtitle}</em></td>
            <td width='150' align='right'>{props.location}</td>
            </table>

            <Typography><b>{props.position}</b></Typography>
          <Typography className={classes.body} variant="body2">
          <ul>
          <li>Business development</li>
          <li>Building permit application</li>
          <li>Photovoltaic connection request handling</li>
          <li>File management until construction start and connection establishment</li>
          <li><font color="#85929E">40 Units</font></li>

          </ul>

          </Typography>
          </Typography>
          <div style={{ position: 'relative', zIndex: '0'}}>
          <img src={require("./batisolAI.jpg")} alt="batisol" width="100%" height="300"/></div>

        </CardContent>


      </Paper>
    </div>
  );
}
