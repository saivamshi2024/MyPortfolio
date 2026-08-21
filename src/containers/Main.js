import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";

import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash
                  {...props}
                  theme={this.props.theme}
                  toggleTheme={this.props.toggleTheme}
                  showThemes={this.props.showThemes}
                  themes={this.props.themes}
                  changeTheme={this.props.changeTheme}
                />
              ) : (
                <Home
                  {...props}
                  theme={this.props.theme}
                  toggleTheme={this.props.toggleTheme}
                  showThemes={this.props.showThemes}
                  themes={this.props.themes}
                  changeTheme={this.props.changeTheme}
                />
              )
            }
          />

          <Route
            path="/home"
            render={(props) => (
              <Home
                {...props}
                theme={this.props.theme}
                toggleTheme={this.props.toggleTheme}
                showThemes={this.props.showThemes}
                themes={this.props.themes}
                changeTheme={this.props.changeTheme}
              />
            )}
          />

          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience
                {...props}
                theme={this.props.theme}
                toggleTheme={this.props.toggleTheme}
                showThemes={this.props.showThemes}
                themes={this.props.themes}
                changeTheme={this.props.changeTheme}
              />
            )}
          />

          <Route
            path="/education"
            render={(props) => (
              <Education
                {...props}
                theme={this.props.theme}
                toggleTheme={this.props.toggleTheme}
                showThemes={this.props.showThemes}
                themes={this.props.themes}
                changeTheme={this.props.changeTheme}
              />
            )}
          />

          <Route
            path="/opensource"
            render={(props) => (
              <Opensource
                {...props}
                theme={this.props.theme}
                toggleTheme={this.props.toggleTheme}
                showThemes={this.props.showThemes}
                themes={this.props.themes}
                changeTheme={this.props.changeTheme}
              />
            )}
          />

          <Route
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                theme={this.props.theme}
                toggleTheme={this.props.toggleTheme}
                showThemes={this.props.showThemes}
                themes={this.props.themes}
                changeTheme={this.props.changeTheme}
              />
            )}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => (
                <Splash
                  {...props}
                  theme={this.props.theme}
                  toggleTheme={this.props.toggleTheme}
                  showThemes={this.props.showThemes}
                  themes={this.props.themes}
                  changeTheme={this.props.changeTheme}
                />
              )}
            />
          )}

          <Route
            path="/projects"
            render={(props) => (
              <Projects
                {...props}
                theme={this.props.theme}
                toggleTheme={this.props.toggleTheme}
                showThemes={this.props.showThemes}
                themes={this.props.themes}
                changeTheme={this.props.changeTheme}
              />
            )}
          />

          <Route
            path="*"
            render={(props) => (
              <Error404
                {...props}
                theme={this.props.theme}
                toggleTheme={this.props.toggleTheme}
                showThemes={this.props.showThemes}
                themes={this.props.themes}
                changeTheme={this.props.changeTheme}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
