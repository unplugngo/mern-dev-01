import React, { Component } from 'react'
import Select from 'react-select'
import { CSVLink, CSVDownload } from "react-csv";
import DualListBox from 'react-dual-listbox';

import './App.css';
import 'react-dual-listbox/lib/react-dual-listbox.css';

const options = [
  { value: 'opt1', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { value: 'opt2', label: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.' },
  { value: 'opt3', label: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.' }
]

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["", "", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

const dlbOptions = [
  { value: 'ET01', label: 'Equipment Tag 01' },
  { value: 'ET02', label: 'Equipment Tag 02' },
  { value: 'ET03', label: 'Equipment Tag 03' },
  { value: 'ET04', label: 'Equipment Tag 04' },
  { value: 'ET05', label: 'Equipment Tag 05' },
  { value: 'ET06', label: 'Equipment Tag 06' },
  { value: 'ET07', label: 'Equipment Tag 07' },
  { value: 'ET08', label: 'Equipment Tag 08' },
  { value: 'ET09', label: 'Equipment Tag 09' },
  { value: 'ET10', label: 'Equipment Tag 10' },
  { value: 'ET011', label: 'Equipment Tag 11' },
  { value: 'ET012', label: 'Equipment Tag 12' },
];


const SelectR = () => (
  <Select options={options} />
)

class DualList extends React.Component {
  state = {
      selected: ['one'],
  };

  onChange = (selected) => {
      this.setState({ selected });
  };

  render() {
      const { selected } = this.state;

      return (
          <DualListBox
              alignActions="top"
              options={dlbOptions}
              selected={selected}
              onChange={this.onChange}
          />
      );
  }
}

const TextArea = (props) => {

  return (
      <div>
          <textarea
            id={props.id}
            rows={props.rows}
            cols={props.cols}
            value='This is a textArea input'
           >

          </textarea>
      </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
      <h2>Mern Development App</h2>
      </header>
        <div className='selectStuff'>
          <SelectR />
        <div id='csv'>
          <CSVLink data={csvData}>Download CSV</CSVLink>
        </div>
        <div id='dlb'>
          <h5>Affected Tags</h5>
          <DualList />
        </div>
        </div>
        <section className='gridSectionA'>
          <div className="columnA" id='a1'>
            <SelectR />
          </div>
          <div className="columnA">2</div>
          <div className="columnA">3</div>
          <div className="columnA">4</div>
          <div className="columnA">5</div>
          <div className="columnA">6</div>
          <div className="columnA">7</div>
          <div className="columnA">8</div>
          <div className="columnA">9</div>
          <div className="columnA">10</div>
        </section>
        <section className='gridSectionB'>
          <div className="columnB">1</div>
          <div className="columnB">2</div>
          <div className="columnB">3</div>
          <div className="columnB">4</div>
          <div className="columnB">5</div>
        </section>
        <section className='gridSectionC'>
          <div className="columnC">1</div>
          <div className="columnC">2</div>
          <div className="columnC">3</div>
          <div className="columnC">4</div>
          <div className="columnC">5</div>
          <div className="columnC">6</div>
          <div className="columnC">7</div>
        </section>
    </div>
  );
}

export default App;
