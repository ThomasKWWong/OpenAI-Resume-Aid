import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PromptProcessing from '../Components/PromptProcessing'
import SelectionPanel from '../Components/SelectionPanel';
import Input from '../Components/Input';

const Receiver = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState('')
    const [checkedList, setCheckedList] = useState([])
    
    const handleInputChange = (key, value) => {
        setInputs({
            ...inputs,
            [key]: value
        })
    }

    const submitData = async () => {
        const result = await PromptProcessing.handlePrompts(inputs)
        // console.log(result)
        navigate('/result', {state: {result}} )
    }

    return (
        <div>
            <div>
                <SelectionPanel checkedList={checkedList} setCheckedList={setCheckedList}/>
                <span>
                    {checkedList.map((item) => {
                        return (
                            <div key={item}>
                                <Input setValue = {(value) => handleInputChange(item, value)}
                                value={inputs[item] || ''}
                                label={item}
                                />
                            </div>
                        )
                    })}
                </span>
                <button onClick={submitData}>Submit</button>
            </div>
        </div>
    )
}

export default Receiver;