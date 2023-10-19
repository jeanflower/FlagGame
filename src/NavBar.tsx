import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Component } from 'react';
import FlagImage from './finish-flag-128.png';
import { gameTypes, gameModes, setGameMode, setGameType, setLevel } from './App';
import React from 'react';
import Image from 'next/image';
import { getBSLVideos } from './bSLVideos';

interface NavBarState {
  type: string,
}
interface NavBarProps {
  title: string,
  type: string,
}
export class MyNavBar extends Component<NavBarProps, NavBarState> { 
  public constructor(props: NavBarProps) {
    super(props);
    this.state = {
      type: props.type,
    }
  }
  public render(){
    return (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Image
      src={FlagImage.src}
      alt="Van"
      width={40}
      height={60}
    />
    <Container>
      <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {this.state.type !== gameTypes.bslVideos &&
          <NavDropdown title="Difficulty" id="basic-nav-dropdown" key="ndd">
            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                setLevel(0);
              }}
              eventKey="1.1"
            >Easy</NavDropdown.Item>
            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                setLevel(1);
              }}
              eventKey="1.2"
            >Medium</NavDropdown.Item>
            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                setLevel(2);
              }}
              eventKey="1.3"
            >Hard</NavDropdown.Item>
          </NavDropdown>
          }
          {this.state.type === gameTypes.bslVideos &&
          <NavDropdown title="Play type" id="basic-nav-dropdown" key="ndd">
            {getBSLVideos().map((g)=>{
              return (<NavDropdown.Item 
                href="#"
                onClick={()=>{
                  setLevel(g.level * 100 + g.group);
                }}
                eventKey="1.1"
              >
                {g.title}
              </NavDropdown.Item>)
            })}
          </NavDropdown>
          }
          {this.state.type !== gameTypes.bslVideos &&
          <NavDropdown title="Game style" id="basic-nav-dropdown" key="ndgs">
            {gameModes.map((mode: {
              name: string,
              screenName: string, 
            })=>{ 
              return (
                <NavDropdown.Item 
                  href="#"
                  onClick={()=>{
                    setGameMode(mode.name);
                  }}
                  eventKey={`2.${mode.name}`}
                  key={`2.${mode.name}`}
                >{mode.screenName}</NavDropdown.Item>
              );
            })}
          </NavDropdown>
          }
          <NavDropdown title="Game content" id="basic-nav-dropdown" key="ndgc">
            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                this.setState({
                  type: gameTypes.flagGame,
                });
                setGameType(gameTypes.flagGame);
              }}
              eventKey="3.1"
            >Flags</NavDropdown.Item>
            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                this.setState({
                  type: gameTypes.indianDessertGame,
                });
                setGameType(gameTypes.indianDessertGame);
              }}
              eventKey="3.2"
            >Indian desserts</NavDropdown.Item>
            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                this.setState({
                  type: gameTypes.peppaPigGame,
                });
                setGameType(gameTypes.peppaPigGame);
              }}
              eventKey="3.3"
            >Peppa Pig characters</NavDropdown.Item>

            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                this.setState({
                  type: gameTypes.bslAlphabet,
                });
                setGameType(gameTypes.bslAlphabet);
              }}
              eventKey="3.4"
            >BSL alphabet</NavDropdown.Item>

            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                this.setState({
                  type: gameTypes.bslVideos,
                });
                setGameType(gameTypes.bslVideos);
              }}
              eventKey="3.5"
            >BSL videos</NavDropdown.Item>

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
  }
}