import React from "react"

import useVideoThumbnailsForm from "../../hooks/useVideoThumnailsForm"
import Thumbnails from "../Thumbnails/Thumbnails"

const VideoThumbnailsForm = () => {
  const {
    handleGenerateThumbnails,
    handleInputFileChange,
    inputUrl,
    isError,
    numberOfThumbnails,
    selectedThumbnail,
    setSelectedThumbnail,
    thumbnails,
  } = useVideoThumbnailsForm({
    type: "file",
  })

  return (
    <div className="fromfile">
      {inputUrl && (
        <div className="video text-center">
          <video
            src={inputUrl}
            poster={selectedThumbnail || ""}
            controls
          ></video>
        </div>
      )}
      <div className="formgroup">
        <input type="file" onChange={handleInputFileChange} accept="video/*" />

        <button
          onClick={handleGenerateThumbnails}
          disabled={!(numberOfThumbnails && inputUrl)}
        >
          Generate Thumbnails
        </button>
      </div>

      <div className="thumbnails-container">
        <Thumbnails
          thumbnails={thumbnails}
          selectedThumbnail={selectedThumbnail}
          setSelectedThumbnail={setSelectedThumbnail}
          isError={isError}
        />
      </div>
    </div>
  )
}

export default VideoThumbnailsForm
