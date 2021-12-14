import { Nav, Navbar } from 'react-bootstrap';
import { Component } from 'react';
import VanImage from './van_icon_125866.png';

interface FlagNavBarState {
}
interface FlagNavBarProps {
}
export class FlagNavBar extends Component<FlagNavBarProps, FlagNavBarState> { 
  public constructor(props: FlagNavBarProps) {
    super(props);
    this.state = {
    }
  }
  public render(){
    return (
    <Navbar bg="primary" variant="dark" expand="lg">
    <img
      src={VanImage}
      alt="Van"
      width={70}
      height={'auto'}
    ></img>
    <Navbar.Brand href="#home">Flags galore</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/db">Admin</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>      
    );
  }
}