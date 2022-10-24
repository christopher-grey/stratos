import React, {useState} from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { Layers } from "@mui/icons-material";
import Select from 'react-select';

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
  const [selected, setSelected] = useState(layersList[0].value);
  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const navigate = useNavigate()
    return <div className='welcome'>
    <div id="rcorners3">
    <div id="heading">
    <Button onClick={() => navigate("/EmailVerification")}>
        <ArrowBackIcon className="gg-arrow-left"/>
    </Button>
      <p1 id="create_account">Select Layers</p1>
    </div>
      <p1 id="details">Select corresponding industries <br/> or interests</p1>
      <div id="dropdown">
           <Select
            options={layersList}
            isMulti
            // onChange={this.handleChange}
            />
        </div>
        <div>
        <div id="nolayer">
          <p1 id="details">No Layer selected yet</p1>
          {/* <Result value = {this.state.value}/> */}
        </div>
        {/* <Result value = {this.state.value}/> */}
        </div>
        <div>
      <Button id="confirm" onClick={() => navigate("/InformationVerification")}>Next</Button>
      </div>
      <div>
      <Button id="resend" onClick={() => navigate("/InformationVerification")}>Skip</Button>
      </div>
      </div>
    </div> 

}


export default LayersPreference;