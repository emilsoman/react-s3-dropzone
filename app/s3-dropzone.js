import React from 'react';
import Dropzone from 'react-dropzone';

// Can be refactored into a stateless component
export default class S3Dropzone extends React.Component {
  constructor(props) {
    super(props);
  }

  uploadProgress(event, file) {
    if (event.lengthComputable) {
      var percentComplete = Math.round(event.loaded * 100 / event.total);
      console.log(file.name + " -- " + percentComplete);
    }
    else {
      console.log("Progress unknown");
    }
  }

  uploadComplete(event, file) {
    console.log(file.name + " done - " + event.target.responseText + " -- status = " + event.target.status);
  }

  uploadFailed(event, file) {
    console.log(file.name + " failed - " + event);
  }

  getObjectKey(file) {
    var randomString = Math.random().toString(36).substr(2,16);
    return `${this.props.keyPrefix}${randomString}/${file.name}`;
  }

  uploadFile(file) {
    var formData = new FormData();
    formData.append('key', this.getObjectKey(file));
    formData.append('acl', this.props.acl);
    formData.append('Content-Type', file.type);
    formData.append('AWSAccessKeyId', this.props.awsAccessKeyId);
    formData.append('policy', this.props.policy)
    formData.append('signature', this.props.signature);
    formData.append('success_action_status', this.props.successStatus);
    formData.append("file",file);

    var xhr = new XMLHttpRequest();
    var boundary = Math.random().toString().substr(2);
    xhr.upload.addEventListener("progress", (event) => { this.uploadProgress(event, file) }, false);
    xhr.addEventListener("load", (event) => { this.uploadComplete(event, file) }, false);
    xhr.addEventListener("error", (event) => { this.uploadFailed(event, file) }, false);
    //xhr.addEventListener("abort", this.uploadCanceled, false);

    xhr.open('POST', this.props.url, true);
    xhr.send(formData);
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
