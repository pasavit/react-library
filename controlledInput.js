import React, {useState} from 'react';

function ControlledInput(){
    return <div>
        <div><input type='text' /></div>
    </div>
}


function ControlledInput(){
    const [value, setValue] = useState(' ');
    const inputRef = React.createRef();
    //this.state = {value: ''};
    //this.setState({value: 'foo'}) ==> setValue('foo')

    const onValueChange = () => {
        // 1. use the event
        // 2. query dom
        // 3. use ref
        const val = inputRed.current.value;
        setValue(val.toUpperCase());
    }

    return <div>
        <div><input type='text' /></div> // 1. dont really care what goes in there
        <div><input type='text' value='Unchangeable'/></div> // 2. 
        <div><input ref={inputRef} type='text' value={value}/></div> 3. 
    </div>
}
export default ControlledInput;