# react-s3-dropzone

React component to easily add a direct S3 upload file dropzone in your
app. Instead of hitting the server to generate a signed URL for each file
that is dropped into the component, this component uses a policy and signature
that is generated server-side. This means this component fits nicely into
web frameworks where views are rendered server side (example: Rails), but not
a good fit for front end only apps.

## Usage

```javascript
// In your react component:
render() {
  <div>
    <S3Dropzone
      onProgress={handleProgress}
      onComplete={handleComplete}
      onError={handleError}
      onAbort={handleAbort}
      url={S3_UPLOAD_URL}
      keyPrefix="uploads/"
      acl="private"
      awsAccessKeyId={AWS_ACCESS_KEY_ID}
      policy={POLICY}
      signature={SIGNATURE}
      successStatus={201}>
      <div>Drag and drop files to upload them (or click)</div>
    </S3Dropzone>
  </div>
}

// Find a working example in app/example.js
```

Props:

```javascript
propTypes = {
  // Callbacks
  // All callbacks will be passed a "FileUpload" object which has the following
  // properties:
  // {
  //   file: <File object>,
  //   uniqueId: <S3 object key>,
  //   percentage: <Upload progress percentage>,
  //   uploading: <true if file is being uploaded, false otherwise>
  //   s3Url: <S3 URL where file was uploaded>,
  // }
  onComplete: PropTypes.func,
  onProgress: PropTypes.func,
  onError: PropTypes.func,
  onAbort: PropTypes.func,

  // S3 upload params
  url: PropTypes.string, // URL to send upload request
  keyPrefix: PropTypes.string, // Prefix for S3 object keys
  acl: PropTypes.string, // ACL for created objects
  awsAccessKeyId: PropTypes.string, // As name suggests
  policy: PropTypes.string, // Policy that's generated server-side
  signature: PropTypes.string, // Signature that's generated server-side
  successStatus: PropTypes.number // HTTP response status (use 201 if unsure)

  // Dropzone props
  // These affect the appearance and behaviour of the dropzone
  className: PropTypes.string, // CSS classes applied to dropzone area
  disableClick: PropTypes.bool // Pass false to not open file browser on click
}
```

## Development

```
$ npm start
# Open http://localhost:8080 in browser and hack away.
```
