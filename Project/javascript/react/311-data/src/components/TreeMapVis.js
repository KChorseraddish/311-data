import React from 'react';
import {Treemap, DiscreteColorLegend} from 'react-vis';
import "./TreeMapVis.css"

const server = "http://localhost:5000";
class TreeMapVis extends React.Component {
  constructor(props){
    super(props);
    this.state = {dataset: {}, zoomed: false, hoveredItem: '', callVolume:''}
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
      <div className="TreeMapVis">
      <button onClick={this.handlePopulateTreeClick}>
        Populate Treemap
      </button>
      <br/>
      Item: {this.state.hoveredItem}
      <br/>
      Call Volume: {this.state.callVolume}
      <Treemap
        title={'My New Treemap'}
        animation
        colorType={'literal'}
        width={1550}
        height={800}
        onLeafClick={ x => {
            if (this.state.zoomed){
              this.setState({
                zoomed: false,
                hoveredItem: '',
                callVolume: '' })
              this.handlePopulateTreeClick()
            } else {
            this.handleNCZoom(x.data.title);
            this.setState({
              hoveredItem: '',
              callVolume: '' })
          }
          }
        }
        onLeafMouseOver={ x => {
          this.setState({hoveredItem: x.data.title, callVolume: x.data.size});
          console.log(x.data.title + " Call Volume: " + x.data.size);
          }
        }
        data={this.state.dataset}
        />
      </div>
    );
  }
}

export default TreeMapVis;
