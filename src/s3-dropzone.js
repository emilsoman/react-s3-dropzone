import React, {PropTypes} from 'react';
import Dropzone from 'react-dropzone';
import FileUpload from './file-upload'

// Can be refactored into a stateless component
export default class S3Dropzone extends React.Component {

  static propTypes = {
    // Callbacks
    onComplete: PropTypes.func,
    onProgress: PropTypes.func,
    onError: PropTypes.func,
    onAbort: PropTypes.func,

    // S3 upload params
    url: PropTypes.string,
    keyPrefix: PropTypes.string,
    acl: PropTypes.string,
    awsAccessKeyId: PropTypes.string,
    policy: PropTypes.string,
    signature: PropTypes.string,
    successStatus: PropTypes.number,

    // Dropzone props
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    disableClick: PropTypes.bool
  }

  constructor(props) {
    super(props);
  }

  open() {
    if(this.dropzone) {
      this.dropzone.open();
    }
  }

  onProgress(fileUpload) {
    console.log(`${fileUpload.uniqueId} progress : ${fileUpload.percentage}`);

    if(this.props.onProgress) {
      this.props.onProgress(fileUpload);
    }
  }

  onComplete(fileUpload) {
    console.log(`${fileUpload.uniqueId} uploaded to : ${fileUpload.s3Url}`);

    if(this.props.onComplete) {
      this.props.onComplete(fileUpload);
    }
  }

  onError(fileUpload) {
    console.log(`${fileUpload.uniqueId} upload errored!`);

    if(this.props.onError) {
      this.props.onError(fileUpload);
    }
  }

  onAbort(fileUpload) {
    console.log(`${fileUpload.uniqueId} upload aborted!`);

    if(this.props.onAbort) {
      this.props.onAbort(fileUpload);
    }
  }

  className() {
    if(this.props.className) {
      return this.props.className;
    } else {
      if(this.props.activeClassName){
        return " ";
      }
    }
  }

  dropFiles(files) {
    files.map((file) => {
      var s3Params = {
        url: this.props.url,
        keyPrefix: this.props.keyPrefix,
        acl: this.props.acl,
        awsAccessKeyId: this.props.awsAccessKeyId,
        policy: this.props.policy,
        signature: this.props.signature,
        successStatus: this.props.successStatus
      }
      var callbacks = {
        onProgress: this.onProgress.bind(this),
        onComplete: this.onComplete.bind(this),
        onAbort: this.onAbort.bind(this),
        onError: this.onError.bind(this)
      }
      new FileUpload(file, s3Params, callbacks);
    });
  }

  render() {
    return(
      <div>
        <Dropzone
          onDrop={this.dropFiles.bind(this)}
          className={this.className()}
          activeClassName={this.props.activeClassName}
          ref={(ref) => this.dropzone = ref}
          disableClick={this.props.disableClick}>
          {this.props.children}
        </Dropzone>
      </div>
    );
  }
}

module.exports = S3Dropzone;
