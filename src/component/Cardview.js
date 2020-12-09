import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../asset/css/App.css";

class Cardview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:  JSON.parse(localStorage.getItem('loc_sites')),
      isLoaded: true,
      
    };
  }
  
  componentDidMount() {
    
        this.setState({
          isLoaded: true,
           data: JSON.parse(localStorage.getItem('loc_sites')),
           
        });
       
  }

  render() {
  

    
    console.log("component rendered");
    var { isLoaded, data } = this.state;
    console.log(data);

    if (!isLoaded) {
      return (
        <div>
          <b>Loading....</b>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            
            
            {data.map((item) => (
              <div key={item.id} className="col-sm-3">
                <Card>
                  <CardBody className="card-box">
                    <CardTitle>
                      <b>{item}</b>
                    </CardTitle>
                    <CardText> Number of Devices {6}</CardText>
                    <br />
                    <br />
                    <Link to="/Device">
                      {" "}
                      <Button variant="primary">View Details</Button>
                    </Link>
                  </CardBody>
                </Card>{" "}
                <br />
              </div>
            ))
            }
          </div>{" "}
        </div>
     );
    }
  }
}
export default Cardview;
