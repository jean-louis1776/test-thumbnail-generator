import { useState } from "react"
import VideoThumbnailsForm from "./components/VideoThumbnailsForm/VideoThumbnailsForm"

const App = () => {
  return (
    <div className="App">
      <div className="action-container">
        <div className="components-container">
          <VideoThumbnailsForm />
        </div>
      </div>
    </div>
  )
}

export default App
