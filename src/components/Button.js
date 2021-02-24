import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Button extends Component {
	static contextType = LanguageContext; // has to be called 'contextType' exactly in order to work
	// static keyword means we assign propery to the class itself
	// it would be the same as typing:
	// Button.contextType = LanguageContext
	render() {
		const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
		return <button className='ui button primary'>{text}</button>;
	}
}

export default Button;
