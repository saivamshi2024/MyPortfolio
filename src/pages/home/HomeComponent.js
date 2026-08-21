import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Introduction from "../../containers/introduction/Introduction";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          theme={this.props.theme}
          toggleTheme={this.props.toggleTheme}
          showThemes={this.props.showThemes}
          themes={this.props.themes}
          changeTheme={this.props.changeTheme}
        />

        <Greeting theme={this.props.theme} />

        <Introduction theme={this.props.theme} />

        <Skills theme={this.props.theme} />

        <Footer theme={this.props.theme} />

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
