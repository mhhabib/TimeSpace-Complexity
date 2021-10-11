import React,{Component} from "react";
import {Container, Grid, Menu, Segment, Icon} from 'semantic-ui-react';
import {Route, BrowserRouter as Router,Link, Switch} from "react-router-dom";
import Home from "./Home";
import DataStructures from "./DataStructures";
import Algorithms from "./Algorithms";

class Index extends Component{
    state = { activeItem: 'home' }

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
                        <Grid.Column width={4}>
                            <Menu fluid vertical tabular>
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                                as={Link} to="/"
                            />
                            <Menu.Item
                                name='Data Structures'
                                active={activeItem === 'Data Structures'}
                                onClick={this.handleItemClick}
                                as={Link} to="/ds"
                            />
                            <Menu.Item
                                name='Algorithms'
                                active={activeItem === 'Algorithms'}
                                onClick={this.handleItemClick}
                                as={Link} to="/algo"
                            />
                            <Menu.Item
                                name='Feedback'
                                active={activeItem === 'Feedback'}
                                onClick={this.handleItemClick}
                            />
                            </Menu>
                        </Grid.Column>
                
                        <Grid.Column stretched width={12}>
                            <Segment>
                                <Switch>
                                    <Route path="/" exact component={Home}/>
                                    <Route path="/ds" component={DataStructures}/>
                                    <Route path="/algo" component={Algorithms}/>
                                </Switch>
                            </Segment>
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