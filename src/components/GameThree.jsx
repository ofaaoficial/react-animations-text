import React, {Component} from 'react';
import elementIMG from './../assets/element.png';

class GameThree extends Component {
    constructor(props) {
        super(props);
        const {time, speed, styles} = props;
        this.time = time || 60;
        this.speed = speed || 200;
        this.styles = styles;

        this.state = {
            text: '',
            animation: {
                position: {
                    x: 29,
                    y: 14
                },
                counter: 0,
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
            height: 700,
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.11)',
        };
    }


    componentDidMount() {
        const widthCanvas = this.canvasElement.clientWidth;
        this.moveLoop = setInterval(() => {
            const animation = this.state.animation;

            if (animation.position.x > (widthCanvas - 35)) {
                if (animation.position.y >= 650) {
                    animation.position.y = 14;
                } else {
                    animation.position.y += 80;
                }
                animation.position.x = 29;
            } else {
                animation.position.x += 8;
            }

            this.setState({animation});
        }, this.speed);

        let counterSeconds = 0;
        setInterval(() => {
            counterSeconds++;
            if (counterSeconds === this.time) clearInterval(this.moveLoop);
        }, 1000); // One second.
    }

    componentWillUnmount() {
        clearInterval(this.moveLoop);
    }

    elementsScreen() {
        const elements = [];
        const global = {
            userSelect: 'none',
            position: 'absolute'
        };

        for (let i = 1; i < 10; i++) {
            elements.push({
                ...global,
                top: 80 * i,
                left: 20,
            });

            elements.push({
                ...global,
                top: 80 * i,
                left: 'calc((100% / 2) - 25px)',
            });

            elements.push({
                ...global,
                top: 80 * i,
                left: 'calc((100%) - 55px)',
            });
        }
        return elements;
    }

    render() {
        return (
            <section className="canvas" style={this.canvasStyles} ref={(canvasElement) => {
                this.canvasElement = canvasElement
            }}>
                <article
                    className="canvas__circle"
                    style={{
                        position: 'absolute',
                        top: this.state.animation.position.y,
                        left: this.state.animation.position.x,
                        backgroundColor: '#68b895',
                        zIndex: 99,
                        borderRadius: '50%',
                        width: 30,
                        height: 30,
                        ...this.styles
                    }}
                >
                </article>
                <article style={{
                    transform: 'translateY(-75px)'
                }}>
                    {this.elementsScreen().map((element, index) =>
                        <img key={index} draggable="false" src={elementIMG} alt="element" style={element}/>)}
                </article>
            </section>
        )
    }
}


export default GameThree;
