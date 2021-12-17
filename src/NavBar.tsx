import { Nav, Navbar } from 'react-bootstrap';
import { Component } from 'react';
import VanImage from './finish-flag-128.png';
import { gameNames, setGame } from './App';

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
        {gameNames.map((name: string)=>{ return (
          <button 
            className="btn my-2 my-sm-0" 
            key={name}
            onClick={()=>{
              setGame(name);
            }}
          >
            {name}
          </button>); 
        })
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>      
    );
  }
}