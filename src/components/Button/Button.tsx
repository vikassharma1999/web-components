import React from 'react';
import './style/index';

export interface IButtonProps {
	type?:'default' | 'primary' | 'danger' | 'link' | 'primary-outline' | 'secondary';
	htmlType?:'button' | 'reset' | 'submit';
	size?:'default' | 'small' | 'medium' | 'large';
	disabled?:boolean;
	onClick?:(event:MouseEvent)=>void;
	className?:string;
	children?:any;
}

const Button:FunctionalComponent<IButtonProps> = ({
	htmlType="button",
	type="default",
	size="small",
	disabled,
	children,
	onClick,
	className=''
})=>{

	return (
		<button 
		  disabled={disabled}
		  className={`web-button web-button__${type} web-button__size__${size} ${className}`}
		  type={htmlType}
		  onClick={onClick}
		>
		{children && <span>{children}</span>}	
		</button>
	);
};

export default Button;