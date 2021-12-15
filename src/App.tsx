import './App.css';
import { Component } from 'react';

import { FlagNavBar } from './NavBar';

let myApp: AppContent; 
const numFlagsShown = 4;

function App() {
  return (
    <AppContent
    >
    </AppContent>
  );
}
const danData = [
  { name:"Afghanistan", url: "http://www.flags.net/images/largeflags/AFGH0001.GIF" },
  { name:"Albania", url: "http://www.flags.net/images/largeflags/ALBA0001.GIF" },
  { name:"Algeria", url: "http://www.flags.net/images/largeflags/ALGE0001.GIF" },
  { name:"Andorra", url: "http://www.flags.net/images/largeflags/ANDR0001.GIF" },
  { name:"Angola", url: "http://www.flags.net/images/largeflags/AGLA0001.GIF" },
  { name:"Antigua & Barbuda", url: "http://www.flags.net/images/largeflags/ANBA0001.GIF" },
  { name:"Argentina", url: "http://www.flags.net/images/largeflags/ARGE0001.GIF" },
  { name:"Armenia", url: "http://www.flags.net/images/largeflags/ARME0001.GIF" },
  { name:"Australia", url: "http://www.flags.net/images/largeflags/ASTL0001.GIF" },
  { name:"Austria", url: "http://www.flags.net/images/largeflags/AUST0001.GIF" },
  { name:"Azerbaijan", url: "http://www.flags.net/images/largeflags/AZER0001.GIF" },
  { name:"The Bahamas", url: "http://www.flags.net/images/largeflags/BHMS0001.GIF" },
  { name:"Bahrain", url: "http://www.flags.net/images/largeflags/BHRN0001.GIF" },
  { name:"Bangladesh", url: "http://www.flags.net/images/largeflags/BNGL0001.GIF" },
  { name:"Barbados", url: "http://www.flags.net/images/largeflags/BRBD0001.GIF" },
  { name:"Belarus", url: "http://www.flags.net/images/largeflags/BLRU0001.GIF" },
  { name:"Belgium", url: "http://www.flags.net/images/largeflags/BELG0001.GIF" },
  { name:"Belize", url: "http://www.flags.net/images/largeflags/BLZE0001.GIF" },
  { name:"Benin", url: "http://www.flags.net/images/largeflags/BNIN0001.GIF" },
  { name:"Bhután", url: "http://www.flags.net/images/largeflags/BHUT0001.GIF" },
  { name:"Bolivia", url: "http://www.flags.net/images/largeflags/BLVA0001.GIF" },
  { name:"Bosnia & Herzegovina", url: "http://www.flags.net/images/largeflags/BOHE0001.GIF" },
  { name:"Botswana", url: "http://www.flags.net/images/largeflags/BOTS0001.GIF" },
  { name:"Brazil", url: "http://www.flags.net/images/largeflags/BRAZ0001.GIF" },
  { name:"Brunei", url: "http://www.flags.net/images/largeflags/BRUN0001.GIF" },
  { name:"Bulgaria", url: "http://www.flags.net/images/largeflags/BULG0001.GIF" },
  { name:"Burkina Faso", url: "http://www.flags.net/images/largeflags/BUFA0001.GIF" },
  { name:"Burundi", url: "http://www.flags.net/images/largeflags/BURU0001.GIF" },
  { name:"Cambodia", url: "http://www.flags.net/images/largeflags/CAMB0001.GIF" },
  { name:"Cameroon", url: "http://www.flags.net/images/largeflags/CAME0001.GIF" },
  { name:"Canada", url: "http://www.flags.net/images/largeflags/CANA0001.GIF" },
  { name:"Cape Verde", url: "http://www.flags.net/images/largeflags/CAVE0001.GIF" },
  { name:"Central African Republic", url: "http://www.flags.net/images/largeflags/CAFR0001.GIF" },
  { name:"Chad", url: "http://www.flags.net/images/largeflags/CHAD0001.GIF" },
  { name:"Chile", url: "http://www.flags.net/images/largeflags/CHIL0001.GIF" },
  { name:"China", url: "http://www.flags.net/images/largeflags/CHIN0001.GIF" },
  { name:"Colombia", url: "http://www.flags.net/images/largeflags/CLMB0001.GIF" },
  { name:"Comoros", url: "http://www.flags.net/images/largeflags/COMO0001.GIF" },
  { name:"Congo-Brazzaville", url: "http://www.flags.net/images/largeflags/CONG0001.GIF" },
  { name:"Congo-Kinshasa", url: "http://www.flags.net/images/largeflags/CODR0001.GIF" },
  { name:"Costa Rica", url: "http://www.flags.net/images/largeflags/CORC0001.GIF" },
  { name:"Côte d’Ivoire", url: "http://www.flags.net/images/largeflags/CDIV0001.GIF" },
  { name:"Croatia", url: "http://www.flags.net/images/largeflags/CROA0001.GIF" },
  { name:"Cuba", url: "http://www.flags.net/images/largeflags/CUBA0001.GIF" },
  { name:"Cyprus", url: "http://www.flags.net/images/largeflags/CYPR0001.GIF" },
  { name:"The Czech Republic", url: "http://www.flags.net/images/largeflags/CZEC0001.GIF" },
  { name:"Denmark", url: "http://www.flags.net/images/largeflags/DENM0001.GIF" },
  { name:"Djibouti", url: "http://www.flags.net/images/largeflags/DJIB0001.GIF" },
  { name:"Dominica", url: "http://www.flags.net/images/largeflags/DOMN0001.GIF" },
  { name:"Dominican Republic", url: "http://www.flags.net/images/largeflags/DORE0001.GIF" },
  { name:"Ecuador", url: "http://www.flags.net/images/largeflags/ECUA0001.GIF" },
  { name:"Egypt", url: "http://www.flags.net/images/largeflags/EGYP0001.GIF" },
  { name:"El Salvador", url: "http://www.flags.net/images/largeflags/ELSA0001.GIF" },
  { name:"Equatorial Guinea", url: "http://www.flags.net/images/largeflags/EQGU0001.GIF" },
  { name:"Eritrea", url: "http://www.flags.net/images/largeflags/ERIT0001.GIF" },
  { name:"Estonia", url: "http://www.flags.net/images/largeflags/ESTN0001.GIF" },
  { name:"Ethiopia", url: "http://www.flags.net/images/largeflags/ETHP0001.GIF" },
  { name:"Fiji", url: "http://www.flags.net/images/largeflags/FIJI0001.GIF" },
  { name:"Finland", url: "http://www.flags.net/images/largeflags/FINL0001.GIF" },
  { name:"France", url: "http://www.flags.net/images/largeflags/FRAN0001.GIF" },
  { name:"Gabon", url: "http://www.flags.net/images/largeflags/GABN0001.GIF" },
  { name:"The Gambia", url: "http://www.flags.net/images/largeflags/GAMB0001.GIF" },
  { name:"Georgia", url: "http://www.flags.net/images/largeflags/GEOR0001.GIF" },
  { name:"Germany", url: "http://www.flags.net/images/largeflags/GERM0001.GIF" },
  { name:"Ghana", url: "http://www.flags.net/images/largeflags/GHAN0001.GIF" },
  { name:"Greece", url: "http://www.flags.net/images/largeflags/GREC0001.GIF" },
  { name:"Grenada", url: "http://www.flags.net/images/largeflags/GREN0001.GIF" },
  { name:"Guatemala", url: "http://www.flags.net/images/largeflags/GUAT0001.GIF" },
  { name:"Guinea", url: "http://www.flags.net/images/largeflags/GUIN0001.GIF" },
  { name:"Guinea-Bissau", url: "http://www.flags.net/images/largeflags/GUBA0001.GIF" },
  { name:"Guyana", url: "http://www.flags.net/images/largeflags/GUYA0001.GIF" },
  { name:"Haiti", url: "http://www.flags.net/images/largeflags/HAIT0001.GIF" },
  { name:"Honduras", url: "http://www.flags.net/images/largeflags/HOND0001.GIF" },
  { name:"Hungary", url: "http://www.flags.net/images/largeflags/HUNG0001.GIF" },
  { name:"Iceland", url: "http://www.flags.net/images/largeflags/ICEL0001.GIF" },
  { name:"India", url: "http://www.flags.net/images/largeflags/INDA0001.GIF" },
  { name:"Indonesia", url: "http://www.flags.net/images/largeflags/INDN0001.GIF" },
  { name:"Irân", url: "http://www.flags.net/images/largeflags/IRAN0001.GIF" },
  { name:"Iraq", url: "http://www.flags.net/images/largeflags/IRAQ0001.GIF" },
  { name:"Ireland", url: "http://www.flags.net/images/largeflags/IREL0001.GIF" },
  { name:"Israel", url: "http://www.flags.net/images/largeflags/ISRA0001.GIF" },
  { name:"Italy", url: "http://www.flags.net/images/largeflags/ITAL0001.GIF" },
  { name:"Jamaica", url: "http://www.flags.net/images/largeflags/JAMA0001.GIF" },
  { name:"Japan", url: "http://www.flags.net/images/largeflags/JAPA0001.GIF" },
  { name:"Jordan", url: "http://www.flags.net/images/largeflags/JORD0001.GIF" },
  { name:"Kazakhstan", url: "http://www.flags.net/images/largeflags/KAZK0001.GIF" },
  { name:"Kenya", url: "http://www.flags.net/images/largeflags/KENY0001.GIF" },
  { name:"Kiribati", url: "http://www.flags.net/images/largeflags/KIRB0001.GIF" },
  { name:"Kuwait", url: "http://www.flags.net/images/largeflags/KUWA0001.GIF" },
  { name:"Kyrgyzstan", url: "http://www.flags.net/images/largeflags/KYRG0001.GIF" },
  { name:"Laos", url: "http://www.flags.net/images/largeflags/LAOS0001.GIF" },
  { name:"Latvia", url: "http://www.flags.net/images/largeflags/LATV0001.GIF" },
  { name:"Lebanon", url: "http://www.flags.net/images/largeflags/LEBA0001.GIF" },
  { name:"Lesotho", url: "http://www.flags.net/images/largeflags/LEST0001.GIF" },
  { name:"Liberia", url: "http://www.flags.net/images/largeflags/LIBE0001.GIF" },
  { name:"Libya", url: "http://www.flags.net/images/largeflags/LBYA0001.GIF" },
  { name:"Liechtenstein", url: "http://www.flags.net/images/largeflags/LIEC0001.GIF" },
  { name:"Lithuania", url: "http://www.flags.net/images/largeflags/LITH0001.GIF" },
  { name:"Luxembourg", url: "http://www.flags.net/images/largeflags/LUXE0001.GIF" },
  { name:"Macedonia", url: "http://www.flags.net/images/largeflags/MACE0001.GIF" },
  { name:"Madagascar", url: "http://www.flags.net/images/largeflags/MADA0001.GIF" },
  { name:"Malawi", url: "http://www.flags.net/images/largeflags/MALW0001.GIF" },
  { name:"Malaysia", url: "http://www.flags.net/images/largeflags/MALS0001.GIF" },
  { name:"Maldives", url: "http://www.flags.net/images/largeflags/MALD0001.GIF" },
  { name:"Mali", url: "http://www.flags.net/images/largeflags/MALI0001.GIF" },
  { name:"Malta", url: "http://www.flags.net/images/largeflags/MALT0001.GIF" },
  { name:"Marshall Islands", url: "http://www.flags.net/images/largeflags/MAIS0001.GIF" },
  { name:"Mauritania", url: "http://www.flags.net/images/largeflags/MAUR0001.GIF" },
  { name:"Mauritius", url: "http://www.flags.net/images/largeflags/MRTS0001.GIF" },
  { name:"México", url: "http://www.flags.net/images/largeflags/MEXC0001.GIF" },
  { name:"Micronesia", url: "http://www.flags.net/images/largeflags/MICR0001.GIF" },
  { name:"Moldova", url: "http://www.flags.net/images/largeflags/MOLD0001.GIF" },
  { name:"Monaco", url: "http://www.flags.net/images/largeflags/MONA0001.GIF" },
  { name:"Mongolia", url: "http://www.flags.net/images/largeflags/MONG0001.GIF" },
  { name:"Montenegro", url: "http://www.flags.net/images/largeflags/MNGR0001.GIF" },
  { name:"Morocco", url: "http://www.flags.net/images/largeflags/MORC0001.GIF" },
  { name:"Mozambique", url: "http://www.flags.net/images/largeflags/MOZA0001.GIF" },
  { name:"Myanmar", url: "http://www.flags.net/images/largeflags/MYAN0001.GIF" },
  { name:"Namibia", url: "http://www.flags.net/images/largeflags/NAMB0001.GIF" },
  { name:"Nauru", url: "http://www.flags.net/images/largeflags/NAUR0001.GIF" },
  { name:"Nepal", url: "http://www.flags.net/images/largeflags/NEPA0001.GIF" },
  { name:"The Netherlands", url: "http://www.flags.net/images/largeflags/NETH0001.GIF" },
  { name:"New Zealand", url: "http://www.flags.net/images/largeflags/NWZE0001.GIF" },
  { name:"Nicaragua", url: "http://www.flags.net/images/largeflags/NICA0001.GIF" },
  { name:"Niger", url: "http://www.flags.net/images/largeflags/NIGR0001.GIF" },
  { name:"Nigeria", url: "http://www.flags.net/images/largeflags/NGRA0001.GIF" },
  { name:"North Korea", url: "http://www.flags.net/images/largeflags/NKOR0001.GIF" },
  { name:"Norway", url: "http://www.flags.net/images/largeflags/NORW0001.GIF" },
  { name:"Oman", url: "http://www.flags.net/images/largeflags/OMAN0001.GIF" },
  { name:"Pakistan", url: "http://www.flags.net/images/largeflags/PAKS0001.GIF" },
  { name:"Palau", url: "http://www.flags.net/images/largeflags/PALA0001.GIF" },
  { name:"Panamá", url: "http://www.flags.net/images/largeflags/PANA0001.GIF" },
  { name:"Papua New Guinea", url: "http://www.flags.net/images/largeflags/PANG0001.GIF" },
  { name:"Paraguay", url: "http://www.flags.net/images/largeflags/PARA0001.GIF" },
  { name:"Perú", url: "http://www.flags.net/images/largeflags/PERU0001.GIF" },
  { name:"Philippines", url: "http://www.flags.net/images/largeflags/PHIL0001.GIF" },
  { name:"Poland", url: "http://www.flags.net/images/largeflags/POLA0001.GIF" },
  { name:"Portugal", url: "http://www.flags.net/images/largeflags/PORT0001.GIF" },
  { name:"Qatar", url: "http://www.flags.net/images/largeflags/QATA0001.GIF" },
  { name:"România", url: "http://www.flags.net/images/largeflags/RMNA0001.GIF" },
  { name:"Russian Federation", url: "http://www.flags.net/images/largeflags/RUSS0001.GIF" },
  { name:"Rwanda", url: "http://www.flags.net/images/largeflags/RWAN0001.GIF" },
  { name:"St. Kitts & Nevis", url: "http://www.flags.net/images/largeflags/STKN0001.GIF" },
  { name:"Saint Lucia", url: "http://www.flags.net/images/largeflags/STLU0001.GIF" },
  { name:"St. Vincent & the Grenadines", url: "http://www.flags.net/images/largeflags/SVGR0001.GIF" },
  { name:"Samoa", url: "http://www.flags.net/images/largeflags/SAMO0001.GIF" },
  { name:"San Marino", url: "http://www.flags.net/images/largeflags/SAMA0001.GIF" },
  { name:"São Tomé & Príncipe", url: "http://www.flags.net/images/largeflags/STPR0001.GIF" },
  { name:"Saudi Arabia", url: "http://www.flags.net/images/largeflags/SAAR0001.GIF" },
  { name:"Senegal", url: "http://www.flags.net/images/largeflags/SENE0001.GIF" },
  { name:"Serbia", url: "http://www.flags.net/images/largeflags/SERB0001.GIF" },
  { name:"Seychelles", url: "http://www.flags.net/images/largeflags/SEYC0001.GIF" },
  { name:"Sierra Leone", url: "http://www.flags.net/images/largeflags/SILE0001.GIF" },
  { name:"Singapore", url: "http://www.flags.net/images/largeflags/SING0001.GIF" },
  { name:"Slovakia", url: "http://www.flags.net/images/largeflags/SVKA0001.GIF" },
  { name:"Slovenia", url: "http://www.flags.net/images/largeflags/SLVA0001.GIF" },
  { name:"Solomon Islands", url: "http://www.flags.net/images/largeflags/SOIS0001.GIF" },
  { name:"Somalia", url: "http://www.flags.net/images/largeflags/SMLA0001.GIF" },
  { name:"South Africa", url: "http://www.flags.net/images/largeflags/SOAF0001.GIF" },
  { name:"South Korea", url: "http://www.flags.net/images/largeflags/SKOR0001.GIF" },
  { name:"South Sudan", url: "http://www.flags.net/images/largeflags/SOSU0001.GIF" },
  { name:"Spain", url: "http://www.flags.net/images/largeflags/SPAN0001.GIF" },
  { name:"Sri Lanka", url: "http://www.flags.net/images/largeflags/SRLA0001.GIF" },
  { name:"The Sudan", url: "http://www.flags.net/images/largeflags/SUDA0001.GIF" },
  { name:"Suriname", url: "http://www.flags.net/images/largeflags/SURN0001.GIF" },
  { name:"eSwatini", url: "http://www.flags.net/images/largeflags/SZLD0001.GIF" },
  { name:"Sweden", url: "http://www.flags.net/images/largeflags/SWDN0001.GIF" },
  { name:"Switzerland", url: "http://www.flags.net/images/largeflags/SWIT0001.GIF" },
  { name:"Syria", url: "http://www.flags.net/images/largeflags/SYRA0001.GIF" },
  { name:"Tajikistan", url: "http://www.flags.net/images/largeflags/TAJK0001.GIF" },
  { name:"Tanzania", url: "http://www.flags.net/images/largeflags/TANZ0001.GIF" },
  { name:"Thailand", url: "http://www.flags.net/images/largeflags/THAL0001.GIF" },
  { name:"Timor-Leste", url: "http://www.flags.net/images/largeflags/ETIM0001.GIF" },
  { name:"Togo", url: "http://www.flags.net/images/largeflags/TOGO0001.GIF" },
  { name:"Tonga", url: "http://www.flags.net/images/largeflags/TONG0001.GIF" },
  { name:"Trinidad & Tobago", url: "http://www.flags.net/images/largeflags/TRTB0001.GIF" },
  { name:"Tunisia", url: "http://www.flags.net/images/largeflags/TUNS0001.GIF" },
  { name:"Turkey", url: "http://www.flags.net/images/largeflags/TURK0001.GIF" },
  { name:"Turkmenistan", url: "http://www.flags.net/images/largeflags/TKST0001.GIF" },
  { name:"Tuvalu", url: "http://www.flags.net/images/largeflags/TUVA0001.GIF" },
  { name:"Uganda", url: "http://www.flags.net/images/largeflags/UGAN0001.GIF" },
  { name:"Ukraine", url: "http://www.flags.net/images/largeflags/UKRN0001.GIF" },
  { name:"United Arab Emirates", url: "http://www.flags.net/images/largeflags/UAEM0001.GIF" },
  { name:"United Kingdom", url: "http://www.flags.net/images/largeflags/UNKG0001.GIF" },
  { name:"United States", url: "http://www.flags.net/images/largeflags/UNST0001.GIF" },
  { name:"Uruguay", url: "http://www.flags.net/images/largeflags/URGY0001.GIF" },
  { name:"Uzbekistan", url: "http://www.flags.net/images/largeflags/UZBK0001.GIF" },
  { name:"Vanuatu", url: "http://www.flags.net/images/largeflags/VANT0001.GIF" },
  { name:"Venezuela", url: "http://www.flags.net/images/largeflags/VENZ0001.GIF" },
  { name:"Viêt Nam", url: "http://www.flags.net/images/largeflags/VIET0001.GIF" },
  { name:"Yemen", url: "http://www.flags.net/images/largeflags/YEMN0001.GIF" },
  { name:"Zambia", url: "http://www.flags.net/images/largeflags/ZAMB0001.GIF" },
  { name:"Zimbabwe", url: "http://www.flags.net/images/largeflags/ZBWE0001.GIF" },  
];

export default App;

interface AppState {
  key: number;
  score: number;
}
interface AppProps {
}

export class AppContent extends Component<AppProps, AppState> { 
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      key: Math.random(),
      score: 0,
    }
    myApp = this;
  }
  
  render(){
  const numFlagsTotal = danData.length;
  const numbersSelected: number[] = [];

  for(let i = 0; i < numFlagsShown; i = i + 1){
    let randNum = Math.random();
    randNum = Math.floor(randNum * (numFlagsTotal - i));
    // console.log(`randNum = ${randNum}`);
    let sorted:number[] = [];
    sorted = sorted.concat(numbersSelected);
    sorted.sort((a,b)=>{return a<b?-1:1});
    // console.log(`sorted = ${sorted}`);
    for(let j = 0; j < i; j = j + 1){
      // console.log(`check ${randNum} against ${sorted[j]}`);
      if(randNum >= sorted[j]){
        // console.log(`${randNum} >= ${sorted[j]} so add one`);
        randNum = randNum + 1;
      }
    }
    numbersSelected.push(randNum);
    console.log(`numbersSelected = ${numbersSelected}`);
  }
  //console.log(numbersSelected);

  const correctOne = Math.floor(Math.random() * numFlagsShown);
  const correctPlace = danData[numbersSelected[correctOne]].name;
    
  return (
    <div>
    <FlagNavBar
    />
    <h2>
      Score {myApp.state.score}
    </h2>
    {numbersSelected.map((i)=>{
      return (<img
      key={i}
      src={danData[i].url}
      alt={danData[i].name}
      width={200}
      height={'auto'}
      onClick={function(){
        if(danData[i].name === correctPlace){
          // alert("WIN");
          myApp.setState({ 
            key: Math.random(),
            score: myApp.state.score + 1,
           });          
        } else {
          alert(`that was ${danData[i].name} - try again!`);
        }
      }}
    ></img>)
    }
    )
    }
    <h2>
      {correctPlace}
    </h2>
    </div>
  );
  }
}

