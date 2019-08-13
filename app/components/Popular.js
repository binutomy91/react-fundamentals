import React from 'react'
import PropTypes from 'prop-types'

import { fetchPopularRepos } from '../utlis/api';

function LanguagesNav({ selected, onUpdateLanguage }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
        <ul className='flex-center'>
            {languages.map((language) => (
                <li key={language}>
                    <button
                        className='btn-clear nav-link'
                        style={language === selected ? { color: 'red' } : null}
                        onClick={() => onUpdateLanguage(language)} >
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    )
}

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

class Popular extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All',
            repos: {},
            error: null
        }

        this._updateLanguage = this._updateLanguage.bind(this);
        this._isLoading = this._isLoading.bind(this);
    }

    componentDidMount() {
        this._updateLanguage(this.state.selectedLanguage)
    }

    _updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null
        })


        if (!this.state.repos[selectedLanguage]) {
            fetchPopularRepos(selectedLanguage)
                .then((data) => {
                    this.setState(({ repos }) => ({
                        repos: {
                            ...repos,
                            [selectedLanguage]: data
                        }
                    }))
                })
                .catch(() => {
                    this.setState({
                        error: "There was an Error"
                    })
                })

            fetchPopularRepos(selectedLanguage)
                .then((repos) => this.setState({
                    repos,
                    error: null,
                }))

        }


    }

    _isLoading() {
        const { selectedLanguage, repos, error } = this.state
        return !repos[selectedLanguage] && error === null

    }

    render() {
        const { selectedLanguage, repos, error } = this.state

        return (
            <React.Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this._updateLanguage}
                />

                {this._isLoading() && <p>Loading</p>}

                {error && <p>{error}</p>}

                {repos[selectedLanguage] && <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>}

            </React.Fragment>
        )
    }
}


export default Popular;