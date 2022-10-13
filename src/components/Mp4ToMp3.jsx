import React, { useState } from 'react';

// importing this is shit
// the docs on how to use this tool is not correct
// it is saying to use "import VideoToAudio from 'video-to-audio'" but this is wrong
// wala naman exported na value na ang pangalan ay VideoToAudio
// so I had to import the whole script and put an alias. 
// from there, I am able to access the convert function 
import * as converter from 'video-to-audio';


class Mp4ToMp3 extends React.Component {

    // const [count, setCount] = useState('');

    constructor(props) {
      super(props)
      console.log('in constructor')
    }

    async convert(event) {
      console.log('about to do conversion')

      let convertedAudioDataObj = await converter.convert(event.target.files[0], 'mp3');

      console.log('conversion done, about to download file to browser')

      let a = document.createElement("a");
      a.href = convertedAudioDataObj.data;
      a.download = convertedAudioDataObj.name + "." + convertedAudioDataObj.format;
      a.click();
    }
  
    render() {
      return (
        <div className="callout">
          <div className="container">

            <div class="row align-items-center my-5">
              <div class="w-100 p-3 col-lg-5">

                <input type='file' accept=".mp4, .avi, .mov" onChange={this.convert} />

              </div>
            </div>

          </div>
        </div>
      );
    }
  }
  
export default Mp4ToMp3