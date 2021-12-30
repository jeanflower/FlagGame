import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Component } from 'react';
import FlagImage from './finish-flag-128.png';
import { FlagGame, gameNames, IndianDesertGame, PeppaPigGame, setGame, setGameType, setLevel } from './App';
import { BSLGame } from './App';
import React from 'react'

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
      src={FlagImage}
      alt="Van"
      width={40}
      height={'auto'}
    ></img>
    <Container>
      <Navbar.Brand href="#home">Flags galore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
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
          <NavDropdown title="Game Style" id="basic-nav-dropdown" key="ndgs">
            {gameNames.map((name: string)=>{ 
              return (
                <NavDropdown.Item 
                  href="#"
                  onClick={()=>{
                    setGame(name);
                  }}
                  eventKey={`2.${name}`}
                >{name}</NavDropdown.Item>
              );
            })}
          </NavDropdown>
          <NavDropdown title="Game content" id="basic-nav-dropdown" key="ndgc">
            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                setGameType(FlagGame);
              }}
              eventKey="3.1"
            >Flags</NavDropdown.Item>
            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                setGameType(IndianDesertGame);
              }}
              eventKey="3.2"
            >Indian deserts</NavDropdown.Item>
            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                setGameType(PeppaPigGame);
              }}
              eventKey="3.3"
            >Peppa Pig characters</NavDropdown.Item>

            <NavDropdown.Item 
              href="#"
              onClick={()=>{
                setGameType(BSLGame);
              }}
              eventKey="3.4"
            >BSL signs</NavDropdown.Item>

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
  }
}