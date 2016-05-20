export default class FileUpload {
  constructor(file, s3Params, callbacks) {
    this.file = file;
    this.uniqueId = this.getObjectKey(file, s3Params.keyPrefix);

    // Set callbacks
    this.onProgress = callbacks.onProgress;
    this.onComplete = callbacks.onComplete;
    this.onAbort = callbacks.onAbort;
    this.onError = callbacks.onError;

    // Begin upload
    this.upload(file, s3Params);
  }

  getObjectKey(file, keyPrefix) {
    var randomString = Math.random().toString(36).substr(2,16);
    return `${keyPrefix}${randomString}/${file.name}`;
  }

  uploadProgress = (event) => {
    var percentComplete = 0;
    if (event.lengthComputable) {
      percentComplete = Math.round(event.loaded * 100 / event.total);
    }
    this.setProgress(percentComplete);
  }

  setProgress(percentage) {
    this.percentage = percentage;
    if(this.onProgress) {
      this.onProgress(this);
    }
  }

  uploadComplete = (event) => {
    this.percentage = 100;
    this.uploading = false;

    var responseXML = event.target.responseXML;
    var locationTag = responseXML.getElementsByTagName("Location")[0];
    this.s3Url = locationTag.textContent;
    if(this.onComplete) {
      this.onComplete(this);
    }
  }

  abort() {
    if(this.xhr) {
      this.xhr.abort();
    }
  }

  uploadCanceled = (event) => {
    this.uploading = false;
    if(this.onAbort) {
      this.onAbort(this);
    }
  }

  uploadFailed = (event) => {
    this.uploading = false;
    if(this.onError) {
      this.onError(this);
    }
  }

  upload(file, s3Params) {
    this.uploading = true;
    this.setProgress(0);

    var formData = new FormData();
    formData.append('key', this.uniqueId);
    formData.append('acl', s3Params.acl);
    formData.append('Content-Type', file.type);
    formData.append('AWSAccessKeyId', s3Params.awsAccessKeyId);
    formData.append('policy', s3Params.policy)
    formData.append('signature', s3Params.signature);
    formData.append('success_action_status', s3Params.successStatus);
    formData.append("file",file);

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("loadstart", this.uploadProgress, false);
    xhr.upload.addEventListener("progress", this.uploadProgress, false);
    xhr.upload.addEventListener("load", this.uploadProgress, false);
    xhr.upload.addEventListener("abort", this.uploadCanceled, false);

    //xhr.upload.addEventListener("error", this.uploadFailed, false);
    xhr.addEventListener('readystatechange', (event) => {
      if( event.target.readyState == 4 ) {
        if(event.target.status === s3Params.successStatus) {
          this.uploadComplete(event);
        } else {
          this.uploadFailed(event);
        }
      }
    });

    xhr.open('POST', s3Params.url, true);
    xhr.send(formData);
    this.xhr = xhr;
  }
}
