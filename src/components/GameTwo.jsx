import React, {Component} from 'react';

class GameTwo extends Component {
    constructor(props) {
        super(props);
        const {content, time, speed, styles} = props;
        this.content = content;
        this.phrases = this.content.map(phrase => phrase.split(' '));
        this.time = time || 60;
        this.speed = speed || 150;
        this.styles = styles;

        this.state = {
            text: '',
            animation: {
                position: {
                    y: 0
                },
                phrasePosition: 0,
                maxPhrasePosition: 0,
                wordPosition: 0,
                maxWordPosition: 0,
            },
            currentSeconds: 0
        };

        this.canvasStyles = {
            position: 'relative',
            backgroundColor: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 400,
            marginTop: 20,
            height: 140,
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.11)',
        };

    }

    componentDidMount() {
        this.writerLoop = setInterval(() => {
            const animation = this.state.animation;
            if (animation.position.y >= this.canvasStyles.height - 40) {
                animation.position.y = 0;
            } else {
                animation.position.y += 20;
            }

            animation.maxPhrasePosition = this.phrases.length;
            const phrase = this.phrases[this.state.animation.phrasePosition];

            animation.maxWordPosition = phrase ? phrase.length : 0;

            this.setState({
                animation,
                text: phrase[this.state.animation.wordPosition]
            });

            animation.wordPosition++;

            if (animation.maxWordPosition === animation.wordPosition) {
                animation.wordPosition = 0;
                if (this.state.animation.phrasePosition === this.state.animation.maxPhrasePosition - 1) {
                    animation.phrasePosition = 0;
                }
                animation.phrasePosition++;
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
                        left: '50%',
                        transform: 'translateX(-50%)',
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


export default GameTwo;
