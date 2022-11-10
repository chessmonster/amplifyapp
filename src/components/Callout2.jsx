import React from "react";

class Callout2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      let notif_source = '/notification_sound.wav'
      this.audio = new Audio(notif_source);

      this.speech = new SpeechSynthesisUtterance();
      this.speech.lang = "en-US";
      this.speech.text = "Next in line please come forward.";
      this.speech.volume = 2;
      this.speech.rate = 0.8;
      this.speech.pitch = 5;
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    async handleSubmit(event) {
      event.preventDefault()
      this.audio.play()
      await new Promise(r => setTimeout(r, 2000));
      window.speechSynthesis.speak(this.speech)
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="callout">
          <div className="container">

            <div class="row align-items-center my-5">
              <div class="w-100 p-3 col-lg-5">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Name: &nbsp;
                    <input type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Callout" />
                </form>
              </div>
            </div>

            <marquee 
                  height="100%" 
                  width="90%" 
                  direction="left"
                  scrollamount="3">
              <p>
                <font size="5000">{this.state.value}</font>
              </p> 
            </marquee>                
          
          </div>
        </div>
      );
    }
  }
  
export default Callout2