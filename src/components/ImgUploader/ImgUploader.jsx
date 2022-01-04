import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ImgUploader = React.forwardRef((props, ref) => {
  const token = localStorage.getItem("token");

  return (
    <FilePond
      ref={ref}
      files={props.files}
      onupdatefiles={props.setFiles}
      allowMultiple={false}
      maxFiles={1}
      server={{
        url: props.url,
        process: {
          headers: {
            token: token,
          },
        },
      }}
      instantUpload={false}
      name="files"
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
    />
  );
});

export default ImgUploader;
