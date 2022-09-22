import { MdOutlineCancel } from "react-icons/md";

function Backdrop(props) {
  return (
    <div className="backdrop">
      <MdOutlineCancel className="icon" onClick={props.onCancel} title="Exit"/>
    </div>
   
  );
}
export default Backdrop;
