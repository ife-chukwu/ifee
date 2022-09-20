import  {MdCancel} from 'react-icons/md'

function Order() {
  const hide = () =>{
    console.log('hello world')
  }
    return (
      <div>
        <h1>This right here is About</h1>
        <MdCancel  className='icon' onClick={hide}/>
      </div>
    );
  }
  export default Order;