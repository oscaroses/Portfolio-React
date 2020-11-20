import React from 'react';
import './Projects.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';

export default function Projects() {

return (
    <div class="wrapper">
    <Card style={{ background: 'red', color: 'white' }} class="card">
      <CardHeader  title="RoamForth"/>
      <CardMedia
        class="card"
        image="../../../public/img/RoamForth.png"
        title="RoamForth"
      />
      <CardContent >
        <Typography variant="body2" color="white" component="p">
          This was the first major project we completed in our class. It uses two separate API's. One to search for national parks, the other maps the park.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ color: 'white' }} href="https://github.com/06jeremiah/Travel-Map-" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton style={{ color: 'white' }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
    <Card style={{ background: '#06aed5', color: 'white' }} class="card">
      <CardHeader
        title="Day-Planner"
      />
      <CardMedia
        class="card"
        image="../../../public/img/Day-Planner.png"
        title="Day-Planner"
      />
      <CardContent>
        <Typography variant="body2" color="white" component="p">
          This is the first project we created using JQuery, all the code is in the html file and is updated dynamically.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ color: 'white' }} aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton style={{ color: 'white' }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
    <Card class="card">
      <CardHeader
        title="Weather Dashboard"
      />
      <CardMedia
        class="card"
        image="../../../public/img/WeatherDashboard.png"
        title="Weather Dashboard"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        This is a Weath Dashboard application. It runs in the broweser and is powered by HTML, CSS, and Javascript. This application will give the user the current weather and also a five day forecast.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ color: 'black' }} aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton style={{ color: 'black' }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
    <Card style={{ background: 'green', color: 'black' }} class="card">
      <CardHeader
        title="Tracker-of-Workouts"
      />
      <CardMedia
        class="card"
        image="../../../public/img/Workout.png"
        title="Workout"
      />
      <CardContent>
        <Typography variant="body2" color="black" component="p">
          This was the second major project I worked on. We took our first project and built out the back end. We used 2 api's and MySQL for the database. We also incorporated authentication through passport.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ color: 'black' }} aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton style={{ color: 'black' }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
    <Card class="card">
      <CardHeader
        title="Employee Tracker"
        subheader="Project 1"
      />
      <CardMedia
        class="card"
        image="../../../public/img/EmployeeTrack.png"
        title="EmployeeTrack"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This was the first major project we completed in our class. It uses two separate API's. One to search for national parks, the other maps the park.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
    <Card class="card">
      <CardHeader
        title="ReadMe Generator"
        subheader="Project 1"
      />
      <CardMedia
        class="card"
        image="../../../public/img/ReadMeGen.png"
        title="ReadMeGen"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This was the first major project we completed in our class. It uses two separate API's. One to search for national parks, the other maps the park.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
  </div>
  );
}
