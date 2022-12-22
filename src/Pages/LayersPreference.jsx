import React, {useState} from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { Layers } from "@mui/icons-material";
import Select from 'react-select';
import {useLocation} from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from "@mui/material";

const layersList = [
    {label: 'Technology', value: 'Technology'},
    {label: 'Management Consultant', value: 'Management Consultant'},
    {label: 'Marketing Expert', value: 'Marketing Expert'},
    {label: 'Education', value: 'Education'},
    {label: 'Software Engineer', value: 'Software Engineer'},
    {label: 'Health Sciences', value: 'Health Sciences'},
];

const Result = ({ value }) => <div>{value}</div>;

// handleChange = e => {
//   this.setState({ value: e.target.value });
// };
const SelectBox = ({children, onChange, value}) => (
  <Select onChange={onChange} value={value}>
    {children}
  </Select>
);


// const handleChange = event => {
//   console.log(event.target.value);
//   setSelected(event.target.value);
// };



function LayersPreference() {
  // const [selected, setSelected] = useState([]);

  // type LayerArr = {
  //     layer: string;
  // };
  function conditionalLayers() {
    if (selectedOptions.length == 0) {
      return <p1 id="details">No Layer selected yet</p1>
    }

    const handleLayerClick = e => {
      console.log("reached here")
      var item = e.value
      console.log("item to delete", item)
      var index = selectedOptions.indexOf(item)
      if (index > - 1) {
        selectedOptions.splice(index, 1)
      }
    }

    return selectedOptions.map(layer => <div id="indlayer">
      <div id="individualLayer">
      <DehazeIcon id="dehaze"/>
      <div id="layerwords">
      {layer.value}
      </div>

      <div id="hicon">
    <IconButton onClick={handleLayerClick} className={"MyCustomButton"}>
    <HighlightOffIcon id="highlighticon"/>
    </IconButton>
    </div>
    </div>
    </div>)

  }
  
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (options) => {
    // console.log("OPTIONS STUFF", options.target.value)
    setSelectedOptions(options);
  };

  console.log("SELECTED OPTIONS RIGHT BEFORE map", selectedOptions)

  const location = useLocation();
  console.log("LP", location)

  const navigate = useNavigate()
    return <div id='welcome'>
    <div id="rcorners3">
    <div id="heading">
    <IconButton className={"MyCustomButton"} onClick={() => navigate("/EmailVerification")}>
        <ArrowBackIcon className="gg-arrow-left"/>
    </IconButton>
      <p1 id="create_account">Select Layers</p1>
    </div>
      <p1 id="details">Select corresponding industries <br/> or interests</p1>
      <div id="dropdown">
           <Select
            options={layersList}
            isMulti
            onChange={handleChange}
            />
        </div>
        <div>
        <div id="nolayer">
          {conditionalLayers()}
          {/* <p1 id="details">No Layer selected yet</p1> */}
          {/* <p1>My layers are</p1> */}
          
          {/* {selectedOptions.map(layer => <div id="indlayer">{layer.value}
                                <HighlightOffIcon id="highlighticon"/>
                                </div>)} */}
          {/* <Result value = {this.state.value}/> */}
        </div>
        {/* <Result value = {this.state.value}/> */}
        </div>
        <div>
        {/* {console.log("RIGHT BEFORE mapping", selectedOptions)} */}
      <Button id="confirm" onClick={() => navigate("/InformationVerification", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: selectedOptions}})}>Next</Button>
      </div>
      <div>
      <Button id="resend" onClick={() => navigate("/InformationVerification", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school}})}>Skip</Button>
      </div>
      </div>
    </div> 

}


export default LayersPreference;