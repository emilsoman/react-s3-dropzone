import React from 'react';
import Dropzone from 'react-dropzone';

// Can be refactored into a stateless component
export default class S3Dropzone extends React.Component {
  constructor(props) {
    super(props);
  }

  uploadProgress(event, file) {
    var percentComplete = 0;
    if (event.lengthComputable) {
      percentComplete = Math.round(event.loaded * 100 / event.total);
      console.log(`${file.uniqueId} progress : ${percentComplete}`);
    }
    else {
      console.log("Progress unknown");
      percentComplete = 50;
    }
    if(this.props.onProgress) {
      file.uploading = percentComplete != 100;
      file.percentage = percentComplete;
      this.props.onProgress(file);
    }
  }

  uploadComplete(event, file) {
    var responseXML = event.target.responseXML;
    var locationTag = responseXML.getElementsByTagName("Location")[0];
    file.url = locationTag.textContent;
    console.log(`${file.name} uploaded to ${file.url}`);
    if(this.props.onComplete) {
      file.uploading = false;
      this.props.onComplete(file);
    }
  }

  uploadFailed(event, file) {
    console.log(file.name + " failed - " + event);
  }

  getObjectKey(file) {
    var randomString = Math.random().toString(36).substr(2,16);
    return `${this.props.keyPrefix}${randomString}/${file.name}`;
  }

  uploadFile(file) {
    file.uniqueId = this.getObjectKey(file);
    var formData = new FormData();
    formData.append('key', file.uniqueId);
    formData.append('acl', this.props.acl);
    formData.append('Content-Type', file.type);
    formData.append('AWSAccessKeyId', this.props.awsAccessKeyId);
    formData.append('policy', this.props.policy)
    formData.append('signature', this.props.signature);
    formData.append('success_action_status', this.props.successStatus);
    formData.append("file",file);

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (event) => { this.uploadProgress(event, file) }, false);
    xhr.addEventListener("load", (event) => { this.uploadComplete(event, file) }, false);
    xhr.addEventListener("error", (event) => { this.uploadFailed(event, file) }, false);
    //xhr.addEventListener("abort", this.uploadCanceled, false);

    xhr.open('POST', this.props.url, true);
    xhr.send(formData);
    if(this.props.onProgress) {
      file.uploading = true;
      file.percentage = 0;
    }
  }

  dropFiles(files) {
    files.map((file) => {
      this.uploadFile(file);
    });
  }

  render() {
    return(
      <div>
        <Dropzone onDrop={this.dropFiles.bind(this)}>
          {this.props.children}
        </Dropzone>
      </div>
    );
  }
}
