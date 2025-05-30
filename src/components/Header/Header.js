import React from 'react';
import styled from 'styled-components';

import {WEIGHTS, QUERIES} from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	return (
		<header>
			<SuperHeader/>
			<MainHeader>
				<LogoWrapper>
					<Logo/>
				</LogoWrapper>
				<DesktopNav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</DesktopNav>
				<MobileActions>
					<ShoppingBagButton>
						<Icon id="shopping-bag"/>
						<VisuallyHidden>Open cart</VisuallyHidden>
					</ShoppingBagButton>
					<UnstyledButton>
						<Icon id="search"/>
						<VisuallyHidden>Search</VisuallyHidden>
					</UnstyledButton>
					<UnstyledButton onClick={() => setShowMobileMenu(true)}>
						<Icon id="menu"/>
						<VisuallyHidden>Open menu</VisuallyHidden>
					</UnstyledButton>
				</MobileActions>
				<Filler/>
			</MainHeader>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	);
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  
  @media  screen and ${QUERIES.tabletAndDown} {
	overflow: auto;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--color-gray-900);
  };
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0 48px;
  
  @media ${QUERIES.tabletAndDown} {
	display: none;
  }
  @media ${QUERIES.phoneAndDown} {
	padding-left: 16px;
	padding-right: 16px;
  }
`;

const MobileActions = styled.div`
  display: none;
  @media ${QUERIES.tabletAndDown} {
	display: flex;
	gap: 32px;
  }
  @media ${QUERIES.phoneAndDown} {
	gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media screen and ${QUERIES.tabletAndDown} {
	flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;
  @media screen and ${QUERIES.tabletAndDown} {
	display: none;
  }
`;


const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${
	  WEIGHTS.medium
  };
  
  &:first-of-type {
	color: var(--color-secondary);
  }
`;

export default Header;