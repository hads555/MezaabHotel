import React, { useEffect, useState } from "react";
import TableView from "../../components/TableView/TableView";
import { Button, DatePicker, Select, Switch } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { Input } from "antd";


const handleClick = () => {
  alert('Button clicked!');
};
const AddCity = () => {
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
  return (
    <>
      <div className="cs-table p-2">
        <DynamicHeaderStructure title={"Add City"}  />
        <div className="row">
            <div className="col-md-8 pt-3" style={{backgroundColor:"", paddingBottom:'20px'}}>
              <div className="row">
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Name</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Group Name" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Nice Name</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Group Name" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">ISO</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Group Name" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">ISO 3</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Sector" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Num Code</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Category" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="simple-text">Phone Code</div>
                  <div className="pt-2">
                    <Input type="text" style={{ width: "90%" }} placeholder="Airline" />
                  </div>
                </div>
                <div className="switchBtn" style={{paddingBottom:'20px', display: 'flex', alignItems: 'center' , borderBottom: '1px solid #E7E7E7'}}>
                <Switch style={{ width: '30px', height: '22px' , marginLeft:'10px' , marginTop:'20px' }} />
                <label style={{paddingLeft:'10px' , paddingTop:'8px'}}>Active/Deactive</label>
                </div>
              </div>
           
                <div style={{  borderBottom: '0px solid #E7E7E7' , paddingBottom:'20px'}}>
                  <Button className="cust-btn" onClick={handleClick} style={{margin: '40px auto 0px',marginRight: '0px'}}>Add Country</Button>
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
export default AddCity;


