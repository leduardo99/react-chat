import React, { Component } from 'react'

class TypingIndicator extends Component {
    render() {
        if (this.props.usersWhoAreTyping.length > 0) {
            return (
                <div>
                    {`${this.props.usersWhoAreTyping
                        .slice(0, 2)
                        .join(' e ')} está digitando`}
                </div>
            )
        }
        return <div />
    }
}

export default TypingIndicator