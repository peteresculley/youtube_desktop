import React from 'react';
const { ipcRenderer } = window.require('electron');

import SidebarItem from './sidebar_item';
import { shortenString } from 'helpers';

class ContributorSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      1: {
        name: 'David Hu',
        img: 'https://avatars2.githubusercontent.com/u/15827041?v=3&s=200',
        github: 'https://www.github.com/davidhu2000'
      },
      2: {
        name: 'Alex Sherman',
        img: 'https://avatars0.githubusercontent.com/u/19175984?v=3&s=200',
        github: 'https://www.github.com/asherman-ca'
      },
      3: {
        name: 'Carson Judge',
        img: 'https://avatars3.githubusercontent.com/u/22506482?v=3&s=200',
        github: 'https://www.github.com/cjudge1337'
      },
      4: {
        name: 'Kevin Nyugen',
        img: 'https://avatars0.githubusercontent.com/u/15253174?v=3&s=200',
        github: 'https://www.github.com/nguyenkevin16'
      },
      5: {
        name: 'Raymond Lee',
        img: 'https://avatars3.githubusercontent.com/u/20022799?v=3&s=200',
        github: 'https://www.github.com/rlee0525'
      },
      6: {
        name: 'Katarina Rossi',
        img: 'https://avatars2.githubusercontent.com/u/18646575?v=3&s=200',
        github: 'https://www.github.com/dischorde'
      }
    };
  }

  openNewWindow(url) {
    ipcRenderer.sendSync('open-url', url);
  }

  renderContributors() {
    return Object.keys(this.state).map( id => {
      let contributor = this.state[id];
      return (
        <div className={`sidebar-item`} key={id}>
          <a onClick={() => this.openNewWindow(contributor.github)}>
            <img src={contributor.img} />
            <span>{shortenString(contributor.name, 19)}</span>
          </a>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="sidebar-section">
        <div className='sidebar-header'>
          CONTRIBUTORS
        </div>

       { this.renderContributors() }

      </div>
    );
  }
}

export default ContributorSection;