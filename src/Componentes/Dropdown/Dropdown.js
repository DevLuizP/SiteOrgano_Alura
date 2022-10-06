import './Dropdown.css'

export const dropdown = (props) => {
    return (
        <div className='drop-down'>
            <div className='label'>
                <label>
                    {props.label} 
                </label>
            </div>
            <div>
                <select className='dropdown-content' placeholder={props.placeholder} >
                    <option>
                        1
                    </option>
                    <option>
                        2
                    </option>
                    <option>
                        3
                    </option>
                </select>
            </div>
        </div>
    )
}