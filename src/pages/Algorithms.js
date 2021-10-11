import React,{Component} from "react";
import { Container, Table} from 'semantic-ui-react';
import algorithms from "../data/algorithms.json";

class Algorithms extends Component{
  render() {
    return (
      <>
      <Container className="main">
        <Table celled selectable structured color='teal' key='teal'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
                <Table.HeaderCell colSpan='3'>Time Complexity</Table.HeaderCell>
                <Table.HeaderCell colSpan='3'>Space Complexity</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell>Best</Table.HeaderCell>
                <Table.HeaderCell>Average</Table.HeaderCell>
                <Table.HeaderCell>Worst</Table.HeaderCell>
                <Table.HeaderCell>Best</Table.HeaderCell>
                <Table.HeaderCell>Average</Table.HeaderCell>
                <Table.HeaderCell>Worst</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

          <Table.Body>
          {algorithms.map(algo => {
              return (
                <Table.Row key={algo.id}>
                  <Table.Cell >{algo.name}</Table.Cell>
                  <Table.Cell positive>{algo.t_best}</Table.Cell>
                  <Table.Cell >{algo.t_avg}</Table.Cell>
                  <Table.Cell negative>{algo.t_worst}</Table.Cell>
                  <Table.Cell positive>{algo.s_best}</Table.Cell>
                  <Table.Cell >{algo.s_avg}</Table.Cell>
                  <Table.Cell negative>{algo.s_worst}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
      </>
    );
  }
}
export default Algorithms