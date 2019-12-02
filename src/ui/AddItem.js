import React from 'react';


class AddItem extends React.Component {

    state = {
        newTitle: '',
        inputError: false
    }

    resetInputError = () => {
        if (this.state.inputError === true) {
            this.setState({ inputError: false })
        }
    }

    enterItemTitle = (e) => {
        this.resetInputError();
        this.setState({ newTitle: e.currentTarget.value })
    }

    addItem = () => {
        if (this.state.newTitle === '') {
            this.setState({ inputError: true })
        } else {
            this.props.addItem(this.state.newTitle, this.props.listId)
            this.setState({ newTitle: '' })
        }
    }

    addItemOnKey = (e) => {
        if (e.key === 'Enter') this.addItem()
    }

    render() {
        const inputErrorClass = this.state.inputError === true ? 'inputError' : '';
        const {placeHolder} = this.props;
        
        return (
            <div className='addItem'>
                <input
                    onChange={this.enterItemTitle}
                    value={this.state.newTitle}
                    onKeyPress={this.addItemOnKey}
                    className={inputErrorClass}
                    onBlur={this.resetInputError}
                    placeholder={placeHolder} />
                <button onClick={this.addItem} >+</button>
            </div>
        )
    }
};


export default AddItem;