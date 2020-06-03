import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  EducationPaper: {
    display: 'flex',
    flexWrap: 'noWrap',

    '& > *': {
      marginTop: -2,
      width: 602,
      height: 603,
    },
  Muipaper: {
    height: "100%",
    weight: "100%",
  },
  pos:{
    color: 'textSecondary'
  },
  Paragraph: {
    display:'flex',
    flexWrap:'noWrap',
    paddingLeft: 20,
  },
  Location: {
    variant:'body2',
    color:'blue'
  },
  body2: {
    paddingLeft: 20,
  }
  },
}));

export default function EducationPaper(props) {
  const classes = useStyles();

  return (
    <div className={classes.EducationPaper}>
      <Paper elevation={3}>
      <CardContent>
          <Typography>
            <h3>{props.title}</h3>
            <br />
          </Typography>
          <Typography className={classes.Paragraph} align="left">
            <Typography>{props.year}   {props.subtitle}</Typography><Typography variant="subtitle2" color="textSecondary" gutterBottom>{props.location}
          </Typography>
          <br />
          </Typography>

          <Typography className={classes.Paragraph} align="left">
            <Typography>{props.year2}  {props.subtitle2}</Typography><Typography variant="subtitle2" color="textSecondary" gutterBottom>{props.location2}
          </Typography><Typography className={classes.body2} variant="body2">{props.detail2}</Typography>
          <br />
          </Typography>

          <Typography className={classes.Paragraph} align="left">
             <Typography>{props.year3}  {props.subtitle3}</Typography><Typography variant="subtitle2" color="textSecondary" gutterBottom>{props.location3}
          </Typography><Typography className={classes.body2} variant="body2">{props.detail3}</Typography>

          <br />
          </Typography>

          <Typography className={classes.Paragraph } align="left">
            <Typography>{props.year4}   {props.subtitle4}</Typography><Typography variant="subtitle2" color="textSecondary" gutterBottom>{props.location4}
          </Typography>
          <br />
          </Typography>

          <Typography className={classes.Paragraph} align="left">
            <Typography>{props.year5}   {props.subtitle5}</Typography><Typography variant="subtitle2" color="textSecondary" gutterBottom>{props.location5}
          </Typography>
          </Typography>

          </CardContent>
      </Paper>
    </div>
  );
}
