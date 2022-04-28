import React from "react";
import { useState, useEffect } from 'react';

const initialFormState = { name: '' }

function Callout() {

  console.log('called')

  const [name, setName] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  let notif_source = '/notification_sound.wav'
  let audio = new Audio(notif_source);
  audio.play();

  async function onChange(e) {
    setFormData({ ...formData});
    // await Storage.put(file.name, file);
  }

  let speech = new SpeechSynthesisUtterance();

  speech.lang = "en-US";
  speech.text = "Next in line please come forward.";
  speech.volume = 2;
  speech.rate = 0.8;
  speech.pitch = 5;        

  window.speechSynthesis.speak(speech);

  return (
    <div className="callout">
      <div class="container">
        <div class="row align-items-center my-5">
            <div class="w-100 p-3 col-lg-5">
              <h1 class="font-weight-light">Callout</h1>
              <p>
                <input
                  onChange={e => setFormData({ ...formData, 'name': e.target.value})}
                  placeholder="Name"
                  value={formData.name}
                />
              </p>
              
            </div>
        </div>
        <marquee 
          height="50" 
          width="90%" 
          direction="left"
          scrollamount="3">

          <p>
            <font size="100">{formData.name}</font>
          </p> 
        
        </marquee>
      </div>
    </div>
  );
}

export default Callout;