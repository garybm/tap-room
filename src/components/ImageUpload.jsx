import React from 'react';


class ImageUpload extends React.Component {

   handleFileSelected(event) {
    console.log(event.target.files[0]);
  }

  render() {
    return (
      <div>
          <input type="file" onChange={this.handleFileSelected}/>
        </div>
      );
  }
}

export default ImageUpload;
