import React,{useState,useEffect} from 'react';
import "./postprop.css";
import Progressbar from '../Progress_bar';
import AreaDetail from './Postpropform_comp/AreaDetail';
import BasicDetails from './Postpropform_comp/BasicDetails';
import LocationDetails from './Postpropform_comp/LocationDetails';
import PostPhoto from './Postpropform_comp/PostPhoto';
import RoomDetails from './Postpropform_comp/RoomDetails';
import TellAboutProp from './Postpropform_comp/TellAboutProp';
import Markonmap from './Postpropform_comp/Markonmap';
const PostPropertyForm = () => {
    //progress
    const [progress, setProgress] = useState(0)
    //
    

    //formdata
    let fdata2={
        city:"",
        Apartment_society:'',
        Locality:'',
        sublocality:'',
        houseno:'',
        property_title:'',
        abt_property:'',
        property_age:'',
        price:'',
        owner_name:'',
        phoneno:'',
        area:'',
        bedrooms:'',
        Bathrooms:'',
        Balconies:'',
        floorno:'',
        purpose:'',
        prop_cat:'',
        Area_Unit:'',
        image_file:{},
        image:{},
        isimg:0,
        lat:52.0,
        lng:-0.9
    }
    //
    const [page, setpage] = useState(1)
    const [fields, setfields] = useState(fdata2)
    const handleNext=(e)=>{
        setTimeout(() => {
            setpage(page+1);
        }, 100);
        
        
        setProgress(progress + 15)
        

        e.preventDefault();
        console.log(fields)
        
    }
    const handlePrev=(e)=>{
        setProgress(progress-18)
        e.preventDefault();
        setpage(page-1);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const handleChange=(e)=>{
        const name=e.target.name
        const val=e.target.value
        setfields({...fields,[name]:val})
    }
    const handleChange_file=(e)=>{
        const name=e.target.name
        const val=e.target.files[0]
        setfields({...fields,[name]:val,isimg:1,image:URL.createObjectURL(e.target.files[0])})
    }

    const pageChanger=()=>{
        if(page===1){
            return <BasicDetails fdata={fields}  handleChange={handleChange}/>
        }
        if(page===2){
            return <LocationDetails fdata={fields}  handleChange={handleChange}/>
        }
        if(page===4){
            return <RoomDetails fdata={fields}  handleChange={handleChange}/>
        }
        if(page===5){
            return <AreaDetail fdata={fields} handleChange={handleChange}/>
        }
        if(page===6){
            return <TellAboutProp fdata={fields} setfdata={setfields} handleChange={handleChange}/>
        }
        if(page===7){
            return <PostPhoto fdata={fields} handleChange={handleChange} handleChange_file={handleChange_file} />
        }
        if(page===3){
            return <Markonmap fdata={fields} setfdata={setfields}  />
        }

    }
  return (
    <><form action="/post" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
    <div className="form-body">
    
      <div className="initial-container">
        
        <div className="transparent_bg mb-0">
            <p className="italic_font" style={{"textAlign": "center", "margin": "0px", "fontSize": "30px"}}> <b>Begin posting your
                    property</b> </p>
        </div>

        <div  style={{"height":"3px"}}>
            <Progressbar bgcolor="orange" progress={progress}  height={3} />
        </div>
        {pageChanger()}
        

        
        <div className='row justify-content-between' style={{"textAlign": "center"}}>
            <div className="col-4">

                <button onClick={handlePrev} className="btn btn-outline-dark"
                    style={{"padding": "5px 10vh","border": "3px solid black"}} disabled={page===1?1:0}> <b>Previous</b></button>
            </div>
            <div className="col-4">

                {page!==7&&<button onClick={handleNext}  className="btn btn-outline-dark"
                    style={{"padding": "5px 10vh","border": "3px solid black"}}> <b>Next</b></button>}
                {page===7&&<button type="submit"   className="btn btn-outline-dark"
                    style={{"padding": "5px 10vh","border": "3px solid black"}}> <b>Submit</b></button>}
            </div>
            
        </div>


    </div>
    </div>
        
    
  </form></>
  )
}

export default PostPropertyForm