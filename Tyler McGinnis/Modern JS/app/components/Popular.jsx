import React from 'react';
import PropTypes from 'prop-types';
import {fetchPopularRepos} from "../utils/api";
import Loading from './Loading';

function SelectLanguage ({ selectedLanguage, onSelect }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  let languagesMapped = languages.map((lang) => 
    <li
      style={lang === selectedLanguage ? { color: '#d0021b' } : null}
      onClick={() => onSelect(lang)}
      key={lang}>
      {lang}
    </li>
  );

  return (
    <ul className='languages'>
      {languagesMapped}
    </ul>
  );
}

function RepoGrid ({ repos }) {

  let reposMapped = repos.map(({name, owner, html_url, stargazers_count}, index) => 
        <li key={name} className='popular-item'>
          <div className='popular-rank'>#{index + 1}</div>
          <ul className='space-list-items'>
            <li>
              <img
                className='avatar'
                src={owner.avatar_url}
                alt={'Avatar for ' + owner.login}
              />
            </li>
            <li><a href={html_url}>{name}</a></li>
            <li>@{owner.login}</li>
            <li>{stargazers_count} stars</li>
          </ul>
        </li>
    );

  return (
    <ul className='popular-list'>
      {reposMapped}
    </ul>
  );
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = async (lang) => {
    this.setState(() => ({
        selectedLanguage: lang,
        repos: null
      }));
      
    let repos = await fetchPopularRepos(lang);
    this.setState(() => ({ repos }));
  }


  render() {
    let { selectedLanguage, repos } = this.state;

    return (
      <div>
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          onSelect={this.updateLanguage} />
        {!repos
          ? <Loading />
          : <RepoGrid repos={repos} />}
      </div>
    );
  }
}

export default Popular;