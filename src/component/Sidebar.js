import React, { Component } from "react";
import "../asset/css/App.css";
import Select from "react-select";
import options from "../constant/Constant_options.js";
import opt from "../constant/Constant_options.js";

import Cardview from "./Cardview";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      isLoaded: false,
    };
  }

  handleChange = (selectedOption) => {

  var sr=[];
  console.log(selectedOption.value);
  

  for(var i of JSON.parse(localStorage.getItem('sites')).sites){
    if(selectedOption.value===i.name){
       for(var j of i.sites){
         if(j.custom_attributes!=undefined && j.custom_attributes.WAS_Entity_Type==="site"){
            sr.push(j.name);


         }
       } 
      }
   
  }
  console.log(sr);

  localStorage.setItem('loc_sites',JSON.stringify(sr))
  console.log(JSON.parse(localStorage.getItem('loc_sites')))
    this.setState({ selectedOption });

  
  };
 

  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: [json],
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    const { selectedOption } = this.state;
      
    if (!isLoaded) {
      return (
        <div>
          <b>Loading....</b>
        </div>
      );
    } else {
      return (
        <div>
          <div className="pageheading">
            <h2>Overview Dashboard</h2>
          </div>

          <br></br>
          {items.map((item) => (
            <div key={items.id}>
              <input
                className="organisation"
                type="text"
                placeholder="Organisation name"
                name="US Stell"
                value={localStorage.getItem('org_name')}
                readOnly
              />
              <br></br> <br></br>
              <Select
                //defaultInputValue="Select Location"
                value={selectedOption}
                
                onChange={this.handleChange}
                options={opt}
              />
            </div>
          ))}
             
        </div>
      );
    }
  }
}

export default Sidebar;
