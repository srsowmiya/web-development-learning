import { useRef,useEffect } from 'react';

const Sample = () => {
  const val = useRef(0);
  useEffect(()=>{
    console.log("useEffect called")
  },[])

  function increase() {
    val.current++;
    console.log(val.current);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Sample;