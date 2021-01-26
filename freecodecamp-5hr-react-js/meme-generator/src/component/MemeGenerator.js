import React from 'react';

class MemeGenerator extends React.Component {
    constructor(){
        super();

        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImages: []
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then( response => response.json() )
        .then( data => this.setState({ allMemeImages: data.data.memes } ))
    }

    handleChange(event){
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit(event){
        let randomItem = this.state.allMemeImages[Math.floor(Math.random() * this.state.allMemeImages.length)];
        this.setState({ topText: '', bottomText: '', randomImage: randomItem.url})
        event.preventDefault();
    }

    render(){
        return(
            <main>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter Top Text: <input
                            name='topText'
                            type='text'
                            value={this.state.topText}
                            onChange={this.handleChange}
                        ></input>
                    </label>
                    <label>Enter bottom Text: <input
                            name = 'bottomText'
                            type = 'text'
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        ></input>
                    </label>
                    <button>Gen!</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImage} alt=''></img>
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </main>
        )
    }

}

export default MemeGenerator;