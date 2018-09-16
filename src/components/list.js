import React, { Component } from 'react';
import Modal from './modal.js';

class List extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          nikeName: "Molly Smith",
          email: "mollysmith@gmail.com"
        }
      ]
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }

  render() {   
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <tbody key={index}>
        <tr>
          <th className="text-left" >Memmbership</th>
          <th className="text-right">          
          <button className="btn myButton" data-toggle="modal" data-target="#exampleModal" onClick={() => this.replaceModalItem(index)} ><i className="material-icons">create</i></button>{" "}
          </th>
        </tr>
        <tr>
          <td className="text-left">NICKNAME</td>
          <td className="text-left">{item.nikeName}</td>
        </tr>
        <tr>
          <td className="text-left">EMAIL</td>
          <td className="text-left">{item.email}</td>
        </tr>
        </tbody>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
        <table className="container table-data">          
            {brochure}
        </table>
        <Modal
          nikeName={modalData.nikeName}
          email={modalData.email}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
} 

export default List;
