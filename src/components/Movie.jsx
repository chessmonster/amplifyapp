/**
 * search movie details using a fast api service. this is a separate fastapi service that I also created
 * 
 * this separate service is hosted in aws ec2.
 * for now, it needs to run via an open cmd. so connect to the ec2 instance via ssh,
 * then run the fast api app using uvicorn.
 * 
 * might need to check if the IP is the same.
 * if it has already changed, update the nginx file with the new IP.
 * then restart nginx.
 */

import React from "react";

class Callout2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', movieDetails: ''};
      this.movieDetails = {value: ''}
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    async handleSubmit(event) {
      event.preventDefault()
      fetch(`http://3.15.155.66/movie/${this.state.value}`)
      .then((response) => response.json())
      .then((data) => {
         this.setState({movieDetails: JSON.stringify(data)});
      })
      .catch((err) => {
         console.log(err.message);
      });
    }
  
    render() {
      return (
        <div className="callout">
          <div className="container">

            <div class="row align-items-center my-5">
              <div class="w-100 p-3 col-lg-5">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Movie Title: &nbsp;
                    <input type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Callout" />
                </form>

                { this.state.movieDetails }

              </div>
            </div>

          </div>
        </div>
      );
    }
  }
  
export default Callout2