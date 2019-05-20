import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class MenuContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState(
            {
                visible: !this.state.visible
            }
        );
    }

    render() {
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown}
                      menuVisibility={this.state.visible}/>
                <div>
                    <p>What you are learning now?</p>
                    <ul>
                        <li>Node</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Vue js</li>
                        <li>C#</li>
                        <li>Net core</li>
                        <li>Xamarin</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuContainer;