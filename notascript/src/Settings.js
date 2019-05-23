import React, { Component } from 'react';
import DocumentList from './DocumentList';

export default class Settings extends Component {
	state = {
		documents: [
			{ title: 'filename1', description: 'some description for filename1' },
			{ title: 'filename2', description: 'some description for filename2' },
			{ title: 'filename3', description: 'some description for filename3' }
		]
	};

	renderDocumentList(array) {
		console.log(array);
	}

	render() {
		return <DocumentList documentList={this.state.documents} />;
	}
}
