import { evaluate } from 'mathjs';
import React, { useState } from 'react'
import { FiDelete } from "react-icons/fi";

const Calc = () => {

    const [input,setInput] = useState<string>('')

    if (['/', '%','*', '+','-', '/','.'].includes(input)) {
        alert('Incorrect Type :/');
        setInput('')
    }
    return (
        <div className='calc_div'>
            <div className='input_div'>
                <input type="text" readOnly value={input} />
            </div>
            <div className='buttons_div'>
                <div className='line_1'>
                    <button className='gray' onClick={() => {setInput('')}}>C</button>
                    <button className='gray' onClick={() => {setInput(input.slice(0,-1))}}><FiDelete /></button>
                    <button className='gray' onClick={() => {setInput(input + '%')}}>%</button>
                    <button className='orange' onClick={() => {setInput(input + '/')}}>÷</button>
                </div>
                <div className='line_2'>
                    <button className='dark_gray' onClick={() => {setInput(input + '7')}}>7</button>
                    <button className='dark_gray' onClick={() => {setInput(input + '8')}}>8</button>
                    <button className='dark_gray' onClick={() => {setInput(input + '9')}}>9</button>
                    <button className='orange' onClick={() => {setInput(input + '*')}}>×</button>
                </div>
                <div className='line_3'>
                    <button className='dark_gray' onClick={() => {setInput(input + '4')}}>4</button>
                    <button className='dark_gray' onClick={() => {setInput(input + '5')}}>5</button>
                    <button className='dark_gray'  onClick={() => {setInput(input + '6')}}>6</button>
                    <button className='orange' onClick={() => {setInput(input + '-')}}>−</button>
                </div>
                <div className='line_4'>
                    <button className='dark_gray' onClick={() => {setInput(input + '1')}}>1</button>
                    <button className='dark_gray' onClick={() => {setInput(input + '2')}}>2</button>
                    <button className='dark_gray' onClick={() => {setInput(input + '3')}}>3</button>
                    <button className='orange' onClick={() => {setInput(input + '+')}}>+</button>
                </div>
                <div className='line_5'>
                    <button className='dark_gray big' onClick={() => {setInput(input + '0')}}>0</button>
                    <button className='dark_gray' onClick={() => {setInput(input + '.')}}>.</button>
                    <button className='orange ' onClick={() => {setInput(evaluate(input))} }>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calc
