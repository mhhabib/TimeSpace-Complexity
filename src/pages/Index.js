import React,{Component} from "react";
import {Container, Grid, Menu, Icon} from 'semantic-ui-react';
import {Route, BrowserRouter as Router,Link, Switch} from "react-router-dom";
import Home from "./Home";
import DataStructures from "./DataStructures";
import Algorithms from "./Algorithms";

class Index extends Component{
    state = { activeItem: 'Home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <>
            <div className="navBar">
                <p>Time 
                    <span className="space"> Space</span> 
                    <span className="complexity"> Complexity</span>
                    <span className="repo">
                    <Icon color="brown" name="github"/><a href="https://github.com/mhhabib/TimeSpace-Complexity.git" target='_blank' rel="noreferrer">Repository</a>
                    </span>
                </p>
            </div>
            <Container className="main">
                <Router>
                    <Grid>
                        <Grid.Column>
                        <Menu tabular widths={4}>
                            <Menu.Item 
                            name='Home'
                            active={activeItem === 'Home'}
                            onClick={this.handleItemClick}
                            as={Link} to="/"
                            color="green"
                            />
                            <Menu.Item
                            name='DataStructures'
                            active={activeItem === 'DataStructures'}
                            onClick={this.handleItemClick}
                            as={Link} to="/ds"
                            color="orange"
                            />
                            <Menu.Item
                            name='Algorithms'
                            active={activeItem === 'Algorithms'}
                            onClick={this.handleItemClick}
                            as={Link} to="/algo"
                            color="teal"
                            />
                            <Menu.Item
                            name='Feedback'
                            active={activeItem === 'Feedback'}
                            onClick={this.handleItemClick}
                            as={Link} to="#"
                            color="red"
                            />
                        </Menu>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/ds" component={DataStructures}/>
                            <Route path="/algo" component={Algorithms}/>
                        </Switch>
                        </Grid.Column>
                    </Grid>
                </Router>
            </Container>
            <footer className="footer">
                <p>Made with <Icon color="red" name="like"/>for the people who are going to be successful. [<a href="https://github.com/mhhabib" target='_blank' rel="noreferrer">mhhabib</a>]</p>
            </footer>
        </>
      )
    }
}
export default Index