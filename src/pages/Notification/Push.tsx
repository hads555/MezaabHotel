import React, { useEffect, useState } from "react";

import TableView from "../../components/TableView/TableView";

import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

import {
  createPushNotification,
  findOne,
  getAllPush,
  getAllSms,
  getPushChangeStatus,
  updatePushNotification,
} from "./NotificationCrud";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Col, Modal, ModalTitle, Row } from "react-bootstrap";
import Switch from "react-switch";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Select } from "antd";
import toast from "react-hot-toast";

const Push = () => {
  const [create, setCreate] = useState(false);
  const [update, setUpdate] = useState(false);
  const [allPushNotificaions, setAllPushNotificaions] = useState<any>("");
  const [messgaeContent, setMessgaeContent] = useState<any>("");
  const [messgaeContentArabic, setMessgaeContentArabic] = useState<any>("");
  const [initialUpdateData, setInitialUpdateData] = useState<any>("");
  const [showPopup, setShowPopup] = useState(false);
  const [changeStatusData, setChangeStatusData] = useState<any>("");
  const [searchValue, setSearchValue] = useState("");
  const closePopup = () => {
    setShowPopup(false);
  };

  const allPushInfo = () => {
    getAllPush()
      .then((response) => {
        console.log(response, "resposne");
        setAllPushNotificaions(response?.data?.data);
        console.log(allPushNotificaions, "allPushNotificaions");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSearchHandle = () => {
    // setIsQueryChange(true);
    if (searchValue) {
      console.log(allPushNotificaions, searchValue);
      const title = allPushNotificaions.filter((item: any) =>
        item.templateName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setAllPushNotificaions(title);

      // setSnapShot(searchWalletAddress);
      // setShowWalletModal(false);
      // const matchingIndices = reSortedArray.reduce(
      //   (acc: number[], item: any, index: number) => {
      //     if (item.wallet.includes(e.target.value)) {
      //       acc.push(index);
      //     }
      //     return acc;
      //   },
      //   []
      // );
    } else {
      getAllPush();
      setSearchValue("");
    }
  };
  useEffect(() => {
    {
      !searchValue && allPushInfo();
    }

    {
      searchValue && onSearchHandle();
    }
  }, [searchValue]);
  const handleToggleChange = (index: any, e: any) => {
    setShowPopup(true);
    setChangeStatusData(e);
  };
  const Header = [
    {
      name: "Template Name",
      selector: (row: { templateName: any }) => row.templateName,
    },
    {
      name: "Receiver",
      selector: (row: { receiver: any }) => row.receiver,
    },
    {
      name: "Content",
      selector: (row: { content: any }) => row.content,
      cell: (row: any, index: any) => (
        <div dangerouslySetInnerHTML={{ __html: row.content }} />
      ),
    },
    {
      name: "Status",
      selector: (row: { action: any }) => row.action.status,
      cell: (row: any, index: any) => (
        <div>
          <Switch
            onChange={(e: any) => handleToggleChange(index, row)}
            checked={row.action.status ? row.action.status : false}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#004D72" // Adjust the color when the switch is on
            offColor="#ccc" // Adjust the color when the switch is off
            height={20} // Adjust the height of the switch
            boxShadow="#fff"
          />
        </div>
      ),
    },
    {
      name: "Action",
      selector: (row: { action: any }) => row.action,
      cell: (row: any) => (
        <>
          <div className="d-flex">
            <div
              style={{
                padding: ".25rem 0.5rem",
                borderRadius: "4px",
                backgroundColor: "#4253a1",
                color: "white",
                marginRight: "4px",
              }}
              onClick={() => {
                setInitialUpdateData(row?.action);
                setUpdate(true);
                console.log(row, "row");
              }}
            >
              Update
            </div>
          </div>
        </>
      ),
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
    allPushNotificaions.map((item: any) => {
      let contentHTML;
      // Assuming you have some condition to determine the status dynamically from API data
      if (item.message) {
        contentHTML = item.message;
      } else {
        contentHTML = "-";
      }
      return {
        templateName: item.templateName ? item.templateName : "-",
        receiver: item.receiver ? item.receiver : "-",
        content: contentHTML,
        status: item,
        action: item,
      };
    });
  const handleSubmitButton = async (formField: any) => {
    formField.templateCode = "Test";
    formField.message = messgaeContent;
    formField.messageArabic = messgaeContentArabic;
    console.log(formField, "formInfo");
    try {
      let response = await createPushNotification(formField);
      if (response) {
        console.log(response);
        toast.success(`Sucessfully created`);
      }
    } catch (e: any) {
      console.log(e);
    }
  };
  const updateHandleSubmitButton = async (formField: any) => {
    console.log(formField);
    formField.templateCode = "Test";
    formField.id = initialUpdateData.id;
    formField.message = messgaeContent;
    formField.messageArabic = messgaeContentArabic;
    console.log(formField, "updateformInfo");
    try {
      let response = await updatePushNotification(formField);
      if (response) {
        console.log(response);
        toast.success(`Sucessfully updated`);
        getAllPush();
      }
    } catch (e: any) {
      console.log(e);
    }
  };
  const handleEditorChangeMessage = (event: any, editor: any) => {
    let editorData = messgaeContent;
    editorData = editor.getData(event);
    setMessgaeContent(editorData);
  };
  const changeStatus = (data: any) => {
    console.log(data, "change Data");
    data.action.status = data.action.status == true ? false : true;
    console.log(data, "change Data");
    const status = {
      id: data.action.id,
      status: data.action.status,
    };
    getPushChangeStatus(status)
      .then((response) => {
        console.log(response, "resposne");
        setShowPopup(false);
        toast.success(`Sucessfully status changed`);
        allPushInfo();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEditorChangeMessageArabic = (event: any, editor: any) => {
    let editorData = "";
    editorData = editor.getData(event);
    setMessgaeContentArabic(editorData);
  };

  const CategoryData: any = {
    Manual: "1",
    Automatic: "2",
    1: "1",
    2: "2",
    3: "1",
    4: "2",
    5: "1",
    6: "2",
    7: "1",
    8: "2",
    9: "1",
    10: "2",
    11: "1",
    12: "2",
    13: "1",
    14: "2",
    15: "1",
    16: "2",
    17: "1",
  };
  const transmissionCategoryData: any = [];
  for (const key in CategoryData) {
    if (CategoryData.hasOwnProperty(key)) {
      transmissionCategoryData.push({ label: key, value: CategoryData[key] });
    }
  }
  const button = [
    {
      title: "Create",
      onClick: () => {
        setCreate(true);
        setMessgaeContent("");
        setMessgaeContentArabic("");
      },
    },
  ];
  return (
    <>
      <div className="cs-table">
        <DynamicHeaderStructure
          button={button}
          searchPlaceHolder={"Search by Template Name"}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <TableView header={Header} data={mappedData} />
        <Modal show={create} onHide={() => setCreate(false)} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Create New Push</Modal.Title>
          </Modal.Header>
          <Formik
            initialValues={{
              templateCode: "",
              title: "",
              titleArabic: "",
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
                        <label className="pb-1" htmlFor="title">
                          Title
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          placeholder="Title"
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
                          placeholder="Title"
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
                          placeholder="Registration Inquiry (Guest)"
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
                          placeholder="Dashboard-User Profiles"
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
                          data={messgaeContent}
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
                          data={messgaeContentArabic}
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
                          placeholder="other "
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
                          // value={makerCategories.find(a => a.value === values.manufacturer)}
                          onChange={(e: any) =>
                            setFieldValue("status", e.value)
                          }
                        ></Select>
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
                        <label className="pb-1" htmlFor="logStatus">
                          Log Status
                        </label>
                        <Field
                          className="form-control col-6"
                          type="text"
                          placeholder="Active "
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
                        Create
                      </button>
                    </div>
                  </Modal.Body>
                </Form>
              );
            }}
          </Formik>
        </Modal>
        <Modal show={update} onHide={() => setUpdate(false)} size="xl">
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
                          // value={makerCategories.find(a => a.value === values.manufacturer)}
                          onChange={(e: any) =>
                            setFieldValue("status", e.value)
                          }
                        ></Select>
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
        </Modal>
        <Modal show={showPopup} onHide={closePopup}>
          <Modal.Header closeButton>
            <Modal.Title>Change Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Additional content goes here */}
            {showPopup && (
              <div>
                <p>Are you sure you want to change your status</p>
                {/* Add more details as needed */}
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
        </Modal>
      </div>
    </>
  );
};
export default Push;
