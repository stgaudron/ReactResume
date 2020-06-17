import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
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
  },
  {
    title: 'GitHub',
    featured: false,
  },
  {
    title: "Git Flow",
    featured: false,
  },
  {
    title: 'Linux Mint',
    featured: false,
  },
  {
    title: 'Agile',
    featured: false,
  },
  {
    title: 'Trello',
    featured: false,
  },
  {
    title: 'MS Teams',
    featured: false,
  },
  {
    title: 'UX/UI',
    featured: false,
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
                    <td width="100" align="left">{skill.title}</td> <td align="center">  </td>
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
