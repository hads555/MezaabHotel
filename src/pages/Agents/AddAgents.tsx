import React, { useEffect, useState } from "react";
import TableView from "../../components/TableView/TableView";
import { Button, DatePicker, Select } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { Input } from "antd";



const button = [
  { title: "Save Property" }
];
const buttonSub = [{ title: "Add" }];
const images = [
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/201',
  'https://via.placeholder.com/202',
  'https://via.placeholder.com/203',
  // Add more image URLs as needed
];
const handleCrossButtonClick = () => {
  alert('Cross button clicked!');
};
const AddAgents = () => {
  const [isChecked,setIsChecked] = useState();
  return (
    <>
      <div className="cs-table p-2">
        <DynamicHeaderStructure title={"Add Agent"} />
       <br></br>
        <DynamicHeaderStructure title={"1. Agent Details"}  />
        <div className="row">
            <div className="col-md-8 pt-3">
              <div className="row">
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Agent Name</div>
                  <div className="pt-1">
                    <Input type="text" style={{ width: "90%" }} />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Type</div>
                  <div className="pt-1">
                    <Select style={{ width: "90%" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Country</div>
                  <div className="pt-1">
                    <Select style={{ width: "90%" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">City</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Phone</div>
                  <div className="pt-1">
                  <Input type="text" style={{ width: "90%" }} />

                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Email</div>
                  <div className="pt-1">
                  <Input type="text" style={{ width: "90%" }} />

                  </div>
                </div>
        
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-gallery" style={{ backgroundColor: '#fff', border:'1px solid #D9D9D9', marginTop:'45px' }}>
              <DynamicHeaderStructure title={"Add Documents"}  />

                <div style={{ display: 'flex', flexWrap: 'wrap' , justifyContent:'start' }}>
                {images.map((image, index) => (
                <div key={index} style={{ margin: '2px' , padding: '5px'}}>
                  <img src={image} alt={`Image ${index + 1}`} style={{ width: '85px', height: '85px' }} />
                </div>
                ))}
                </div>
              </div>
            </div>
        </div>
        <br></br>
        <DynamicHeaderStructure title={"2. Business Details"}  />
        <div className="row">
        <div className="col-md-8 pt-3">
              <div className="row">
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Registration Number</div>
                  <div className="pt-1">
                    <Select style={{ width: "90%" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">TAX No.</div>
                  <div className="pt-1">
                    <Select style={{ width: "90%" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Address</div>
                  <div className="pt-1">
                    <Select style={{ width: "90%" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
                
      </div>
      <div className="border-bottom pt-5"></div>
      <div className="cs-table p-2">
      <div style={{  borderBottom: '0px solid #E7E7E7' , paddingBottom:'20px'}}>
                  <Button className="cust-btn" style={{margin: '40px auto 0px',marginRight: '0px'}}>Add Agent</Button>
                </div>
        {" "}
      
      </div>
    </>
  );
};
export default AddAgents;


