import React from 'react';
import NavLink from '../app/NavLink.js';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	align-items: center;
	color: white;
	background: linear-gradient(135deg, #322356, #43579c);
	box-shadow: 1px 3px 7px 3px #ccc;
	display: grid;
	padding: 10px;
	text-align: center;
	word-break: break-word;
	min-height: 180px;
	justify-content: center;
`;

const StyledNavContainer = styled.section`
	height: 100%;
`;

const StyledNav = styled.nav`
	display: grid;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default function OverviewPage() {
	return (
		<StyledNavContainer>
			<StyledNav>
				<StyledNavLink to='/documents'>
					<i className='fas fa-copy' />
					Documents
				</StyledNavLink>
				<StyledNavLink to='/domains'>
					<i className='fas fa-tags' />
					Domains
				</StyledNavLink>
				<StyledNavLink to='/dictionaries'>
					<i className='fas fa-book' />
					Dictionaries
				</StyledNavLink>
			</StyledNav>
		</StyledNavContainer>
	);
}
