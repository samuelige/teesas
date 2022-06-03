import React from 'react'

interface ICheckBox {
    id: number,
    handleCheckChieldElement : (e: React.ChangeEvent<HTMLInputElement>) => void,
    isChecked: boolean,
    value: string,
};

const CheckBox  = ({id, handleCheckChieldElement,isChecked, value } : ICheckBox) => {
    return (
        <li>
            <input key={id} onChange={handleCheckChieldElement} type="checkbox" checked={isChecked} value={value} /> {value}
        </li>
    )
}

export default CheckBox