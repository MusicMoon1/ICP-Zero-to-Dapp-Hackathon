import { Icon } from "@iconify/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
const UploadAudio = ({ audio, setAudio, setDuration,setAudios }) => {
  const [error, setError] = useState(null);
  useEffect(() => {
    if (audio) {
      setAudio(audio);
      // get duration of audio
      const audioEl = document.createElement("audio");
      audioEl.src = audio;
      audioEl.addEventListener("loadedmetadata", () => {
        setDuration(audioEl.duration);
      });
    }
  }, [audio]);
  const onDrop = useCallback((acceptedFiles) => {
    setError(null);
    if (acceptedFiles.length > 1) {
      setError("Please upload only one file");
      return;
    }
    // if acceptedFiles is not an audio, reject it
    if (!acceptedFiles[0].type.startsWith("audio/")) {
      setError("Please upload only audio file");
      return;
    }

    // make  audio previewable
    const objectUrl = URL.createObjectURL(acceptedFiles[0]);
    setAudio(objectUrl);
    setAudios(acceptedFiles[0])
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "audio/*",
  });
  return (
    <>
      <div className=" pt-10 text-white">
        <div>
          <h1 className=" text-lg">Upload Audio File</h1>
          <p className=" text-sm text-red-600">{error}</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-5 cursor-pointer">
          <div
            {...getRootProps()}
            className=" bg-secondary p-14 rounded-2xl mt-5"
          >
            <input {...getInputProps()} />
            <div className=" flex flex-col justify-center items-center">
              <Icon
                icon="material-symbols:audio-file-outline-rounded"
                className=" text-light-neutral"
                fontSize={30}
              />
              <div className=" text-light-neutral mt-4">
                {isDragActive ? (
                  <p>Drop the file here ...</p>
                ) : (
                  <>
                    <p> Drag or choose your file to upload</p>
                    <p className=" text-xs text-center">
                      MP3, WAV, FLAC, OGG. Max 100Mb
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className=" bg-secondary p-14 rounded-2xl mt-5 cursor-pointer">
            <div className=" flex flex-col justify-center items-center">
              <Icon
                icon="mdi:mixcloud"
                className=" text-light-neutral"
                fontSize={30}
              />
              <p className=" text-light-neutral mt-4">
                Select from Live Loop Cloud
              </p>
              <p className=" text-light-neutral text-xs">
                MP3, WAV, FLAC, OGG. Max 100Mb
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadAudio;
