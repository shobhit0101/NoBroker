import { useState } from "react";
import PropContext from "./propertyContext";
const PropState = (props) => {
  const propInitial = [
    {
      "Apartment_society": "Block 1, street 2",
      'Area_Unit': "sq.yards",
      'Balconies': "2",
      'Bathrooms': "3",
      'Locality': "Delhi",
      'abt_property': "This property is located in Delhi",
      'area': "3456",
      'bedrooms': "3",
      'city': "Delhi",
      'floorno': "2",
      'houseno': "123",
      'image': "blob:http://localhost:3000/123bafc9-0c1d-4a27-8d9d-1a974a23e86a",
      'image_file': new File(["http://localhost:3000/123bafc9-0c1d-4a27-8d9d-1a974a23e86a"], {
        lastModified: 1667150765922,
        lastModifiedDate: 'Sun Oct 30 2022 22:56:05 GMT+0530 (India Standard Time)',
        name: "bg2.jpg",
        size: 319093,
        type: "image/jpeg",
        webkitRelativePath: "",
      }),
      'isimg': 1,
      'lat': 28.5,
      'lng': 76.9,
      'owner_name': "Utkarsh Verma",
      'phoneno': "1234556879",
      'price': "12325",
      'prop_cat': "Residential",
      'property_age': "9",
      'property_title': "River Project",
      'purpose': "sell",
      'sublocality': "Chandni Chauk"
    },
    {
      "Apartment_society": "street 3, block 3, lane 1",
      'Area_Unit': "sq.yards",
      'Balconies': "2",
      'Bathrooms': "5",
      'Locality': "Mumbai",
      'abt_property': "This property is located in Mumbai",
      'area': "344656",
      'bedrooms': "5",
      'city': "Mumbai",
      'floorno': "2",
      'houseno': "123",
      'image': "blob:http://localhost:3000/ffed1aed-f6a3-4000-b531-0c966ef73e40",
      'image_file': new File(["http://localhost:3000/ffed1aed-f6a3-4000-b531-0c966ef73e40"], {
        lastModified: 1667150765931,
        lastModifiedDate: 'Sun Oct 30 2022 22:56:05 GMT+0530 (India Standard Time)',
        name: "bg5.webp",
        size: 412306,
        type: "image/webp",
        webkitRelativePath: ""
      }),
      'isimg': 1,
      'lat': 28.5,
      'lng': 76.9,
      'owner_name': "Akshay Kumar",
      'phoneno': "1234556879",
      'price': "123455",
      'prop_cat': "Commercial",
      'property_age': "9",
      'property_title': "Mumbai Property",
      'purpose': "rent",
      'sublocality': "Neighbour 1"
    },
    {
      "Apartment_society": "street 3, block 3, lane 1",
      'Area_Unit': "sq.yards",
      'Balconies': "5",
      'Bathrooms': "5",
      'Locality': "Kolkata",
      'abt_property': "This property is located in Kolakata",
      'area': "3446",
      'bedrooms': "5",
      'city': "Kolkata",
      'floorno': "3",
      'houseno': "123",
      'image': "blob:http://localhost:3000/5bd4c367-93f6-4e2d-ae42-4ec22a779cb0",
      'image_file': new File(["http://localhost:3000/5bd4c367-93f6-4e2d-ae42-4ec22a779cb0"], {
        lastModified: 1667160388638,
        lastModifiedDate: 'Mon Oct 31 2022 01:36:28 GMT+0530 (India Standard Time)',
        name: "bg9.jpg",
        size: 608284,
        type: "image/jpeg",
        webkitRelativePath: ""
      }),
      'isimg': 1,
      'lat': 28.5,
      'lng': 76.9,
      'owner_name': "Ram Singh",
      'phoneno': "1234556879",
      'price': "123455",
      'prop_cat': "Apartment",
      'property_age': "9",
      'property_title': "Kolkata Property",
      'purpose': "PG",
      'sublocality': "Neighbour 2"
    },
    {
      "Apartment_society": "street 3, block 3, lane 1",
      'Area_Unit': "sq.yards",
      'Balconies': "5",
      'Bathrooms': "5",
      'Locality': "Kolkata",
      'abt_property': "This property is located in Kolakata",
      'area': "3446",
      'bedrooms': "5",
      'city': "Kolkata",
      'floorno': "3",
      'houseno': "123",
      'image': "blob:http://localhost:3000/5bd4c367-93f6-4e2d-ae42-4ec22a779cb0",
      'image_file': new File(["http://localhost:3000/5bd4c367-93f6-4e2d-ae42-4ec22a779cb0"], {
        lastModified: 1667160388638,
        lastModifiedDate: 'Mon Oct 31 2022 01:36:28 GMT+0530 (India Standard Time)',
        name: "bg9.jpg",
        size: 608284,
        type: "image/jpeg",
        webkitRelativePath: ""
      }),
      'isimg': 1,
      'lat': 28.5,
      'lng': 76.9,
      'owner_name': "Ram Singh",
      'phoneno': "1234556879",
      'price': "123455",
      'prop_cat': "Apartment",
      'property_age': "9",
      'property_title': "Kolkata Property",
      'purpose': "PG",
      'sublocality': "Neighbour 2"
    },
    {
      "Apartment_society": "block 3, lane 1",
      'Area_Unit': "sq.yards",
      'Balconies': "6",
      'Bathrooms': "5",
      'Locality': "Lucknow",
      'abt_property': "This property is located in Lucknow",
      'area': "3446",
      'bedrooms': "5",
      'city': "Lucknow",
      'floorno': "3",
      'houseno': "123",
      'image': "blob:http://localhost:3000/cbfc604b-5df0-46d6-beca-4fbfc14aaa62",
      'image_file': new File(["http://localhost:3000/cbfc604b-5df0-46d6-beca-4fbfc14aaa62"], {
        lastModified: 1667150765954,
        lastModifiedDate: 'Sun Oct 30 2022 22:56:05 GMT+0530 (India Standard Time)',
        name: "bodycard2.jpg",
        size: 1734764,
        type: "image/jpeg",
        webkitRelativePath: ""
      }),
      'isimg': 1,
      'lat': 28.5,
      'lng': 76.9,
      'owner_name': "Ram Nath",
      'phoneno': "1234556879",
      'price': "1232555",
      'prop_cat': "Residential",
      'property_age': "22",
      'property_title': "Lucknow Property",
      'purpose': "sell",
      'sublocality': "Neighbour 3"
    },
    {
      "Apartment_society": "block 3, lane 1",
      'Area_Unit': "sq.yards",
      'Balconies': "6",
      'Bathrooms': "5",
      'Locality': "Kanpur",
      'abt_property': "This property is located in Kanpur",
      'area': "3446",
      'bedrooms': "5",
      'city': "Kanpur",
      'floorno': "3",
      'houseno': "123",
      'image': "blob:http://localhost:3000/4cef1bbf-2aa3-48d9-91ad-66a05bc1e918",
      'image_file': new File(["http://localhost:3000/4cef1bbf-2aa3-48d9-91ad-66a05bc1e918"], {
        lastModified: 1667150766031,
        lastModifiedDate: "Sun Oct 30 2022 22:56:06 GMT+0530 (India Standard Time)",
        name: "mainImg.jpg",
        size: 290356,
        type: "image/jpeg",
        webkitRelativePath: ""
      }),
      'isimg': 1,
      'lat': 28.5,
      'lng': 76.9,
      'owner_name': "Shobhit Gupta",
      'phoneno': "1556879",
      'price': "12352355",
      'prop_cat': "House",
      'property_age': "22",
      'property_title': "Kanpur Property",
      'purpose': "Rent",
      'sublocality': "Neighbour 4"
    },
    {
      "Apartment_society": "block 5, lane 5",
      'Area_Unit': "sq.yards",
      'Balconies': "5",
      'Bathrooms': "5",
      'Locality': "Chennai",
      'abt_property': "This property is located in Chennai",
      'area': "3446",
      'bedrooms': "5",
      'city': "Chennai",
      'floorno': "3",
      'houseno': "123",
      'image': "blob:http://localhost:3000/b722f9aa-a51c-47ee-b6df-9e73f3799208",
      'image_file': new File(["http://localhost:3000/b722f9aa-a51c-47ee-b6df-9e73f3799208"], {
        lastModified: 1667150766015,
        lastModifiedDate: "Sun Oct 30 2022 22:56:06 GMT+0530 (India Standard Time)",
        name: "i2.jpg",
        size: 2317037,
        type: "image/jpeg",
        webkitRelativePath: ""
      }),
      'isimg': 1,
      'lat': 28.5,
      'lng': 76.9,
      'owner_name': "Bhagwan Das",
      'phoneno': "1556879",
      'price': "12352355",
      'prop_cat': "House",
      'property_age': "22",
      'property_title': "Chennai Property",
      'purpose': "PG",
      'sublocality': "Neighbour 2"
    },
    {
      "Apartment_society": "block 5, lane 5",
      'Area_Unit': "sq.yards",
      'Balconies': "5",
      'Bathrooms': "5",
      'Locality': "Pune",
      'abt_property': "This property is located in Pune",
      'area': "3446",
      'bedrooms': "5",
      'city': "Pune",
      'floorno': "3",
      'houseno': "123",
      'image': "blob:http://localhost:3000/18121dcb-618e-4659-a275-5d7100631b16",
      'image_file': new File(["http://localhost:3000/18121dcb-618e-4659-a275-5d7100631b16"], {
        lastModified
          :
          1667150766044,
        lastModifiedDate
          :
          'Sun Oct 30 2022 22:56:06 GMT+0530 (India Standard Time)',
        name
          :
          "vodycard1.jpg",
        size
          :
          1489373,
        type
          :
          "image/jpeg",
        webkitRelativePath
          :
          ""
      }),
      'isimg': 1,
      'lat': 28.5,
      'lng': 76.9,
      'owner_name': "Bhagwan Das",
      'phoneno': "1556879",
      'price': "12352355",
      'prop_cat': "LAnd",
      'property_age': "22",
      'property_title': "Pune Property",
      'purpose': "sell",
      'sublocality': "Neighbour 4"
    }
  ]
  const [prop, setProp] = useState(propInitial)
  // const addprop=(x)=>{
  //   setProp(prop.concat(x))
  // }
  return (
    <PropContext.Provider value={{ prop, setProp }}>
      {props.children}
    </PropContext.Provider>
  )
}
export default PropState;