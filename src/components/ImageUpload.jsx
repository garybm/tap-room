import React from 'react';
import {storage} from '../firebase';

class ImageUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ''
    }
      this.handleChange = this.handleChange.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange (e) {
    if(e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }

  handleUpload = () => {
    const {image} =  this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_change',
    (snapshot) => {
      //progress funtion ...
    }, (error) => {
      //error function ..
      console.log(error);
    }, () =>{
      //complete function..
    });
  }

  render() {

    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
      </div>

    )
  }
}

export default ImageUpload;
