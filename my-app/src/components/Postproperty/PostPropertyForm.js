import React,{useState} from 'react';
import "./postprop.css";
import AreaDetail from './Postpropform_comp/AreaDetail';
import BasicDetails from './Postpropform_comp/BasicDetails';
import LocationDetails from './Postpropform_comp/LocationDetails';
import PostPhoto from './Postpropform_comp/PostPhoto';
import RoomDetails from './Postpropform_comp/RoomDetails';
import TellAboutProp from './Postpropform_comp/TellAboutProp';
const PostPropertyForm = () => {
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
        isimg:0
    }
    //
    const [page, setpage] = useState(1)
    const [fields, setfields] = useState(fdata2)
    const handleNext=(e)=>{
        e.preventDefault();
        console.log(fields)
        setpage(page+1);
    }
    const handlePrev=(e)=>{
        e.preventDefault();
        setpage(page-1);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("lfff")
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
        if(page===3){
            return <RoomDetails fdata={fields}  handleChange={handleChange}/>
        }
        if(page===4){
            return <AreaDetail fdata={fields} handleChange={handleChange}/>
        }
        if(page===5){
            return <TellAboutProp fdata={fields} setfdata={setfields} handleChange={handleChange}/>
        }
        if(page===6){
            return <PostPhoto fdata={fields} handleChange={handleChange} handleChange_file={handleChange_file} />
        }

    }
  return (
    <><form action="/post" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
    <div className="form-body">
      <div className="initial-container">
        <div className="transparent_bg">
            <p className="italic_font" style={{"textAlign": "center", "margin": "0px", "fontSize": "30px"}}> <b>Begin posting your
                    property</b> </p>
        </div>
        {pageChanger()}
       

        
        <div className='row' style={{"textAlign": "center"}}>
            {page!==0&&<div className="col-4">

                <button onClick={handlePrev} className="btn btn-outline-dark"
                    style={{"padding": "5px 10vh","border": "3px solid black"}}> <b>Previous</b></button>
            </div>}
            <div className="col-4">

                {page!==6&&<button onClick={handleNext}  className="btn btn-outline-dark"
                    style={{"padding": "5px 10vh","border": "3px solid black"}}> <b>Next</b></button>}
                {page===6&&<button type="submit"   className="btn btn-outline-dark"
                    style={{"padding": "5px 10vh","border": "3px solid black"}}> <b>Submit</b></button>}
            </div>
            
        </div>


    </div>
    </div>
        
    
  </form></>
  )
}

export default PostPropertyForm