import React from 'react'


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

class Popular extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All'
        }
        this._updateLanguage = this._updateLanguage.bind(this);
    }

    _updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }

    render() {
        const {selectedLanguage} = this.state

        return (
            <React.Fragment>
             <LanguagesNav 
                selected={selectedLanguage}
                onUpdateLanguage = {this._updateLanguage}
             />
            </React.Fragment>
        )
    }
}

export default Popular;