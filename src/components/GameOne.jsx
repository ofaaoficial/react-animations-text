import React, {Component} from 'react';
import './RelojStyles.css';

class GameOne extends Component {
    constructor(props) {
        super(props);
        const {content, time, speed, styles, type} = props;
        this.content = content;
        this.time = time || 60;
        this.speed = speed || 500;
        this.styles = styles;
        this.type = type || 1;

        this.state = {
            text: '',
            animation: {
                position: {
                    x: 1,
                    y: 0
                },
                counter: 0,
                maxRepeat: content.length
            },
            currentSeconds: 0
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
                if (this.type === 1)
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

        this.currentInterval = setInterval(() => {
            this.setState({
                currentSeconds: this.state.currentSeconds + 1
            });

            if (this.state.currentSeconds === this.time) this.clearIntervals();
        }, 1000); // One second.
    }

    clearIntervals() {
        clearInterval(this.writerLoop);
        clearInterval(this.currentInterval);
    }

    componentWillUnmount() {
        this.clearIntervals();
    }

    render() {
        return (
            <section className="canvas" style={this.canvasStyles}>
                <p
                    className="canvas__content"
                    style={{
                        position: 'absolute',
                        top: this.state.animation.position.y,
                        left: this.type === 1 ? this.state.animation.position.x === 1 ? 'calc((100% / 3) * 1)' : 'calc((100% / 3) * 2)' : 'calc(50%)',
                        transform: this.type === 2 ? 'translateX(-50%)' : null,
                        ...this.styles
                    }}
                >
                    {this.state.text}
                </p>
                <section className="timer">
                    <article className="hand">
                        <span className="timer__seconds">{this.state.currentSeconds}</span>
                    </article>
                </section>
            </section>
        )
    }
}


export default GameOne;
