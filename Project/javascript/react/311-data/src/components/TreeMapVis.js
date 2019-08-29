import React from 'react';
import {Treemap} from 'react-vis';

const server = "http://localhost:5000";
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
      <Treemap
        title={'My New Treemap'}
        animation
        colorType={'literal'}
        width={1920}
        height={1080}
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
