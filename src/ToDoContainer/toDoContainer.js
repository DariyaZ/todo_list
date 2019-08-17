import React from 'react';
import ToDoItem from '../toDoItem/index';

export default function ToDoContainer() {
    const [ value, handleChange ] = React.useState('');
    let [ toDoList, hamdleItemChange ] = React.useState([]);

    const handleAdd = () => {
        if (!value) {
            return;
        }

        toDoList = toDoList.concat(value);

        handleChange('');
        hamdleItemChange(toDoList);   
    };

    const removeItem = (index) => {
        const refreashedList = [...toDoList];
        refreashedList.splice(index, 1);
        hamdleItemChange(refreashedList);
    };

    const keyPressed = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
        }
    }

    const list = toDoList.map((item, index) => <ToDoItem key={index}
                                                         content={item}
                                                         index={index}
                                                         removeItem={removeItem}/>);

    return (
        <div className='container'>
            {/* <header className='header'>
                <h1 className='heading'>TO DO LIST</h1>
            </header> */}
            <div className='toDoInput'>
                <form>
                    <input type='text'
                        value={value}
                        onChange={(e) => handleChange(e.target.value)}
                        onKeyPress={keyPressed}/>
                    <button type='button' onClick={handleAdd}>+</button>
                </form>
            </div>
            <div className='listItems'>{list}</div>
        </div>
    )
}