import React, {Component} from 'react';

class GameOne extends Component {
    constructor(props) {
        super(props);
        const {content, time, speed, styles} = props;
        this.content = content;
        this.time = time;
        this.speed = speed;
        this.styles = styles;

        this.state = {
            text: '',
            animation: {
                position: {
                    x: 1,
                    y: 0
                },
                counter: 0,
                maxRepeat: content.length
            }
        };

        this.canvasStyles = {
            position: 'relative',
            backgroundColor: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            marginTop: 20,
            height: 500,
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.11)',
        };

    }

    changePositionX() {
        const animation = this.state.animation;
        animation.position.x = animation.position.x === 1 ? 2 : 1;
        this.setState({animation})
    }

    componentDidMount() {
        this.writerLoop = setInterval(() => {
            const animation = this.state.animation;
            if (animation.position.y >= this.canvasStyles.height - 40) {
                animation.position.y = 0;
                this.changePositionX();
            } else {
                animation.position.y += 20;
            }

            this.setState({
                animation,
                text: this.content[this.state.animation.counter]
            });

            animation.counter++;

            if (this.state.animation.counter === this.state.animation.maxRepeat) {
                const animation = this.state.animation;
                animation.counter = 0;
                this.setState({animation});
            }
        }, this.speed);

        let counterSeconds = 0;
        setInterval(() => {
            counterSeconds++;
            if (counterSeconds === this.time) clearInterval(this.writerLoop);
        }, 1000); // One second.
    }

    componentWillUnmount() {
        clearInterval(this.writerLoop);
    }

    render() {
        return (
            <section className="canvas" style={this.canvasStyles}>
                <p
                    className="canvas__content"
                    style={{
                        position: 'absolute',
                        top: this.state.animation.position.y,
                        left: this.state.animation.position.x === 1 ? 'calc((100% / 3) * 1)' : 'calc((100% / 3) * 2)',
                        ...this.styles
                    }}
                >
                    {this.state.text}
                </p>
            </section>
        )
    }
}


export default GameOne;
