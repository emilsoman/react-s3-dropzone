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
  var progressBar = props.file.uploading ? <ProgressBar percentage={props.file.percentage} onAbort={props.file.abort}/> : null;
  return(
    <div className="upload-queue-item">
      {props.file.file.name}
      {progressBar}
    </div>
  );
}

const FileStatusList = (props) => {
  var list = props.files.map((file) => {
    return(<FileStatus file={file} key={file.uniqueId}/>);
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
      files: []
    };
  }

  updateFileProgress = (file) => {
    var exists = false;
    var files = this.state.files.map((f) => {
      if(f.uniqueId === file.uniqueId) {
        exists = true;
        return file;
      } else {
        return f;
      }
    })
    if(!exists) {
      this.setState({files: this.state.files.concat(file)});
    } else {
      this.setState({files: files});
    }
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
          <FileStatusList files={this.state.files}/>
        </div>
    );
  }
}

ReactDOM.render(<DropzoneDemo/>, document.getElementById('root'));
