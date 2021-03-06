import React,{Component} from "react";
import { Container, Table, Header} from 'semantic-ui-react';
import datastructures from '../data/datastructures.json';

class DataStructures extends Component{
  render() {
    return (
      <>
      <Container className="main">
        <Header as='h2' color="orange">Data Structures Complexity Analysis</Header>
        <div class="ui divider"></div>
        <p><b>A</b> specialized format for organizing, processing, retrieving and storing data. There are several basic and advanced types of data structures, all designed to arrange data to suit a specific purpose. </p>

        <p> <b>All</b> the data structures time and space complexity are listed the below table. </p>
      <Table celled selectable structured color='yellow' key='yellow' className="tables">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
                <Table.HeaderCell colSpan='3'>Time Complexity</Table.HeaderCell>
                <Table.HeaderCell colSpan='1'>Space Complexity</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell>Best</Table.HeaderCell>
                <Table.HeaderCell>Average</Table.HeaderCell>
                <Table.HeaderCell>Worst</Table.HeaderCell>
                <Table.HeaderCell>Worst</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

          <Table.Body>
          {datastructures.map(ds => {
              return (
                <Table.Row key={ds.id}>
                  <Table.Cell >{ds.name}</Table.Cell>
                  <Table.Cell positive>{ds.t_best}</Table.Cell>
                  <Table.Cell >{ds.t_avg}</Table.Cell>
                  <Table.Cell negative>{ds.t_worst}</Table.Cell>
                  <Table.Cell negative>{ds.s_worst}</Table.Cell>
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
export default DataStructures