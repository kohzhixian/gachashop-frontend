import Card from "../components/UI/Card";
import React, { useRef, useState, useEffect } from "react";
import "../css/ImageUpload.css";
import Button from "../components/UI/Button";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewURL, setPreviewURL] = useState();
  const [isValid, setIsValid] = useState(false);
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file){
        return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
        setPreviewURL(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  },[file]);

  const uploadedHandler = (e) => {
    let pickedFile;
    let fileIsValid = isValid;
    if(e.target.files && e.target.files.length === 1){
        pickedFile = e.target.files[0];
        setFile(pickedFile);
        setIsValid(true);
        fileIsValid = true;
    }else{
        setIsValid(false);
        fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };
  const uploadImageHandler = (e) => {
    filePickerRef.current.click();
  };
  return (
    <div>
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={uploadedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewURL && <img src={previewURL} alt="Preview" />}
          {!previewURL && <p>please pick an image</p>}
        </div>
        <Button type="button" onClick={uploadImageHandler}>
          Upload Image
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
