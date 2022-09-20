import { useState } from "react"
import OcrReader from "./ImgToTextOcrReader"

function ImgToText() {
  const [ocrData, setOcrData] = useState("")

  // Receive OCR data as a prop from the child component
  const onReadOcrData = (ocrData) => {
    setOcrData(ocrData)
  }

  // Prop detects that the change image button was clicked
  const onRemoveClicked = () => {
    setOcrData("")
  }

  return (
    <div className="callout">
      <div className="container">
        <div class="row align-items-center my-5">
          <div class="w-100 p-3 col-lg-5">
            <OcrReader
              onReadOcrData={onReadOcrData}
              onRemoveClicked={onRemoveClicked}
            />
            {/* {ocrData && <SmsSender readText={ocrData}/>} */}
            <strong>{ ocrData }</strong>
          </div>
          </div>
      </div>
    </div>
  )
}

export default ImgToText