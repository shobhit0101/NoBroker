import React, { useState, useEffect } from 'react';
import "./postprop.css";
import Progressbar from '../Progress_bar';
import AreaDetail from './Postpropform_comp/AreaDetail';
import BasicDetails from './Postpropform_comp/BasicDetails';
import LocationDetails from './Postpropform_comp/LocationDetails';
import PostPhoto from './Postpropform_comp/PostPhoto';
import RoomDetails from './Postpropform_comp/RoomDetails';
import TellAboutProp from './Postpropform_comp/TellAboutProp';
import Markonmap from './Postpropform_comp/Markonmap';
import Navigation from '../../routes/navigation/navigation.component';
const PostPropertyForm = () => {
    //progress
    const [progress, setProgress] = useState(0)
    //


    //formdata
    let fdata2 = {
        city: "",
        Apartment_society: '',
        Locality: '',
        sublocality: '',
        houseno: '',
        property_title: '',
        abt_property: '',
        property_age: '',
        price: '',
        owner_name: '',
        phoneno: '',
        area: '',
        bedrooms: '',
        Bathrooms: '',
        Balconies: '',
        floorno: '',
        purpose: '',
        prop_cat: '',
        Area_Unit: '',
        image_file: {},
        image: {},
        isimg: 0,
        lat: 52.0,
        lng: -0.9
    }
    //
    const [page, setpage] = useState(1)
    const [fields, setfields] = useState(fdata2)
    const handleNext = (e) => {
        setTimeout(() => {
            setpage(page + 1);
        }, 100);


        setProgress(progress + 15)


        e.preventDefault();
        console.log(fields)

    }
    const handlePrev = (e) => {
        setProgress(progress - 18)
        e.preventDefault();
        setpage(page - 1);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        const name = e.target.name
        const val = e.target.value
        setfields({ ...fields, [name]: val })
    }
    const handleChange_file = (e) => {
        const name = e.target.name
        const val = e.target.files[0]
        setfields({ ...fields, [name]: val, isimg: 1, image: URL.createObjectURL(e.target.files[0]) })
    }

    const pageChanger = () => {
        if (page === 1) {
            return <BasicDetails fdata={fields} handleChange={handleChange} />
        }
        if (page === 2) {
            return <LocationDetails fdata={fields} handleChange={handleChange} />
        }
        if (page === 4) {
            return <RoomDetails fdata={fields} handleChange={handleChange} />
        }
        if (page === 5) {
            return <AreaDetail fdata={fields} handleChange={handleChange} />
        }
        if (page === 6) {
            return <TellAboutProp fdata={fields} setfdata={setfields} handleChange={handleChange} />
        }
        if (page === 7) {
            return <PostPhoto fdata={fields} handleChange={handleChange} handleChange_file={handleChange_file} />
        }
        if (page === 3) {
            return <Markonmap fdata={fields} setfdata={setfields} />
        }

    }
    return (
        <>
            <div className="postform_container">
                <Navigation></Navigation>


                <form action="/post" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-body">



                        <div className="initial-container">


                            <div className="transparent_bg mb-0 " style={{ "padding": "0px", "border": "1px solid #2F89FC", "backgroundColor": "#2F89FC", "borderRadius": "10px" }}>
                                <p className="italic_font" style={{ "textAlign": "center", "margin": "0px", "fontSize": "30px", "fontFamily": "monospace" }}>Begin posting your
                                    property</p>
                            </div>

                            <div style={{ "margin": "3px", "height": "3px" }}>
                                <Progressbar bgcolor="black" progress={progress} height={3} />
                            </div>
                            {pageChanger()}



                            <div className='row justify-content-between' style={{ "textAlign": "center", "margin": "0px" }}>
                                <div className="col-4">

                                    <button onClick={handlePrev} className="btn btn-outline-dark"
                                        style={{ "padding": "5px 4vw", "border": "3px solid #38E54D", "backgroundColor": "#38E54D", "color": "#000000", "fontFamily": "monospace", "fontSize": "18px" }} disabled={page === 1 ? 1 : 0}>Previous</button>
                                </div>
                                <div className="col-4">

                                    {page !== 7 && <button onClick={handleNext} className="btn btn-outline-dark"
                                        style={{ "padding": "5px 4vw", "border": "3px solid #38E54D", "backgroundColor": "#38E54D", "color": "#000000", "fontFamily": "monospace", "fontSize": "18px" }}>Next</button>}
                                    {page === 7 && <button type="submit" className="btn btn-outline-dark"
                                        style={{ "padding": "5px 4vw", "border": "3px solid #38E54D", "backgroundColor": "#38E54D", "color": "#000000", "fontFamily": "monospace", "fontSize": "18px" }}>Submit</button>}
                                </div>

                            </div>


                        </div>
                    </div>


                </form>
            </div>

        </>

    )
}

export default PostPropertyForm