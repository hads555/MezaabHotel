import React, { useEffect, useState } from "react";
import TableView from "../../components/TableView/TableView";
import { Button, DatePicker, Select, Switch } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { Input } from "antd";
import Ckeditor from "./CkEditor/CkEditor";


const handleClick = () => {
  alert('Button clicked!');
};
const AddFlights = () => {
  const [changeStatusData, setChangeStatusData] = useState<any>("");
  const [showPopupStatus, setShowPopupStatus] = useState(false);

  const handleToggleChange = (e: any) => {
    setChangeStatusData(e)
   setShowPopupStatus(true);
   console.log (changeStatusData , "haiderrr")
  };
  const [content, setContent] = useState<string>('');

  const handleEditorChange = (data: string) => {
    setContent(data);
  };
  const [isChecked,setIsChecked] = useState();
  return (
    <>
      <div className="cs-table p-2">
        <DynamicHeaderStructure title={"Add Peoperty"} />
       <br></br>
        <DynamicHeaderStructure title={"1. Property Details"}  />
        <div className="row">
            <div className="col-md-12 pt-3" style={{backgroundColor:"#fff", paddingBottom:'20px'}}>
              <div className="row">
                <div className="col-md-6 pt-3">
                  <div className="simple-text">PNR</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Group Name" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text"></div>
                  <div className="pt-2">
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Group Name</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Group Name" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Sector</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Sector" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Category</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Category" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Airline</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Airline" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Total Seats</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Seats" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Price Tester</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Price"/>
                  </div>
                </div>
                <div className="switchBtn" style={{paddingBottom:'20px', display: 'flex', alignItems: 'center' , borderBottom: '1px solid #E7E7E7'}}>
                <Switch style={{ width: '30px', height: '22px' , marginLeft:'10px' , marginTop:'20px' }} />
                <label style={{paddingLeft:'10px' , paddingTop:'8px'}}>Active/Deactive</label>
                </div>
              </div>
              <div className="ckEdit" style={{marginTop:'20px' , borderBottom: '1px solid #E7E7E7', paddingBottom:'20px',marginBottom:'20px'}}>
              <DynamicHeaderStructure title={"Rules"}  />
                <div style={{ height: '250px' }}>
                <Ckeditor initialData="<p>Hello from CKEditor 5!</p>" onChange={handleEditorChange}/>
                </div>
              </div>
              <DynamicHeaderStructure title={"Add Flights"}  />
        
        <div className="col-md-12 d-flex pt-3">
          <div className="col-md-3">
            <div className="simple-text">Depart Date</div>
            <div className="pt-1">
              <Select style={{ width: "90%" }}>
                <option value="1">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
              </Select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="simple-text">Depart Time</div>
            <div className="pt-1">
              <Select style={{ width: "90%" }}>
                <option value="1">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
              </Select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="simple-text">Country</div>
            <div className="pt-1">
            <Input type="text" style={{ width: "90%" }} placeholder="- : - -"/>
            </div>
          </div>
          <div className="col-md-3">
            <div className="simple-text">City</div>
              <div className="pt-1">
              <Input type="text" style={{ width: "90%" }} placeholder="- : - -"/>
              </div>
          </div>
        </div>
        <div className="col-md-12 d-flex pt-3">
          <div className="col-md-3">
            <div className="simple-text">Arrival Date</div>
            <div className="pt-1">
              <Select style={{ width: "90%" }}>
                <option value="1">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
              </Select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="simple-text">Arrival Date</div>
            <div className="pt-1">
              <Select style={{ width: "90%" }}>
                <option value="1">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
              </Select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="simple-text">Country</div>
            <div className="pt-1">
            <Input type="text" style={{ width: "90%" }} placeholder="- : - -"/>
            </div>
          </div>
          <div className="col-md-3">
            <div className="simple-text">City</div>
              <div className="pt-1">
              <Input type="text" style={{ width: "90%" }} placeholder="- : - -"/>
              </div>
          </div>
          
        </div>  
            <div className="switchBtn" style={{ marginTop:'20px',display: 'flex', alignItems: 'center',borderBottom: '1px solid #E7E7E7',paddingBottom:'20px'}}>
                <Switch style={{ width: '30px', height: '22px' , marginLeft:'10px' , marginTop:'10px' }} />
                <label style={{paddingLeft:'10px' , paddingTop:'8px'}}>Is Layover</label>
                </div>
                <div style={{  borderBottom: '1px solid #E7E7E7' , paddingBottom:'20px'}}>
                  <Button className="cust-btn" onClick={handleClick} >Add Return Route </Button>
                </div>
                <div style={{  borderBottom: '0px solid #E7E7E7' , paddingBottom:'20px'}}>
                  <Button className="cust-btn" onClick={handleClick} style={{margin: '40px auto 0px',marginRight: '0px'}}>Save Group Flight</Button>
                </div>
            </div>

        </div>
        <br></br>
        <br></br>
      </div>
      <div className="border-bottom pt-5"></div>
      <div className="cs-table p-2">
        {" "}
      </div>
    </>
  );
};
export default AddFlights;


