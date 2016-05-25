import React from 'react';
import ReactDOM from 'react-dom';
import S3Dropzone from '../../src/s3-dropzone'

require("./styles.css");

const ProgressBar = (props) => {
  var style = {width: props.percentage + '%'};
  return(
    <div className="upload-progress">
      <div className="upload-progress-bar" style={style}></div>
      <button onClick={props.onAbort}>Abort</button>
    </div>
  );
}

const FileStatus = (props) => {
  var progressBar = props.fileUpload.uploading ? <ProgressBar percentage={props.fileUpload.percentage} onAbort={props.fileUpload.abort}/> : null;
  return(
    <div className="upload-queue-item">
      {props.fileUpload.file.name}
      {progressBar}
    </div>
  );
}

const FileStatusList = (props) => {
  var list = props.fileUploads.map((fileUpload) => {
    return(<FileStatus fileUpload={fileUpload} key={fileUpload.uniqueId}/>);
  });
  return(
    <div className="upload-queue">
      {list}
    </div>
   );
}

class DropzoneDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUploads: []
    };
  }

  updateFileProgress = (fileUpload) => {
    var exists = false;
    var fileUploads = this.state.fileUploads.map((f) => {
      if(f.uniqueId === fileUpload.uniqueId) {
        exists = true;
        return fileUpload;
      } else {
        return f;
      }
    })
    if(!exists) {
      this.setState({fileUploads: this.state.fileUploads.concat(fileUpload)});
    } else {
      this.setState({fileUploads: fileUploads});
    }
  }

  removeFile = (fileUpload) => {
    var fileUploads = this.state.fileUploads.filter((f) => {
      return f.uniqueId != fileUpload.uniqueId;
    });
    this.setState({fileUploads: fileUploads});
  }

  handleClick = () => {
    this.dropzone.open();
  }

  render() {
    var AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
    var POLICY = process.env.POLICY;
    var SIGNATURE = process.env.SIGNATURE;
    var URL = process.env.URL;
    return (
        <div className="s3-manager">
          <S3Dropzone
            onProgress={this.updateFileProgress}
            onComplete={this.updateFileProgress}
            onAbort={this.removeFile}
            disableClick={true}
            className="dropzone"
            activeClassName="active-dropzone"
            url={URL}
            keyPrefix="uploads/" acl="private" awsAccessKeyId={AWS_ACCESS_KEY_ID}
            policy={POLICY}
            signature={SIGNATURE}
            successStatus={201}
            ref={(ref) => this.dropzone = ref}>
            <div className="file-input-text">
              Drag and drop files to upload them (or click <a href="#" onClick={this.handleClick}>this link</a>)
            </div>
          </S3Dropzone>
          <FileStatusList fileUploads={this.state.fileUploads}/>
        </div>
    );
  }
}

ReactDOM.render(<DropzoneDemo/>, document.getElementById('root'));
