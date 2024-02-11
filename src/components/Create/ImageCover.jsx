import { Icon } from "@iconify/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
const ImageCover = ({ image, setImage , images,setImages }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (image) {
      setImage(image);
    }
  }, [image]);
  const onDrop = useCallback((acceptedFiles) => {
    setError(null);
    if (acceptedFiles.length > 1) {
      setError("Please upload only one file");
      return;
    }
    // if acceptedFiles is not an image, reject it
    if (!acceptedFiles[0].type.startsWith("image/")) {
      setError("Please upload only image file");
      return;
    }
    // make image previewable
    const objectUrl = URL.createObjectURL(acceptedFiles[0]);
    setImage(objectUrl);
    setImages(acceptedFiles[0])
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <>
      <div className=" pt-10 text-white">
        <div>
          <h1 className=" text-lg">Upload Image Cover</h1>
          <p className=" text-sm text-light-neutral">
            Drag or choose your file to upload
          </p>
          <p className=" text-red-600 text-xs">{error}</p>
        </div>
        <div>
          <div
            {...getRootProps()}
            className=" bg-secondary p-14 rounded-2xl mt-5"
          >
            <input {...getInputProps()} />
            <div className=" flex flex-col justify-center items-center">
              <Icon
                icon="uil:image-upload"
                className=" text-light-neutral"
                fontSize={30}
              />
              <div className=" text-light-neutral mt-4">
                {isDragActive ? (
                  <p>Drop the file here ...</p>
                ) : (
                  <>
                    <p>Drag or Choose the image</p>
                    <p className=" text-xs text-center">
                      JPG, PNG, SVG. Max 100Mb
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCover;
