import React from 'react';
import Buttons from './Buttons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSymbols = styled.section`
	font-size: 3em;
`;

export default function Work({ symbols, handleButtonClick }) {
	let createdSymbols = createUnicodes('0200', 50);

	function createUnicodes(start, counter) {
		const newArray = Array(counter)
			.fill('')
			.map(() => {
				start++;
				let unicode = '0x' + start;
				return String.fromCodePoint(unicode);
			});

		return newArray;
	}

	return (
		<>
			<StyledSymbols>{symbols}</StyledSymbols>
			<Buttons
				buttonLabels={createdSymbols}
				handleButtonClick={buttonLabel => handleButtonClick(buttonLabel)}
			/>
		</>
	);
}

Work.propTypes = {
	symbols: PropTypes.array,
	handleButtonClick: PropTypes.func
};
