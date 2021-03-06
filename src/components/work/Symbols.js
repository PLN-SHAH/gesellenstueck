import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButtonContainer = styled.section`
	border-bottom: 1px solid #d32e4a;
	overflow-x: scroll;
	min-width: 320px;
`;

const StyledButtons = styled.button`
	background-color: #d32e4a;
	margin: 0;
	font-size: 1em;
	font-family: 'Raleway', sans-serif;
`;

const StyledSymbolsContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
`;

const StyledSymbol = styled.button`
	font-size: 1.3em;
	height: 30px;
	width: auto;
	padding: 5px;
	color: #373f43;
	border: none;
	background: transparent;
`;

export default function Buttons({
	handleButtonClick,
	createdSymbols,
	dictionaries
}) {
	const [filter, setFilter] = useState(['all']);

	function getFilterTitle() {
		return dictionaries.map(dictionary => dictionary.title);
	}

	function handleOnClick(filter) {
		setFilter(filter);
	}

	function getFilteredOutput() {
		const dictionary =
			filter && dictionaries.find(dictionary => dictionary.title === filter);

		if (filter === 'all') {
			dictionary.entries = createdSymbols;
		}
		return (dictionary && dictionary.entries) || createdSymbols;
	}

	return (
		<>
			<StyledButtonContainer>
				{getFilterTitle().map(filter => (
					<StyledButtons key={filter} onClick={() => handleOnClick(filter)}>
						{filter}
					</StyledButtons>
				))}
			</StyledButtonContainer>
			<StyledSymbolsContainer>
				{getFilteredOutput().map(symbol => (
					<StyledSymbol
						key={symbol.key}
						onClick={() => handleButtonClick(symbol.key)}
					>
						{symbol.key}
					</StyledSymbol>
				))}
			</StyledSymbolsContainer>
		</>
	);
}

Buttons.propTypes = {
	handleButtonClick: PropTypes.func,
	createdSymbols: PropTypes.array,
	dictionaries: PropTypes.array
};
