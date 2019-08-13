import React from 'react'

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

    //Updating state using a function setstate
    // addFriend(newFriend) {
    //     this.setState((state) => {
    //       return {
    //         friends: state.friends.concat(newFriend)
    //       }
    //     })
    //   }

    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

        return (
            <ul className='flex-center'>
                {languages.map((language) => (
                    <li key={language}>
                        <button 
                        className='btn-clear nav-link' 
                        style={language ===this.state.selectedLanguage ? {color: 'red'}: null}
                        onClick={() => this._updateLanguage(language)} >
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Popular;