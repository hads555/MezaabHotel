import { Customer_List_Header } from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";
import { DatePicker, Select } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import TableHeaderFilter from "../TableHeaderFilter";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const data = [
  {
    Customer: "jhdbfs",
    ProductName: "kajbdsf",
    ApplicationNo: "2235",
    CrNumber: "1234",
    Email: "11@gmail.com",
    Phone: "123456",
    Date: "12.34.2044",
    ParentStatus: "---",
    Status: "active",
    Action: "--",
  },
];
const button = [
  { title: "Save and Add" },
  { title: "Save and Stay" },
  { title: "Save and Return" },
  { title: "Return" },
];
const buttonSub = [{ title: "Add" }];
const References = () => {
  return (
    <>
      <div className="cs-table p-2">
        <DynamicHeaderStructure title={"Field Investigation"} button={button} />
        <div className="col-md-9 pt-3">
          <div className="col-md-12 d-flex">
            <div className="col-md-4">
              <div className="simple-text">Relationship</div>
              <div className="pt-1">
                <Select style={{ width: "90%" }}>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                </Select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-text">Zip Extension</div>
              <div className="pt-1">
                <Input type="text" style={{ width: "90%" }} />
              </div>
            </div>
            <div className="col-md-4 pt-3 d-flex align-items-center">
              <div className="col-md-12 d-flex align-items-center">
                <div className="col-md-6 d-flex">
                  <input type="checkbox" />

                  <div className="ps-2 simple-text">Permission to Call</div>
                </div>
                <div className="col-md-6 d-flex">
                  <input type="checkbox" />

                  <div className="ps-2 simple-text">Permission to Text</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-flex pt-3">
            <div className="col-md-4">
              <div className="simple-text">Name</div>
              <div className="pt-1">
                <Input type="text" style={{ width: "90%" }} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-text">City</div>
              <div className="pt-1">
                <Input type="text" style={{ width: "90%" }} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-text">Phone</div>
              <div className="pt-1">
                <Input type="text" style={{ width: "90%" }} />
              </div>
            </div>
          </div>
          <div className="col-md-12 d-flex pt-3">
            <div className="col-md-4">
              <div className="simple-text">Staus</div>
              <div className="pt-2">
                <Select style={{ width: "90%" }}>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                </Select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-text">State</div>
              <div className="pt-2">
                <Select style={{ width: "90%" }}>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                </Select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-text">Extension</div>
              <div className="pt-2">
                <Input type="text" style={{ width: "90%" }} />
              </div>
            </div>
          </div>
          <div className="col-md-12 d-flex pt-3">
            <div className="col-md-4">
              <div className="simple-text">Country</div>
              <div className="pt-1">
                <Select style={{ width: "90%" }}>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                </Select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-text">Years</div>
              <div className="pt-1">
                <Input type="text" style={{ width: "90%" }} />
              </div>
            </div>
            <div className="col-md-4 pt-3 d-flex align-items-center">
              <div className="col-md-12 d-flex align-items-center">
                <div className="col-md-6 d-flex">
                  <input type="checkbox" />

                  <div className="ps-2 simple-text">Permission to Call</div>
                </div>
                <div className="col-md-6 d-flex">
                  <input type="checkbox" />

                  <div className="ps-2 simple-text">Permission to Text</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-flex pt-3">
            <div className="col-md-8">
              <div className="col-md-12 d-flex">
                <div className="col-md-6">
                  <div className="simple-text">Address</div>
                  <div className="pt-1">
                    <Input type="text" style={{ width: "90%" }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="simple-text">Monts</div>
                  <div className="pt-1">
                    <Input type="text" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
              <div className="col-md-12 pt-3 d-flex">
                <div className="col-md-6">
                  <div className="simple-text">Zip Code</div>
                  <div className="pt-1">
                    <Input type="text" style={{ width: "90%" }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="simple-text">Phone</div>
                  <div className="pt-1">
                    <Input type="text" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
              <div className="col-md-12 pt-3 d-flex">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="simple-text">Extension</div>
                  <div className="pt-1">
                    <Input type="text" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-text">Comments</div>
              <div className="pt-1">
                <TextArea rows={4} style={{ width: "90%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default References;
