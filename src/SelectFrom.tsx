import { Component } from 'react';
import { generateDisplayData } from './displayData';
import { generateRandomSelection } from './random';
import Image from 'next/image';

interface SelectFromState {
  message: string;
  indicesToShow: number[];
  correctIndex: string;
  highlightBorder: number;
  numberTaps: number;
  numberRight: number;
  currentRun: number;
  bestRun: number;
  lastRun: number;
  lastThree: number[];
  isMounted: boolean;
}
interface SelectFromProps {
  numFlagsShown: number,
  images: any[],
  gameType: string,
}

export class SelectFromGame extends Component<SelectFromProps, SelectFromState> { 
  public constructor(props: SelectFromProps) {    
    super(props);
    const lastThree = [-1,-1,-1];
    // console.log(`props for SelectFromGame ${JSON.stringify(props)}`);
    const selection = generateRandomSelection(
      this.props.images,
      this.props.numFlagsShown,
      lastThree,
    );
    this.state = {
      ...selection,
      message: '',
      numberTaps: 0,
      numberRight: 0,
      currentRun: 0,
      bestRun: 0,
      lastRun: 0,
      lastThree: lastThree,
      highlightBorder: -1,
      isMounted: false,
    }
    if(this.state.indicesToShow.length === 0){
      this.setRandomSelection();
    }
  }
  private setRandomSelection(){
    // console.log(`generate random selection for SelectFromGame`);
    this.setState(
      generateRandomSelection(
        this.props.images,
        this.props.numFlagsShown,
        this.state.lastThree,
        )
    );
  }
  onClickWork(i: number){
    if(this.props.images[i].name === this.state.correctIndex){
      // alert("WIN");
      const newCurrentRun = this.state.currentRun + 1;
      let newBestRun = Math.max(this.state.bestRun, newCurrentRun);
      this.setState({
        ...generateRandomSelection(
          this.props.images,
          this.props.numFlagsShown,
          this.state.lastThree,
          ),
        message: '',
        numberTaps: this.state.numberTaps + 1,
        numberRight: this.state.numberRight + 1,
        currentRun: newCurrentRun,
        bestRun: newBestRun,
        highlightBorder: -1,
      });          
    } else {
      this.setState({ 
        message: `That was ${this.props.images[i].name}`,
        numberTaps: this.state.numberTaps + 1,
        currentRun: 0,
        lastRun: this.state.currentRun,
        highlightBorder: i,
      });
    }
  }

  componentDidMount(){
    console.log("Did mount called in SelectFrom");
    this.setState({
      isMounted: true,
    });
  }
  
  render(){
    // console.log(`rendering SelectFromGame with props = ${JSON.stringify(this.props)}`);
    // console.log(`rendering SelectFromGame with state = ${JSON.stringify(this.state)}`);

    if(!this.state.isMounted){
      return <></>;
    }
    
    const displayData = generateDisplayData(
      this.state.indicesToShow,
      this.props.gameType,
    );

    return (
      <div>
      <h2>
        Select {this.state.correctIndex}
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
                  <div 
                  style={{
                    padding: `${displayData.pad}px`,
                    backgroundColor: `${this.state.highlightBorder === i?'red':'grey'}`
                  }}
                >
                <Image
                  key={`im${i}`}
                  src={this.props.images[i].image}
                  alt={this.props.images[i].name}
                  style={{
                    padding: `${displayData.pad}px`
                  }}
                  width={displayData.tileWidth}
                  onClick={()=>{
                    return this.onClickWork(i);
                  }}
                />             
                </div>
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
