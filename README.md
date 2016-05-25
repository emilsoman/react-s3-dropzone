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

// Find a working example in examples directory
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

### Server Side Policy Generation

Sample code in Ruby:

```ruby
# This class abstracts away the logic to generate
# "policy" and "signature" for S3 direct uploads.
class S3Upload
  attr_reader :policy, :signature

  def initialize
    @policy = Base64.encode64(policy_data.to_json).gsub("\n", "")
    @signature = create_signature(@policy)
  end

  private

  def policy_data
    {
      expiration: 10.hours.from_now.utc.iso8601,
      conditions: [
        ["starts-with", "$key", "uploads/"],
        ["starts-with","$content-type", ""],
        {bucket: Settings.s3_bucket},
        {acl: "private"},
        {success_action_status: "201"}
      ]
    }
  end

  def create_signature(policy)
    Base64.encode64(
      OpenSSL::HMAC.digest(
        OpenSSL::Digest.new('sha1'),
        Settings.s3_secret_access_key, policy
      )
    ).gsub("\n", "")
  end
end

# u = S3Upload.new
# u.policy #=> Returns policy
# u.signature #=> Returns signature
```

## Development

```
$ npm start
# Open http://localhost:8080 in browser and hack away.
```
