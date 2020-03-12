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
  Muipaper: {
    height: "100%",
    weight: "100%",
  },
  subtitle: {
    fontWeight: 'bold',
  }
  },
}));

export default function SimplePaper(props) {
  const classes = useStyles();

  return (
    <div className={classes.SimplePaper}>
      <Paper elevation={3}>

          <CardMedia />
        <CardContent>
          <Typography>
            <h3>{props.title}</h3>
            <br />
          </Typography>
          <Typography className={classes.Paragraph} align="left">
            <table>
            <td width='200'>{props.year0}</td>
            <td width='200'><em>{props.subtitle0}</em></td>
            <td width='150' align='right'>{props.location0}</td>
            </table>

            <Typography><b>{props.position0}</b></Typography>
          <Typography className={classes.body} variant="body2">
          <ul>
          <li>Developer training <font color="#85929E">22 weeks</font></li>
          <br />
          </ul>
          {props.detail}</Typography>
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
          <li>Setup an offshore mobile applications production unit</li>
          <li>Recrutment, management of technical, creation and sales teams</li>
          <li>Establishment of process and tools (methodology, marketing, web)</li>
          <li>Mobile app design</li>
          <li>Business development, needs assessment, functional specifications, contract drafting and signing, production supervision, endorsements, acceptance of mobile apps</li>
          <br />
          </ul>
          {props.detail}</Typography>
          </Typography>
          <Typography className={classes.Paragraph} align="left">
            <table>
            <td width='220'>{props.year2}</td>
            <td width='200'><em>{props.subtitle2}</em></td>
            <td width='150' align='right'>{props.location2}</td>
            </table>

            <Typography><b>{props.position2}</b></Typography>
          <Typography className={classes.body} variant="body2">
          <ul>
          <li>Internet and Intranet Consultant</li>

          </ul>
          </Typography>
          </Typography>

        </CardContent>

      </Paper>
    </div>
  );
}
