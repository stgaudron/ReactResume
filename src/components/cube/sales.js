import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
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
  Muipaper: {
    height: "100%",
    weight: "100%",
  },
  subtitle: {
    fontWeight: 'bold',
  }
  },
}));

export default function Sales(props) {
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
            <td width='250'>{props.year0}</td>
            <td width='200'><em>{props.subtitle0}</em></td>
            <td width='150' align='right'>{props.location0}</td>
            </table>

            <Typography><b>{props.position0}</b></Typography>
          <Typography className={classes.body} variant="body2">
          <ul>
          <li>Business development</li>
          <li>Portfolio monitoring</li>
          <li>Promotionnal operations</li>
          <li>Activity reporting using Statigest <font color="#85929E">Total Revenue 12M€</font></li>

          </ul>

          <br />
          {props.detail}</Typography>
          <Typography className={classes.Paragraph} align="left">
            <table>
            <td width='250'>{props.year}</td>
            <td width='200'><em>{props.subtitle}</em></td>
            <td width='150' align='right'>{props.location}</td>
            </table>

            <Typography><b>{props.position}</b></Typography>
          <Typography className={classes.body} variant="body2">
          <ul>
          <li>Car import export</li>
          <br />
          </ul>
          {props.detail}</Typography>
          </Typography>
          <Typography className={classes.Paragraph} align="left">
            <table>
            <td width='250'>{props.year2}</td>
            <td width='200'><em>{props.subtitle2}</em></td>
            <td width='150' align='right'>{props.location2}</td>
            </table>

            <Typography><b>{props.position2}</b></Typography>
          <Typography className={classes.body} variant="body2">
          <ul>
          <li>Business School Diploma: Marketing Major</li>
          <li>2018 Spring Quart at Ohio State University <font color="#85929E">Bac +5</font></li>
          <br />
          </ul>
          </Typography>


          </Typography>
          </Typography>
        </CardContent>

      </Paper>
    </div>
  );
}
