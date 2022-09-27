import React, { useState, useEffect } from "react";

var pdfjsLib = window['pdfjs-dist/build/pdf'];

function Pdf2TextClass() {
  var self = this;
  this.complete = 0;

  this.pdfToText = function (data, callbackPageDone, callbackAllDone) {
      var loadingTask = pdfjsLib.getDocument(data);
      loadingTask.promise.then(function (pdf) {

          var total = pdf._pdfInfo.numPages;
          var layers = {};
          for (var i = 1; i <= total; i++) {
              pdf.getPage(i).then(function (page) {
                  var n = page.pageNumber;
                  page.getTextContent().then(function (textContent) {

                      if (null != textContent.items) {
                          var page_text = "";
                          var last_block = null;
                          for (var k = 0; k < textContent.items.length; k++) {
                              var block = textContent.items[k];
                              if (last_block != null && last_block.str[last_block.str.length - 1] != ' ') {
                                  if (block.x < last_block.x)
                                      page_text += "\r\n";
                                  else if (last_block.y != block.y && (last_block.str.match(/^(\s?[a-zA-Z])$|^(.+\s[a-zA-Z])$/) == null))
                                      page_text += ' ';
                              }
                              page_text += block.str;
                              last_block = block;
                          }

                          textContent != null && console.log("page " + n + " finished."); //" content: \n" + page_text);
                          layers[n] = page_text + "\n\n";
                      }
                      ++self.complete;
                      //callbackPageDone( self.complete, total );
                      if (self.complete == total) {
                          window.setTimeout(function () {
                              var full_text = "";
                              var num_pages = Object.keys(layers).length;
                              for (var j = 1; j <= num_pages; j++)
                                  full_text += layers[j];
                              callbackAllDone(full_text);
                          }, 1000);
                      }
                  }); // end  of page.getTextContent().then
              }); // end of page.then
          } // of for

      });
  }; // end of pdfToText()
}; // end of class

const PdfToText = () => {

  const [isSelected, setIsSelected] = useState(null);
  const [errMsg, setErrMsg] = useState(null)
  const [statusResult, setStatusResult] = useState(null)

  var fr=new FileReader();
  var pdff = new Pdf2TextClass();

	const changeHandler = (event) => {

		setIsSelected(true);

    if (event.target.files[0].type === "application/pdf") {

      fr.readAsArrayBuffer(event.target.files[0])
      fr.onload=function(){
        pdff.pdfToText(
          fr.result, 
          // setStatusResult('page done...'),
          (text) => {
            console.log(text)
          }, 
          (text) => { 
            console.log(text);
            setStatusResult(text); 
          });
      }

    } else {
      setErrMsg('Cannot proceed, file is not pdf..')
      setStatusResult('')
    }
    
	};

  return (

    <div className="callout">
      <div className="container">
        <div class="row align-items-center my-5">
            <div class="w-100 p-3">

              <input type="file" name="file" onChange={changeHandler} />
              <br />{errMsg}
              {isSelected ? (
                <div>
                
                </div>
              ) : (
                <p>Select a file to show details. {errMsg}</p> 
              )}

          </div>
          <div class="w-100 p-3">

            {statusResult}

          </div>
        </div>
      </div>  
    </div>

  );

};

export default PdfToText