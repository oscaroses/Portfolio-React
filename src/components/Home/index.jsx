import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { AppBar } from "@material-ui/core";
import Profile from "../Profile"
import Projects from "../Projects"
import Contact from "../Contact"

const Home = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "profile",
    1: "projects",
    2: "contact"
  }

  const indexToTabName = {
    "profile": 0,
    "projects": 1,
    "contact": 2
  }

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`)
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar  style={{ background: 'black' }} position="static">
        <Tabs display="flex" justifyContent="center" value={selectedTab} onChange={handleChange}>
          <Tab style={{ color: 'white' }} label="Profile" />
          <Tab style={{ color: 'white' }} label="Projects" />
          <Tab style={{ color: 'white' }} label="Contact" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <Profile />}
      {selectedTab === 1 && <Projects />}
      {selectedTab === 2 && <Contact />}
    </>
  );
}

export default Home;