import React from 'react';
import {storage} from '../firebase';

class ImageUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progres: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange (e) {
    if(e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }

  handleUpload () {
    const {image} =  this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
      }, (error) => {
      //error function ..
        console.log(error);
      },
      () =>{
      //complete function..
        storage.ref('images').child(image.name).getDownloadURL().then(url =>{
          this.setState({url});
        });
      });
  }

  render() {

    return (
      <div>
        <style jsx>{`
            img {
              width: 150px;
            }
            `}</style>
        <progress value={this.state.progress}/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <img src={this.state.url || 'https://via.placeholder.com/150'} alt="uploaded images"/>
      </div>

    );
  }
}

export default ImageUpload;
