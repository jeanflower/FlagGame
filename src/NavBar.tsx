import { Nav, Navbar } from 'react-bootstrap';
import { Component } from 'react';
import VanImage from './flag-128.png';
import { gameNames, GameApp } from './App';

interface FlagNavBarState {
}
interface FlagNavBarProps {
  myApp: GameApp,
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
              this.props.myApp.setGame(name);
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