import React from 'react';
import {storage} from '../firebase';

class ImageUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

            img {
              width: 300px;
              margin-bottom: 20px;
            }
            .buttonsMain {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: row;
            }

            button {
              font-size: 1em;
              height: 30px;;
              width: 100px;
              align-self: center;
              padding: 5px;
              margin:10px;
              background-color: #E59333;
              border-radius: 5px;
              color: white;
            }
            input:hover, button:hover {
              background-color: #CD564F;
              color: white;
              cursor: pointer;
            }
            .uploader {
              -webkit-appearance: none;
              appearance: none;
              width: 50%;
              margin-bottom: 10px;
            }

            `}</style>

        <div className="buttonsMain">
          <input
            style={{display: 'none'}}
            type="file"
            onChange={this.handleChange}
            ref={fileInput => this.fileInput = fileInput}/>
          <button onClick={() => this.fileInput.click()}>Select File</button>
          <button onClick={this.handleUpload}>Upload</button>
        </div>
        <progress className="uploader" value={this.state.progress}/>
        <img src={this.state.url || 'https://via.placeholder.com/150'} alt="uploaded images"/>
      </div>
    );
  }
}

export default ImageUpload;
