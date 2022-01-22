import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginImageResize from "filepond-plugin-image-resize";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
  FilePondPluginImageResize
);

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
      allowFileSizeValidation={true}
      maxFileSize="3MB"
      instantUpload={false}
      name="files"
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      allowImageResize={true}
      imageResizeMode="cover"
      imageResizeTargetWidth={props.resizeWidth}
      imageResizeTargetHeight={props.resizeHeight}
    />
  );
});

export default ImgUploader;
