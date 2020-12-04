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
    <Card style={{ background: 'tomato', color: 'white' }} class="card">
      <CardHeader align="center"  title="RoamForth"/>
      <CardMedia
        component="img"
        height="%100"
        image="./img/RoamForth.png"
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
      align="center"
        title="Day-Planner"
      />
      <CardMedia
        component="img"
        height="%100"
        image="./img/Day-Planner.png"
        title="Day-Planner"
      />
      <CardContent>
        <Typography variant="body2" color="white" component="p">
          This is the first project we created using JQuery, all the code is in the html file and is updated dynamically.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ color: 'white' }} href="https://github.com/oscaroses/Day-Planner" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton style={{ color: 'white' }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
    <Card style={{ background: 'orange', color: 'white' }} class="card">
      <CardHeader
      align="center"
        title="Weather Dashboard"
      />
      <CardMedia
        component="img"
        height="%100"
        image="./img/WeatherDashboard.png"
        title="Weather Dashboard"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        This is a Weath Dashboard application. It runs in the broweser and is powered by HTML, CSS, and Javascript. This application will give the user the current weather and also a five day forecast.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ color: 'white' }} href="https://github.com/oscaroses/Weather-Dashboard" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton style={{ color: 'white' }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
    <Card style={{ background: 'green', color: 'black' }} class="card">
      <CardHeader
      align="center"
        title="Tracker-of-Workouts"
      />
      <CardMedia
        component="img"
        height="%100"
        image="./img/Workout.png"
        title="Workout"
      />
      <CardContent>
        <Typography variant="body2" color="black" component="p">
        This application will let you create and track workouts stored in a mongo noSQL database.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ color: 'black' }} href="https://github.com/oscaroses/Tracker-of-Workouts" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton style={{ color: 'black' }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
    <Card style={{ background: 'yellow', color: 'black' }} class="card">
      <CardHeader
      align="center"
        title="Employee Tracker"
        subheader="Project 1"
      />
      <CardMedia
        component="img"
        height="%100"
        image="./img/EmployeeTrack.png"
        title="EmployeeTrack"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        This is a CLI app that will let you make a database of your employees.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ color: 'black' }} href="https://github.com/oscaroses/Employee-Tracker" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton style={{ color: 'black' }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
    <Card class="card">
      <CardHeader
      align="center"
        title="ReadMe Generator"
        subheader="Project 1"
      />
      <CardMedia
        component="img"
        height="%100"
        image="./img/ReadMeGen.png"
        title="ReadMeGen"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        This application will generate a markdown file for the user. It is ran inside a command console. When the user initiates the index file (node index.js), they will be presented with a series of prompts. Once the data is collected from the user, it is apended to a template literal and a markdown file is generated.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ color: 'black' }} href="https://github.com/oscaroses/ReadMe-Generator" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton style={{ color: 'black' }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card>
  </div>
  );
}
