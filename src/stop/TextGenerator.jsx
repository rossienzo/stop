import React from "react";
import { initialState } from "./state";

/* Components */
import Content from "../common/template/Content";
import Display from "../components/Display";
import If from "../common/operador/if";
import Card from "../common/template/Card";
import Icon from "../components/Icon";
import FixedTab from "../common/template/FixedTab";
import Box from "../common/template/Box";
import Item from "../common/template/Item";
import ListItem from "../common/template/ListItem";

// const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

class TextGenerator extends React.Component
{
    constructor(props) {
        super(props);
        
        this.state = initialState;
        
        this.generateNumber = this.generateNumber.bind(this);
        this.getLetters = this.getLetters.bind(this);
        this.reset = this.reset.bind(this);
    }

    getLetters()
    {   
        const listOfLetters = document.getElementById('listOfLetters');

        // transforma a lista de itens html em array
        let arrLetters = Array.prototype.slice.call(listOfLetters.children);

        // pega a letra no html
        const letters = arrLetters.map(item => (
             item.classList.contains('selected') ? item.innerHTML : ''
        ));

        // remove os itens não selecionados
        const selectedLetters = letters.filter(item => {
            return item !== '';
        });

        if(selectedLetters.length > 1)
            this.setState({ alphabet: selectedLetters, fixedTab: true })
    }

    generateNumber()
    {
        const alphabet = this.state.alphabet;

        if(alphabet.length > 0)
        {
            // gera um número aleatório
            const letter = alphabet[(Math.floor(Math.random() * alphabet.length))];
            
            // salva no estado a letra
            this.setState({textDisplay: letter});
            
            // pega a posição da letra no array
            let index = alphabet.indexOf(letter);

            // se existir no array remove o elemento
            if(index > -1)
                alphabet.splice(index, 1);
        }
    }

    reset() { this.setState({ alphabet: '', textDisplay: '', fixedTab: false }); }

    render()
    {
        return (
            <Content>
                <FixedTab class={this.state.fixedTab}>
                    <Box>
                        <h2>Escolha as letras:</h2>
                        <ListItem id="listOfLetters" color="gray">
                            <Item text="A" class="selected"/>
                            <Item text="B" class="selected"/>
                            <Item text="C" class="selected"/>
                            <Item text="D" class="selected"/>
                            <Item text="E" class="selected"/>
                            <Item text="F" class="selected"/>
                            <Item text="G" class="selected"/>
                            <Item text="H"/>
                            <Item text="I" class="selected"/>
                            <Item text="J"/>
                            <Item text="K"/>
                            <Item text="L" class="selected"/>
                            <Item text="M" class="selected"/>
                            <Item text="N" class="selected"/>
                            <Item text="O" class="selected"/>
                            <Item text="P" class="selected"/>
                            <Item text="Q"/>
                            <Item text="R" class="selected"/>
                            <Item text="S" class="selected"/>
                            <Item text="T" class="selected"/>
                            <Item text="U"/>
                            <Item text="V" class="selected"/>
                            <Item text="W"/>
                            <Item text="X"/>
                            <Item text="Y"/>
                            <Item text="Z"/>
                        </ListItem>
                        <button className='btn' onClick={this.getLetters}>Pronto</button>
                    </Box>
                </FixedTab>
                <Card>
                    <Display text={this.state.textDisplay}/>
                    
                    <div className="card-content">
                        <div className="buttons">
                            <If test={this.state.alphabet.length > 0 }>
                                <button className='btn' onClick={this.generateNumber}>Nova letra</button>
                            </If>

                            <If test={this.state.alphabet.length === 0}>
                                <button className='btn-disabled' disabled>Nova letra</button>
                            </If>

                            <button className='btn reload' onClick={this.reset}>
                                <Icon name="fa-solid fa-arrows-rotate"/>
                            </button>
                        </div>
                        
                        <small>Restam {this.state.alphabet.length} letras.</small>
                    </div>
                </Card>
            </Content>
        )
    }
}

export default TextGenerator;