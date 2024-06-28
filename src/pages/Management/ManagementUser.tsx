import React, { useEffect, useState } from "react";

import TableView from "../../components/TableView/TableView";

import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Col, Modal, ModalTitle, Row } from "react-bootstrap";
import Switch from "react-switch";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Select } from "antd";
import toast from "react-hot-toast";
import { createUser , listUser } from "./ManagemnetCrud";

const ManagementUser = () => {
  const [create, setCreate] = useState(false);
  const [update, setUpdate] = useState(false);
  const [allPushNotificaions, setAllPushNotificaions] = useState<any>("");
  const [allCompany, setAllCompany] = useState<any>("");
  const [messgaeContent, setMessgaeContent] = useState<any>("");
  const [messgaeContentArabic, setMessgaeContentArabic] = useState<any>("");
  const [initialUpdateData, setInitialUpdateData] = useState<any>("");
  const [showPopup, setShowPopup] = useState(false);
  const [changeStatusData, setChangeStatusData] = useState<any>("");
  const [searchValue, setSearchValue] = useState("");
  const closePopup = () => {
    setShowPopup(false);
  };

//   const allPushInfo = () => {
//     getAllPush()
//       .then((response) => {
//         console.log(response, "resposne");
//         setAllPushNotificaions(response?.data?.data);
//         console.log(allPushNotificaions, "allPushNotificaions");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const onSearchHandle = () => {
//     // setIsQueryChange(true);
//     if (searchValue) {
//       console.log(allPushNotificaions, searchValue);
//       const title = allPushNotificaions.filter((item: any) =>
//         item.templateName.toLowerCase().includes(searchValue.toLowerCase())
//       );
//       setAllPushNotificaions(title);

//       setSnapShot(searchWalletAddress);
//       setShowWalletModal(false);
//       const matchingIndices = reSortedArray.reduce(
//         (acc: number[], item: any, index: number) => {
//           if (item.wallet.includes(e.target.value)) {
//             acc.push(index);
//           }
//           return acc;
//         },
//         []
//       );
//     } else {
//       getAllPush();
//       setSearchValue("");
//     }
//   };
  useEffect(() => {
   allPushInfo();
   allCompanynfo();
  }, []);
  const handleToggleChange = (index: any, e: any) => {
    setShowPopup(true);
    setChangeStatusData(e);
  };
  const allPushInfo = () => {
    listUser()
      .then((response) => {
        console.log(response.data.data.results, "resposne");
        setAllPushNotificaions(response?.data?.data?.results);
        console.log(allPushNotificaions, "allPushNotificaions");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const allCompanynfo = () => {
    listUser()
      .then((response) => {
        console.log(response, "resposne12");
        setAllCompany(response?.data?.data?.results);
  
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const Header = [
    
    {
      name: "User Name",
      selector: (row: { userName: any }) => row.userName,
      
    },
    {
      name: "Created",
      selector: (row: { createdAt: any }) => row.createdAt,
    },
    
    {
      name: "Email",
      selector: (row: { email: any }) => row.email,
      
    },
    {
      name: "Mobile No",
      selector: (row: { mobileNo: any }) => row.mobileNo,
      
    },

    {
      name: "Status",
      selector: (row: { status: any }) => row.status,
     
    },
    {
      name: "Roll",
      selector: (row: { role: any }) => row.role,
    },
  ];
  //   const mappedData = allPushNotificaions.map((item:any) => ({
  //     templateName: item.templateName?item.templateName:"-",
  //     receiver: item.receiver?item.receiver:"-",
  //     content: item.message?item.message:"-",
  //     status: item.status?"True":"False",

  //   }));

  const mappedData =
  allPushNotificaions &&
  allPushNotificaions?.map((item: any) => {
      let contentHTML;
      // Assuming you have some condition to determine the status dynamically from API data
      if (item.message) {
        contentHTML = item.message;
      } else {
        contentHTML = "-";
      }
      return {
        id:item.id ? item.id : "-",
        createdAt: item.createdAt ? item.createdAt : "-",
        userName: item.userName ? item.userName : "-",
        fullName: item.fullName ? item.fullName : "-",
        email: item.email ? item.email : "-",
        profileImage: item.profileImage ? item.profileImage : "-",
        mobileNo: item.mobileNo ? item.mobileNo : "-",
        lastAccessedAt: item.lastAccessedAt ? item.lastAccessedAt : "-",
        status: item.status?"true":"false",
        role: item.role ? item.role : "-",
      };
    });
  const handleSubmitButton = async (formField: any) => {
    formField.companyId = update;
    formField.roleId = "12";
    formField.companyId="96ff26fa-470a-4291-94d4-ce8b1532d36d";
    console.log(formField, "formInfo");
    try {
      let response = await createUser(formField);
      if (response) {
        console.log(response);
        toast.success(`Sucessfully created`);
      }
    } catch (e: any) {
      console.log(e);
    }
  };
//   const updateHandleSubmitButton = async (formField: any) => {
//     console.log(formField);
//     formField.templateCode = "Test";
//     formField.id = initialUpdateData.id;
//     formField.message = messgaeContent;
//     formField.messageArabic = messgaeContentArabic;
//     console.log(formField, "updateformInfo");
//     try {
//       let response = await updatePushNotification(formField);
//       if (response) {
//         console.log(response);
//         toast.success(`Sucessfully updated`);
//         getAllPush();
//       }
//     } catch (e: any) {
//       console.log(e);
//     }
//   };
//   const handleEditorChangeMessage = (event: any, editor: any) => {
//     let editorData = messgaeContent;
//     editorData = editor.getData(event);
//     setMessgaeContent(editorData);
//   };
//   const changeStatus = (data: any) => {
//     console.log(data, "change Data");
//     data.action.status = data.action.status == true ? false : true;
//     console.log(data, "change Data");
//     const status = {
//       id: data.action.id,
//       status: data.action.status,
//     };
//     getPushChangeStatus(status)
//       .then((response) => {
//         console.log(response, "resposne");
//         setShowPopup(false);
//         toast.success(`Sucessfully status changed`);
//         allPushInfo();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
  const handleEditorChangeMessageArabic = (event: any, editor: any) => {
    let editorData = "";
    editorData = editor.getData(event);
    setMessgaeContentArabic(editorData);
  };

  const CategoryData: any = {
    true: "true",
    false: "false",


  };
  const transmissionCategoryData: any = [];
  for (const key in CategoryData) {
    if (CategoryData.hasOwnProperty(key)) {
      transmissionCategoryData.push({ label: key, value: CategoryData[key] });
    }
  }
  const button = [
    {
      title: "Add User",
      onClick: () => {
        setCreate(true);
        setMessgaeContent("");
        setMessgaeContentArabic("");
      },
    },
  ];
  const handleSelectChange = (value: any, name: any) => {
setUpdate(value)  };
console.log(allCompany,"12")
  return (
    <>
      <div className="cs-table">
        <DynamicHeaderStructure
          button={button}
          searchPlaceHolder={"Search "}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <TableView header={Header} data={mappedData}  />
        <Modal show={create} onHide={() => setCreate(false)} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Formik
            initialValues={{
                userName: "",
                fullName: "",
                email: "",
              templateName: "",
              templateNameArabic: "",
              message: "",
              messageArabic: "",
              status: false,
              logStatus: true,
            }}
            onSubmit={handleSubmitButton}
          >
            {({ setFieldValue }) => {
              return (
                <Form>
                  <Modal.Body>
                    <div className="col-md-12 row pt-3">
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="userName">
                            User Name
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          placeholder="Enter username"
                          name="userName"
                          id="userName"
                          autoComplete="off"
                          onChange={(e: any) =>
                            setFieldValue("userName", e.target.value)
                          }
                        />
                        <ErrorMessage
                          name="userName"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                      <div className="form-group new_password form-label-group col-md-6">
                        <label className="pb-1" htmlFor="fullName">
                          Full Name
                        </label>
                        <Field
                          type="text"
                          placeholder="Enter your full name"
                          id="fullName"
                          name="fullName"
                          className="form-control"
                          onChange={(e: any) =>
                            setFieldValue("fullName", e.target.value)
                          }
                        />
                        <ErrorMessage
                          name="fullName"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 row pt-3">
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="email">
                        Email
                        </label>
                        <Field
                          className="form-control col-6"
                          type="email"
                          placeholder="Enter your email"
                          name="email"
                          id="email"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                      <div className="form-group new_password form-label-group col-md-6">
                        <label className="pb-1" htmlFor="password">
                            Password
                        </label>
                        <Field
                          type="password"
                          placeholder="Dashboard-User Profiles"
                          id="password"
                          name="password"
                          className="form-control"
                          onChange={(e: any) =>
                            setFieldValue("password", e.target.value)
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 row pt-3">
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="roleId">
                            Role Id
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          placeholder="Role id"
                          name="roleId"
                          id="roleId"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="roleId"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="profileImage">
                            Profile Image
                        </label>
                        <Field
                          className="form-control col-6"
                          type="file"
                          placeholder="profile Image"
                          name="profileImage"
                          id="profileImage"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="profileImage"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 row pt-3">
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="mobileNo">
                        Mobile No
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          placeholder="mobile No "
                          name="mobileNo"
                          id="mobileNo"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="mobileNo"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>

                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="status">
                          Status
                        </label>
                        <div >
                        <Select
                          className="height-50 br-10 bg-color-select"
                          options={transmissionCategoryData}
                          onChange={(e: any) =>
                            setFieldValue("status", e.value)
                          }
                        ></Select>
                        </div>
                        
                        {/* <Field
                          className="form-control col-6"
                          type="text"
                          placeholder="Active"
                          name="status"
                          id="status"
                          autoComplete="off"
                        /> */}

                        <ErrorMessage
                          name="status"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 row pt-3">
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="companyId">
                            Company Id
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          value="96ff26fa-470a-4291-94d4-ce8b1532d36d"
                          placeholder="Enter username"
                          name="company"
                          id="company"
                          readOnly
                          autoComplete="off"
                          onChange={(e: any) =>
                            setFieldValue("company", e.target.value)
                          }
                        />
                        {/* <Select
                  style={{ width: "90%" }}
                  onChange={(value) => handleSelectChange(value,"")}
                >
                  {allCompany &&
                    allCompany.map((item: any, index: any) => (
                      <Select.Option value={item.id}>
                        {item?.fullName}
                      </Select.Option>
                    ))}
                </Select> */}


                        <ErrorMessage
                          name="companyId"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="managerId">
                            Manager Id
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          placeholder="company Id "
                          name="managerId"
                          id="managerId"
                          autoComplete="off"
                        />

                        <ErrorMessage
                          name="managerId"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center createUser">
                      <button
                        className="theme-btn col-3 mt-3 button-margin d-flex justify-content-center"
                        type="submit"
                      >
                        Add User
                      </button>
                    </div>
                  </Modal.Body>
                </Form>
              );
            }}
          </Formik>
        </Modal>
        {/* <Modal show={update} onHide={() => setUpdate(false)} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Update Push</Modal.Title>
          </Modal.Header>

          <Formik
            initialValues={{
              templateCode: "",
              title: initialUpdateData.title,
              titleArabic: initialUpdateData.titleArabic,
              templateName: initialUpdateData.templateName,
              templateNameArabic: initialUpdateData.templateNameArabic,
              message: initialUpdateData.message,
              messageArabic: initialUpdateData.initialUpdateData,
              status: false,
              logStatus: true,
            }}
            onSubmit={updateHandleSubmitButton}
          >
            {({ setFieldValue }) => {
              return (
                <Form>
                  <Modal.Body>
                    <div className="col-md-12 row pt-3">
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="title">
                          Title
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          name="title"
                          id="title"
                          autoComplete="off"
                          onChange={(e: any) =>
                            setFieldValue("title", e.target.value)
                          }
                        />

                        <ErrorMessage
                          name="title"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                      <div className="form-group new_password form-label-group col-md-6">
                        <label className="pb-1" htmlFor="titleArabic">
                          Title (Arabic)
                        </label>
                        <Field
                          type="text"
                          id="titleArabic"
                          name="titleArabic"
                          className="form-control"
                          onChange={(e: any) =>
                            setFieldValue("titleArabic", e.target.value)
                          }
                        />

                        <ErrorMessage
                          name="titleArabic"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 row pt-3">
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="templateName">
                          Template Name
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          name="templateName"
                          id="templateName"
                          autoComplete="off"
                        />

                        <ErrorMessage
                          name="templateName"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                      <div className="form-group new_password form-label-group col-md-6">
                        <label className="pb-1" htmlFor="templateNameArabic">
                          Template Name (Arabic)
                        </label>
                        <Field
                          type="text"
                          id="templateNameArabic"
                          name="templateNameArabic"
                          className="form-control"
                          onChange={(e: any) =>
                            setFieldValue("templateNameArabic", e.target.value)
                          }
                        />

                        <ErrorMessage
                          name="templateNameArabic"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 row pt-3">
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="message">
                          Content
                        </label>
                        <CKEditor
                          editor={ClassicEditor}
                          data={initialUpdateData.message}
                          onChange={handleEditorChangeMessage}
                        />

                        <ErrorMessage
                          name="message"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>

                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="messageArabic">
                          Content (Arabic)
                        </label>

                        <CKEditor
                          editor={ClassicEditor}
                          data={initialUpdateData.messageArabic}
                          onChange={handleEditorChangeMessageArabic}
                        />
                        <ErrorMessage
                          name="messageArabic"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 row pt-3">
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="receiver">
                          Reciever
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          name="receiver"
                          id="receiver"
                          autoComplete="off"
                        />

                        <ErrorMessage
                          name="receiver"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>

                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="status">
                          Status
                        </label>
                        <Select
                          className="height-50 br-10 bg-color-select"
                          options={transmissionCategoryData}
                          onChange={(e: any) =>
                            setFieldValue("status", e.value)
                          }
                        ></Select>
                        <ErrorMessage
                          name="status"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 row pt-3">
                      <div className="form-group form-label-group col-md-6">
                        <label className="pb-1" htmlFor="logStatus">
                          Log Status
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          name="logStatus"
                          id="logStatus"
                          autoComplete="off"
                        />

                        <ErrorMessage
                          name="logstatus"
                          component="div"
                          className="invalid-feedback text-danger"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        className="theme-btn col-3 mt-3 button-margin d-flex justify-content-center"
                        type="submit"
                      >
                        Update
                      </button>
                    </div>
                  </Modal.Body>
                </Form>
              );
            }}
          </Formik>
        </Modal> */}
        {/* <Modal show={showPopup} onHide={closePopup}>
          <Modal.Header closeButton>
            <Modal.Title>Change Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {showPopup && (
              <div>
                <p>Are you sure you want to change your status</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                changeStatus(changeStatusData);
              }}
            >
              Confirm
            </Button>
            <Button variant="secondary" onClick={closePopup}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </>
  );
};
export default ManagementUser;
