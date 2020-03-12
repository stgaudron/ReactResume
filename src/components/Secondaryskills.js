import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import php from '../assets/img/php.svg';
import Flask_logo from '../assets/img/Flask_logo.svg';
import C from '../assets/img/C.svg';
import express from '../assets/img/express.svg';
import javaScript from '../assets/img/javaScript.svg';
import mongodb from '../assets/img/mongodb.svg';
import MySQL from '../assets/img/MySQL.svg';
import nodejs from '../assets/img/nodejs.svg';
import python from '../assets/img/python.svg';
import react1 from '../assets/img/react1.svg';
import react from '../assets/img/react.svg';
import symfony from '../assets/img/symfony.svg';
import HalfRating from './Rating.js';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    maxWidth: 800,
    align: 'left'
  },
  header: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    maxWidth: 800,
    align: 'left'
  },
}));



 const skillData = [
  {
    title: 'Git',
    featured: false,
    rating: 2
  },
  {
    title: 'GitHub',
    featured: false,
    rating: 3
  },
  {
    title: "Git Flow",
    featured: false,
    rating: 3
  },
  {
    title: 'Linux Mint',
    featured: false,
    rating: 4
  },
  {
    title: 'Agile',
    featured: false,
    rating: 4
  },
  {
    title: 'Trello',
    featured: false,
    rating: 3
  },
  {
    title: 'MS Teams',
    featured: false,
    rating: 2
  },
  {
    title: 'UX/UI',
    featured: false,
    rating: 4
  },

  ];

  const softData = [
   {
     title: 'Communication',
     featured: false,
     rating: 5
   },
   {
     title: 'Teamwork',
     featured: false,
     rating: 5
   },
   {
     title: "Problem solving",
     featured: false,
     rating: 4
   },
   {
     title: 'Project Management',
     featured: false,
     rating: 4
   },
   {
     title: 'Management',
     featured: false,
     rating: 5
   },
   {
     title: 'Time Management',
     featured: false,
     rating: 4
   },
   {
     title: 'Needs Assessment',
     featured: false,
     rating: 4
   },
   {
     title: 'Adaptability',
     featured: false,
     rating: 5
   },

   ];

export default function SecondarySkillsList() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
    <Grid container spacing={3}>
    <Grid item xs={6}>


          <h2>Secondary Skills{"\n"}</h2>
          </Grid>
          <Grid item xs={6}>
          <h2>Soft Skills{"\n"}</h2>
          </Grid>
          </Grid>



          <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6} align="left">
              <table>
                {
                  skillData.map(skill => (
                  <tr key={skill.title} width="400">
                    <td width="100" align="left">{skill.title}</td> <td align="center">  <Rating name="size-small" size="small" defaultValue={skill.rating} precision={1} readOnly /></td>
                  </tr>
                  ))}

              </table>
            </Grid>

            <Grid item xs={6}>
              <table>
                {
                  softData.map(soft => (
                  <tr key={soft.title} width="400">
                    <td width="150" align="left">{soft.title}</td> <td align="center">  <Rating name="size-small" size="small" defaultValue={soft.rating} precision={1} readOnly /></td>
                  </tr>
                  ))}

              </table>
            </Grid>
          </Grid>
        </div>
        </div>
  );
}
