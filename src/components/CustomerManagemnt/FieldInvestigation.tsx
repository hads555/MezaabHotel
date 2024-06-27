import React, { useEffect, useState } from "react";
import TableView from "../../components/TableView/TableView";
import { DatePicker, Select } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import TableHeaderFilter from "../TableHeaderFilter";
import { Input } from "antd";
import CrossButton from "./CrossButton";



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
const FieldInvestigation = () => {
  const [isChecked,setIsChecked] = useState();
  return (
    <>
      <div className="cs-table p-2">
        <DynamicHeaderStructure title={"Add Peoperty"} />
       <br></br>
        <DynamicHeaderStructure title={"1. Property Details"}  />
        <div className="row">
            <div className="col-md-8 pt-3">
              <div className="row">
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Property Name</div>
                  <div className="pt-1">
                    <Select style={{ width: "90%" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
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
                    <Select style={{ width: "90%", borderRadius:"0px" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Contact Person</div>
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
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-gallery" style={{ backgroundColor: '#fff', border:'1px solid #D9D9D9', marginTop:'45px' }}>
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
        <DynamicHeaderStructure title={"2. Room Details"}  />
        
              <div className="col-md-6 d-flex pt-3">
                <div className="col-md-4">
                  <div className="simple-text">Status</div>
                  <div className="pt-1">
                    <Select style={{ width: "90%" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="simple-text">Spoke To</div>
                  <div className="pt-1">
                    <Select style={{ width: "90%" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="simple-text">Call Date</div>
                  <div className="pt-1">
                    <DatePicker style={{width: "90%"}} />
                  </div>
                </div>
                <div className="col-md-4">
                  <CrossButton onClick={handleCrossButtonClick} />
                </div>
              </div>
              <div className="col-md-6 d-flex pt-3">
                <div className="col-md-4">
                  <div className="simple-text">Status</div>
                  <div className="pt-1">
                    <Select style={{ width: "90%" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="simple-text">Spoke To</div>
                  <div className="pt-1">
                    <Select style={{ width: "90%" }}>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                      <option value="1">Test</option>
                    </Select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="simple-text">Call Date</div>
                  <div className="pt-1">
                    <DatePicker style={{width: "90%"}} />
                  </div>
                </div>
              </div>
              <br></br>
              <DynamicHeaderStructure title={"3. Facilities"}  />
             <div className="col-md-9 mt-4" >
                <div className="col-md-12 d-flex check-row" style={{flexWrap: "wrap", }}>
                  <div className="col-md-3 d-flex mb-3">
                    <input type="checkbox" />

                    <div className="ps-2 simple-text">Monetory</div>
                  </div>
                  <div className="col-md-3 d-flex mb-3">
                    <input type="checkbox" />

                    <div className="ps-2 simple-text">Batch</div>
                  </div>
                  <div className="col-md-3 d-flex mb-3">
                    <input type="checkbox" />

                    <div className="ps-2 simple-text">Batch</div>
                  </div>
                  <div className="col-md-3 d-flex mb-3">
                    <input type="checkbox" />

                    <div className="ps-2 simple-text">Batch</div>
                  </div>
                  <div className="col-md-3 d-flex mb-3">
                    <input type="checkbox" />

                    <div className="ps-2 simple-text">Batch</div>
                  </div>
                  <div className="col-md-3 d-flex mb-3">
                    <input type="checkbox" />

                    <div className="ps-2 simple-text">Batch</div>
                  </div>
                  <div className="col-md-3 d-flex mb-3">
                    <input type="checkbox" />

                    <div className="ps-2 simple-text">Batch</div>
                  </div>
                  <div className="col-md-3 d-flex mb-3">
                    <input type="checkbox" />

                    <div className="ps-2 simple-text">Batch</div>
                  </div>
                </div>
                <div className="col-md-12">
                    <DynamicHeaderStructure button={button} />
                </div>
             </div>
      </div>
      <div className="border-bottom pt-5"></div>
      <div className="cs-table p-2">
        {" "}
      
      </div>
    </>
  );
};
export default FieldInvestigation;


