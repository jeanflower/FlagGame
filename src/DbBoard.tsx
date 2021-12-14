import { Component } from 'react';
import { FlagNavBar } from './NavBar';

// import { dealersData } from './SampleData';

interface DbBoardState {
}
interface DbBoardProps {
}

export class DbBoard extends Component<DbBoardProps, DbBoardState>{
  public constructor(props: DbBoardProps) {
    super(props);
    this.state = {
    }
  }

  render(){
    
    return (
      <div>
      <FlagNavBar
      />
      <h1>Admin</h1>
      </div>
    );
  }
}
