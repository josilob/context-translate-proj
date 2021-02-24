import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class Button extends Component {
	// static contextType = LanguageContext; // has to be called 'contextType' exactly in order to work
	// static keyword means we assign propery to the class itself
	// it would be the same as typing:
	// Button.contextType = LanguageContext

	renderSubmit(value) {
		return value === 'english' ? 'Submit' : 'Voorleggen';
	}

	render() {
		// const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
		// return <button className='ui button primary'>{text}</button>;
		return (
			<ColorContext.Consumer>
				{(color) => (
					<button className={`ui button ${color}`}>
						<LanguageContext.Consumer>
							{(value) => this.renderSubmit(value)}
						</LanguageContext.Consumer>
					</button>
				)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;
