import { Navbar, Nav, Dropdown, DropdownButton, Col, Row, Container } from 'react-bootstrap'
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
/**
 * Component for navigation menus
 * @param {*} props 
 */
 let StickyNavbar = (props) => {
    const searchType = useSelector(state => state.search.type);
    const dispatch = useDispatch();

    /**
     * Showing Creator reference page
     */
    const showCreator = () => {
        window.open(window.location.origin+'/?query='+encodeURIComponent('user:fotoamg'),
            'createdby','width=1200,height=600,scrollbars=yes,resizable=yes');
    }

    return ( <Navbar bg="primary" variant="dark" sticky="top" >
        <Navbar.Brand>Git Repo Search App</Navbar.Brand>
        <Nav className="mr-auto navbarOuter">
            <Container fluid className="horNavContainer">
                <Row className="horNavRow">
                    <Col className="horNavLinkCol">
                        <span className="creatorInfo" onClick={showCreator}>&copy;reated by FotoAmg</span>
                    </Col>
                    <Col className="vertNavDropCol">
                        <Dropdown>
                            <DropdownButton
                                key="vertMenu"
                                id={`dropdown-button-drop-vert`}
                                drop="left"
                                title=" " >
                                { searchType === 'search' ?
                                    <Dropdown.Item onClick={() => dispatch({ type: 'HISTORY_TYPE_NAV' })}>
                                        <h3>History</h3>
                                    </Dropdown.Item>
                                    : 
                                    <Dropdown.Item onClick={() => dispatch({ type: 'SEARCH_TYPE_NAV' })}>
                                        <h3>Search</h3>
                                    </Dropdown.Item>
                                }
                            </DropdownButton>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        </Nav>
    </Navbar>
    )
}

export default StickyNavbar;
