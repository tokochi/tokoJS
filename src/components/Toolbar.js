import React, { useEffect } from 'react';
import './Toolbar.css';
import imp from '../assets/share.png';

export default function Toolbar() {
	useEffect(() => {
		document.title = 'JS Toolbar';
	}, []);

	return (
		<div id="container">
			<div
				className="js"
				onClick={() => {
					navigator.clipboard.writeText('const = ;');
				}}
			>
				Var
			</div>
			<div
				className="js"
				onClick={() => {
					navigator.clipboard.writeText('function name() {}');
				}}
			>
				fn
			</div>
			<div
				className="js"
				onClick={() => {
					navigator.clipboard.writeText('() => {}');
				}}
			>
				{'=>'}
			</div>
			<div
				className="js"
				onClick={() => {
					navigator.clipboard.writeText('()');
				}}
			>
				( )
			</div>
			<div
				className="js"
				onClick={() => {
					navigator.clipboard.writeText('{}');
				}}
			>
				{'{ }'}
			</div>
			<div
				className="js"
				onClick={() => {
					navigator.clipboard.writeText('[]');
				}}
			>
				[ ]
			</div>
			<div
				className="js"
				onClick={() => {
					navigator.clipboard.writeText('#');
				}}
			>
				#
			</div>
			<div
				className="js"
				onClick={() => {
					navigator.clipboard.writeText('<>');
				}}
			>
				{'<>'}
			</div>
			<div
				className="js"
				onClick={() => {
					navigator.clipboard.writeText('``');
				}}
			>
				{'``'}
			</div>
			<div
				className="js imp"
				onClick={() => {
					navigator.clipboard.writeText("import {} from ''");
				}}
			>
				<img src={imp} height="13px" />
			</div>
			<div
				className="htl js"
				onClick={() => {
					navigator.clipboard.writeText("<div className='' id=''></div>");
				}}
			>
				div
			</div>
			<div
				className="htl js"
				onClick={() => {
					navigator.clipboard.writeText("className=''");
				}}
			>
				class
			</div>
			<div
				className="htl js"
				onClick={() => {
					navigator.clipboard.writeText("id=''");
				}}
			>
				id
			</div>
			<div
				className="htl js"
				onClick={() => {
					navigator.clipboard.writeText('style={{}}');
				}}
			>
				style
			</div>
		</div>
	);
}
