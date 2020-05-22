import React from 'react';

import Aux from '../hoc/Aux/Aux';
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';
import Card from '../components/FoodList/FoodList';
import Login from '../components/UI/Login/Login';
import Container from '@material-ui/core/Container';

import { cuisines } from '../data/cuisines';

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisines,
            totalPrice: 0,
            purchasedItem: [],
            isAuthenticated: false,
            showLoginModal: false
        }
    }

    updatePurchaseState(item) {
        const result = item.filter(element => element.count > 0);
        console.log(result);
        this.setState({ purchasedItem: result });
    }

    addItemHandler = (key) => {
        console.log("item Added", this.state.cuisines[key]);
        const oldCount = this.state.cuisines[key].count;
        const updatedCount = oldCount + 1;
        const updatedItem = [...this.state.cuisines];
        updatedItem[key].count = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + this.state.cuisines[key].price;
        this.setState({ totalPrice: newPrice, cuisines: updatedItem });
        this.updatePurchaseState(updatedItem);
    }

    removeItemHandler = (key) => {
        console.log("item Added", this.state.cuisines[key]);
        const oldCount = this.state.cuisines[key].count;
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedItem = [...this.state.cuisines];
        updatedItem[key].count = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - this.state.cuisines[key].price;
        this.setState({ totalPrice: newPrice, cuisines: updatedItem });
        this.updatePurchaseState(updatedItem);
    }

    loginHandleOpen = () => {
        console.log("login handler");
        this.setState({showLoginModal:true});
    }
    loginHandleClose = () => {
        console.log("login handler");
        this.setState({showLoginModal:false});
    }

    render() {
        console.log(this.state)
        const { cuisines } = this.state;
        console.log(cuisines);
        return (
            <Aux>
                <Header
                    loginOpen={this.loginHandleOpen}
                    loginClose={this.loginHandleClose}
                    isAuthenticated={this.state.isAuthenticated}
                    showLoginModal={this.state.showLoginModal} />
                <Login
                    loginOpen={this.loginHandleOpen}
                    loginClose={this.loginHandleClose}
                    isAuthenticated={this.state.isAuthenticated}
                    showLoginModal={this.state.showLoginModal} />
                <Container maxWidth="sm" style={{ marginTop: '100px' }}>
                    <div>
                        {cuisines.map((foodElement, key) => {
                            return <Card
                                key={key}
                                id={key}
                                data={foodElement}
                                totalPrice={this.state.totalPrice}
                                itemAdded={this.addItemHandler}
                                itemRemoved={this.removeItemHandler}
                            />
                        })}
                    </div>
                </Container>
                {(this.state.totalPrice > 0) ?
                    <Footer purchasedItem={this.state.purchasedItem} totalPrice={this.state.totalPrice} />
                    : ""}
            </Aux>
        );
    }
}

export default Food;