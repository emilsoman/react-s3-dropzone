import React from 'react';
import ReactDOM from 'react-dom';
import S3Dropzone from './s3-dropzone';

const ProgressBar = (props) => {
  return(
    <div>
      {props.percentage} %
    </div>
  );
}

const FileStatus = (props) => {
  var progressBar = props.file.uploading ? <ProgressBar percentage={props.file.percentage}/> : null;
  return(
    <div>
      {props.file.name}
      {progressBar}
    </div>
  );
}

const FileStatusList = (props) => {
  var list = props.files.map((file) => {
    return(<FileStatus file={file} key={file.uniqueId}/>);
  });
  return(
    <div>
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

  updateFileProgress(file) {
    var exists = false;
    var files = this.state.files.map((f) => {
      if(f.uniqueId === file.uniqueId) {
        exists = true;
        return f;
      } else {
        return file;
      }
    })
    if(!exists) {
      this.setState({files: this.state.files.concat(file)});
    } else {
      this.setState({files: files});
    }
  }

  render() {
    var AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
    var POLICY = process.env.POLICY;
    var SIGNATURE = process.env.SIGNATURE;
    var URL = process.env.URL;
    return (
        <div>
          <S3Dropzone
            onComplete=""
            onProgress={this.updateFileProgress.bind(this)}
            url={URL}
            keyPrefix="uploads/" acl="private" awsAccessKeyId={AWS_ACCESS_KEY_ID}
            policy={POLICY}
            signature={SIGNATURE}
            successStatus="201">
            <div>Try dropping some files here, or click to select files to upload.</div>
          </S3Dropzone>
          <FileStatusList files={this.state.files}/>
        </div>
    );
  }
}

ReactDOM.render(<DropzoneDemo/>, document.getElementById('root'));
