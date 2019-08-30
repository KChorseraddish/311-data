import React from 'react';
import {Treemap, DiscreteColorLegend} from 'react-vis';

const server = "http://localhost:5000";
const colorData = [
        {title: "Dead Animal Removal", color:"#FFB0AA"},
        {title: "Other",color:"#552900"},
        {title: "Homeless Encampment",color:"#427A82"},
        {title: "Single Streetlight Issue",color:"#D4726A"},
        {title: "Electronic Waste",color:"#69969C"},
        {title: "Feedback",color:"#82C38D"},
        {title: "Graffiti Removal",color:"#801D15"},
        {title: "Multiple Streetlight Issue",color:"#AA4139"},
        {title: "Metal/Household Appliances",color:"#D49D6A"},
        {title: "Illegal Dumping Pickup",color:"#804815"},
        {title: "Bulky Items",color:"#51A35F"},
        {title: "Report Water Waste",color:"#012E34"}
    ];
class TreeMapVis extends React.Component {
  constructor(props){
    super(props);
    this.state = {dataset: {}, zoomed: false}
  }

  componentWillMount = () => {
    this.handlePopulateTreeClick();
  }

  handlePopulateTreeClick = () => {
    var that = this;
    fetch(server + "/treemap")
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data.Payload);
      that.setState({dataset:data.Payload})
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  handleNCZoom = x => {
    console.log(x);
    var that = this;
    fetch(server + "/treemap", {
      mode: "cors",
      method: "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      "nc_name": x
    })
    })
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data.Payload);
      that.setState({dataset:data.Payload, zoomed: true})
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
      <button onClick={this.handlePopulateTreeClick}>
        Populate Treemap
      </button>
      <DiscreteColorLegend
        items={colorData} />
      <Treemap
        title={'My New Treemap'}
        animation
        colorType={'literal'}
        width={1000}
        height={1000}
        onLeafClick={ x => {
            if (this.state.zoomed){
              this.setState({zoomed: false})
              this.handlePopulateTreeClick()
            } else {
            this.handleNCZoom(x.data.title);
          }
          }
        }
        onLeafMouseOver={ x => {
          console.log(x.data.title);
          }
        }
        data={this.state.dataset}
        />
      </div>
    );
  }
}

export default TreeMapVis;
