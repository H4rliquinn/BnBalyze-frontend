import React, {useEffect} from 'react';
import './propertyInfo.scss';
import axios from 'axios';

const PropertyInfo = (props) => {
    console.log(props);
    axios
    .get('***')
    .then(res => {
    })
    .catch(error => {
        console.error('Server Error', error);
    });

    return ( 
        <div className="propertyInfo">
            Full listing goes here!
            <div>Address: {props.address}</div>
            <div>Address: {props.city}</div>
            <div>Address: {props.state}</div>
            <div>Address: {props.zip}</div>
            <div>Address: {props.beds}</div>
            <div>Address: {props.bedrooms}</div>
            <div>Address: {props.kitchen}</div>
        </div>
     );
}
 
export default PropertyInfo;