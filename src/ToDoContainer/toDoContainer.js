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
            <div className='toDoInput'>
                <form>
                    <input type='text'
                           className='taskInput'
                           value={value}
                           placeholder={'Type todo here'}
                           onChange={(e) => handleChange(e.target.value)}
                           onKeyPress={keyPressed}/>
                    <button className='addButton' type='button' onClick={handleAdd}></button>
                </form>
            </div>
            <div className='listItems'>{list}</div>
        </div>
    )
}