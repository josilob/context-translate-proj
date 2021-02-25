import React from 'react';

// create Context Object
// export default React.createContext('english'); // set up english as default value

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
	state = { language: 'english' };

	onLanguageChange = (language) => {
		this.setState(language);
	};

	render() {
		return (
			<Context.Provider
				value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default Context;
