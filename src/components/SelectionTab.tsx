import { Select } from "antd";

const SelectionTab = (props: any) => {
  console.log(props);
  return (
    <>
      <div className="">
        <Select className={props.size}></Select>
      </div>
    </>
  );
};
export default SelectionTab;
