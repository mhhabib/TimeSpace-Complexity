import React, {Component} from "react";
import {Container, Header} from 'semantic-ui-react';



class Home extends Component{
  
    render() {
      
      return (
        <>
            <Container text className="main">        
              <Header as='h2'>Complexity Analysis</Header>
              <div class="ui divider"></div>
              <p>
                Time complexity of an algorithm quantifies the amount of time taken by an algorithm to run as a function of the length of the input. Similarly, 
                Space complexity of an algorithm quantifies the amount of space or memory taken by an algorithm to run as a function of the length of the input.
              </p>
              <p>
                All the mathemetical Notations are: 
                <ul>
                  <li>
                   <b><em> Big O (O())</em></b> describes the upper bound of the complexity.
                  </li>
                  <li>
                  <b><em> Omega (Ω())</em></b> describes the lower bound of the complexity.
                  </li>
                  <li>
                  <b><em> Theta (Θ())</em></b> describes the exact bound of the complexity.
                  </li>
                  <li>
                  <b><em> Little O (o())</em></b> describes the upper bound excluding the exact bound.
                  </li>
                </ul>
              </p>
              <p><b>So,</b> far creating this repository aims to provide all the time and space complexity of Data Structures and algorithms under the same roof.
              Keep eye on the table to brush up the prior known terms on before the night of interview or any other programming examinations.</p>

              <p><b><i>Best of luck for the upcomming war!</i></b></p>
            </Container>
            
        </>
      )
    }
}
export default Home