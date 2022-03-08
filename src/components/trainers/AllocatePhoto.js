import React, { useEffect,useState }  from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Allocate(props) {

    const [trainerPhoto, setTrainerPhoto] = useState({file:[]});
    const { id } = useParams();

    const handleChange = (event) => {
        setTrainerPhoto({
            ...trainerPhoto,
            file:event.target.files[0],
          });
        }
    
        console.log(id);
    const [isSucces, setSuccess] = useState(null);

    const submit = async () =>{
        const formdata = new FormData(); 
        formdata.append('photo', trainerPhoto.file);
        axios.post(`http://localhost:5000/api/photo/${id}`, formdata,{   
            headers: { "Content-Type": "multipart/form-data" } 
    })
    .then(res => { // then print response status
      console.warn(res);
      if(res.data.success === 1){
        setSuccess("Image upload successfully");
      }

    })
  }
        
    return (
        <div>
        <h1>Upload and Display Image usign React Hook's</h1>
        <div className="formdesign">
      {isSucces !== null ? <h4> {isSucces} </h4> :null }
        <div className="form-row">
          <label className="text-white">Select Image :</label>
          <input type="file" className="form-control" name="upload_file"  onChange={handleChange} />
        </div>

        <div className="form-row">
          <button type="submit" className="btn btn-dark" onClick={()=>submit()} > Save </button>
          
        </div>
      </div>
      
     {/* Image <span className="font-css top">*</span>
     <div className="">
         <input type="file" id="file-input" name="ImageStyle"/>
     </div> */}
     {/* {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> */}
</div>
    );
}

export default Allocate;