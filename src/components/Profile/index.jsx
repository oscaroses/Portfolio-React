import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ background: 'black', color: 'white' }} fixed align="center">
        <Card style={{ background: 'black', color: 'white' }} class="card">
      <CardHeader align="center"  title="Oscar Oses"/>
      <CardMedia
        class="card"
        image="../../img/Oscar.jpg"
        title="Oscar"
      /> 
      
      <CardContent >
        <Typography variant="body2" color="white" component="p">
         Hello, I'm Oscar Oses. <br></br>
         I am a full-stack web developer.
        </Typography>
      </CardContent>
    </Card>
    <Box display="flex" justifyContent="center">
  <Card style={{ background: 'black', color: 'white' }} class="card">
      <CardHeader align="center"  title="Full-Stack Skills"/>      
      <CardContent >
      <img align="left" alt="Visual Studio Code" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
      <img align="left" alt="HTML5" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
      <img align="left" alt="CSS3" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
      <img align="left" alt="JavaScript" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
      <img align="left" alt="React" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" /><br></br>
      <img align="left" alt="Git" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
      <img align="left" alt="Node.js" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />      
      <img align="left" alt="Express" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
      <img align="left" alt="Terminal" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
      <img align="left" alt="MongoDB" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
      </CardContent>
    </Card>
  <Card style={{ background: 'black', color: 'white' }} class="card">
      <CardHeader align="center"  title="Social"/>      
      <CardContent >
      <IconButton style={{ color: 'white' }} href="https://github.com/oscaroses" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton style={{ color: '#0077b5' }} href="https://www.linkedin.com/in/oscar-oses-13728a10b/" aria-label="LinkedIn">
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton style={{ color: '#1da1f2' }} href="https://twitter.com/kn0wsk1ll" aria-label="Twitter">
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton style={{ color: '#1196f5' }} href="https://www.facebook.com/kn0wsk1ll" aria-label="Facebook">
          <FacebookIcon fontSize="large" />
        </IconButton><br></br>
        <IconButton style={{ color: 'Red' }} href="https://docs.google.com/document/d/1JiSAbaA48b2H8MbBd6K7iLBjb7lG6j75JHtte6amzFc/edit?usp=sharing" aria-label="Facebook">
          <DescriptionTwoToneIcon fontSize="large" />
        </IconButton>
      </CardContent>
    </Card>
  </Box>
    </Container>
    </React.Fragment>
  );
}