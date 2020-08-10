import React, { TextareaHTMLAttributes } from 'react';
import './styles.css';

interface TexareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

const Texarea: React.FC<TexareaProps> = ({name, label, ...rest }) => {

    return (
        <div className="textarea-block">
            <label htmlFor={ name }>{ label }</label>
            <textarea id={ name } { ...rest }> </textarea>
        </div>
    );
}
export default Texarea;