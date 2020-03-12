import React, {Component} from 'react';
import './Cube.css';
import { Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import SimplePaper from './cubeCard';
import EducationPaper from './educationCard';
import Renewable from './renewable';
import WealthManagement from './wealthManagement';
import Sales from './sales';
import Miscellaneous from './miscellaneous';


export default class CubeComponent extends Component{

  state = {
    cubeSide: 'cube show-front'
  }

  changeSide(side){
    this.setState({cubeSide: 'cube show-'+side})
  }

render(){
  return (
      <div>
        <div className="scene">
          <div className={this.state.cubeSide}>
            <div className="cube__face cube__face--front"><SimplePaper  title="Internet Technology" year0="2019-2020" subtitle0="Coding Academy Epitech" location0="Kremlin Bicêtre" position0="Intensive Adult Training" year="2010-2011" subtitle="Animapp" location="Algiers - Paris" position="Operations Manager" year2="2000-2002" subtitle2="4ème Millénaire" location2="Paris" position2="I.T. Consultant" />
            </div>
            <div className="cube__face cube__face--back"><Sales title="Sales" year0="2014-2015" subtitle0="Smartbox" location0="South East Paris" position0="Sector Manager" year="2002-2006" subtitle="Autoprim" location="Paris-Alicante" position="Managing Director" year2="1996-1999" subtitle2="Audencia" location2="Nantes" position2="Student"/></div>
            <div className="cube__face cube__face--right"><WealthManagement  title="Wealth Management" year0="2012-2013" subtitle0="IAE Paris12" location0="Créteil" position0="Student" year="2009-2010" subtitle="AGAP Conseil" location="Montpellier" position="Independant Financial Advisor" year2="2008-2009" subtitle2="Gan Patrimoine" location2="Montpellier" position2="Agent" year3="2007-2008" subtitle3="Mona Lisa" location3="Montpellier" position3="Representative"/></div>
            <div className="cube__face cube__face--left"><Renewable title="Renewable Energies" year="2016-2018" subtitle="Distrinergy" location="Paris" position="Project Officer" />
            </div>
            <div className="cube__face cube__face--top"><EducationPaper title="Education" year="2019-2020" subtitle="Coding Academy Epitech" location="Kremlin Bicêtre France" year2="2012-2013" subtitle2="Master's Degree in Wealth Management IAE Paris12" location2="Créteil France" year3="1996-1999" detail2="final dissertation: International Assets Strategy: dismemberment of ownership and offshoring " subtitle3="Audencia Business School Diploma" location3="Nantes" detail3="1998 Spring Quarter Ohio State University" year4="1994-1996" subtitle4="University General Studies Diploma in Economy Montpellier I" location4="Montpellier" year5="1993" subtitle5="Baccalaureate C" location5="Paris" title2="Languages"/></div>
            <div className="cube__face cube__face--bottom"><Miscellaneous title="Miscellaneous" language1="French: Native" language2="English: Business fluent" language3="Portuguese: Basics" subtitle="Languages" subtitle2="Hobbies"/></div>
          </div>
        </div>
        <div style={{position: 'relative', zIndex: '1'}}>
        <p className="radio-group">
          <label>
            <input type="radio" name="rotate-cube-side" defaultValue="front" onChange={() => this.changeSide('front') } defaultChecked /> Internet Technology
          </label>
          <label>
            <input type="radio" name="rotate-cube-side" defaultValue="right" onChange={() => this.changeSide('right') }
             /> Wealth Management
          </label>
          <label>
            <input type="radio" name="rotate-cube-side"  defaultValue="back"
            onChange={() => this.changeSide('back') } /> Sales
          </label></p>
          <p className="radio-group">
          <label>
            <input type="radio" name="rotate-cube-side" defaultValue="left" onChange={() => this.changeSide('left') } /> Renewable Energies
          </label>
          <label>
            <input type="radio" name="rotate-cube-side" defaultValue="top" onChange={() => this.changeSide('top') } /> Education
          </label>
          <label>
            <input type="radio" name="rotate-cube-side" defaultValue="bottom" onChange={() => this.changeSide('bottom') } /> Miscellaneous
          </label>
        </p>
        </div>
      </div>
    );
  }
}
