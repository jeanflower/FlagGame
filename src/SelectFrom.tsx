import { Component } from 'react';
import { generateDisplayData } from './displayData';
import { generateRandomSelection } from './random';

interface SelectFromState {
  message: string;
  numbersSelected: number[];
  correctPlace: string;
  numberTaps: number;
  numberRight: number;
  currentRun: number;
  bestRun: number;
  lastRun: number;
}
interface SelectFromProps {
  numFlagsShown: number,
  images: any[],
}

export class SelectFromGame extends Component<SelectFromProps, SelectFromState> { 
  public constructor(props: SelectFromProps) {    
    super(props);
    // console.log(`props for SelectFromGame ${JSON.stringify(props)}`);
    this.state = {
      ...generateRandomSelection(
        this.props.images,
        this.props.numFlagsShown
      ),
      message: '',
      numberTaps: 0,
      numberRight: 0,
      currentRun: 0,
      bestRun: 0,
      lastRun: 0,
    }
    if(this.state.numbersSelected.length === 0){
      this.setRandomSelection();
    }
  }
  private setRandomSelection(){
    // console.log(`generate random selection for SelectFromGame`);
    this.setState(
      generateRandomSelection(
        this.props.images,
        this.props.numFlagsShown
      )
    );
  }
  onClickWork(i: number){
    if(this.props.images[i].name === this.state.correctPlace){
      // alert("WIN");
      const newCurrentRun = this.state.currentRun + 1;
      let newBestRun = Math.max(this.state.bestRun, newCurrentRun);
      this.setState({
        ...generateRandomSelection(
          this.props.images,
          this.props.numFlagsShown,
        ),
        message: '',
        numberTaps: this.state.numberTaps + 1,
        numberRight: this.state.numberRight + 1,
        currentRun: newCurrentRun,
        bestRun: newBestRun,
      });          
    } else {
      this.setState({ 
        message: `That was ${this.props.images[i].name}`,
        numberTaps: this.state.numberTaps + 1,
        currentRun: 0,
        lastRun: this.state.currentRun,
      });
    }
  }
  
  render(){
    // console.log(`rendering SelectFromGame with props = ${JSON.stringify(this.props)}`);
    // console.log(`rendering SelectFromGame with state = ${JSON.stringify(this.state)}`);

    const displayData = generateDisplayData(this.state.numbersSelected);
    return (
      <div>
      <h2>
        Select {this.state.correctPlace}
      </h2>
      <table>
      <tbody>
      {displayData.rows.map(
        (row: number[])=>{
          return (
            <tr
              key={`tr${JSON.stringify(row)}`}
            >{row.map(
            (i: number)=>{
              return (
                <td
                  key={`td${i}`}
                >{
                <img
                  key={`im${i}`}
                  src={this.props.images[i].image}
                  alt={this.props.images[i].name}
                  style={{padding: `${displayData.pad}px`}}
                  width={displayData.tileWidth}
                  height={'auto'}
                  onClick={()=>{
                    return this.onClickWork(i);
                  }}
                ></img>                
              }</td>);
            })}</tr>);
        })}
      </tbody>
      </table>
      <h2>
        {this.state.message} 
      </h2>
      <h2>
        {this.state.numberTaps
        ? Math.floor((this.state.numberRight * 100)/this.state.numberTaps)
        : 0}% correct from {this.state.numberTaps} attempts
      </h2>
      <h2>
        Runs: current {this.state.currentRun}, previous {this.state.lastRun}, best {this.state.bestRun}
      </h2>
    </div>);
  }
}
