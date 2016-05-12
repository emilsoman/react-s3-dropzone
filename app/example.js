import React from 'react';
import ReactDOM from 'react-dom';
import S3Dropzone from './s3-dropzone';

class DropzoneDemo = (props) => {
  var AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
  var POLICY = process.env.POLICY;
  var SIGNATURE = process.env.SIGNATURE;
  var URL = process.env.URL;
  return (
      <div>
        <S3Dropzone onUpload="" onProgress="" url={URL}
          keyPrefix="uploads/" acl="private" awsAccessKeyId={AWS_ACCESS_KEY_ID}
          policy={POLICY}
          signature={SIGNATURE}
          successStatus="201">
          <div>Try dropping some files here, or click to select files to upload.</div>
        </S3Dropzone>
      </div>
  );
}

ReactDOM.render(<DropzoneDemo/>, document.getElementById('root'));
