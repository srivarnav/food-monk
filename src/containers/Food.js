import React from 'react';

import Aux from '../hoc/Aux/Aux';
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';
import Card from '../components/FoodList/FoodList';
import Login from '../components/UI/Login/Login';
import Container from '@material-ui/core/Container';
import {isEmpty} from 'bellajs';

import { cuisines } from '../data/cuisines';
import CheckoutDialog from '../components/UI/Checkout/CheckoutDialog';

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:cuisines,
            cuisines,
            totalPrice: 0,
            purchasedItem: [],
            isAuthenticated: false,
            showLoginModal: false,
            showCheckoutModal: false
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
        this.setState({ showLoginModal: true });
    }
    loginHandleClose = () => {
        this.setState({ showLoginModal: false });
    }

    checkoutHandleOpen = () => {
        this.setState({ showCheckoutModal: true });
    }
    checkoutHandleClose = () => {
        this.setState({ showCheckoutModal: false });
    }

    handleSearch= (event) =>{
        const originalData = this.state.data;
        let result = this.state.cuisines.filter(element=>(element.keywords).indexOf(event.target.value) > -1);
        if(!isEmpty(result)){
            this.setState({cuisines: result});
        }
        else{
            this.setState({cuisines:originalData});
        }
    }

    render() {
        console.log(this.state)
        const { cuisines } = this.state;
        return (
            <Aux>
                <Header
                    loginOpen={this.loginHandleOpen}
                    loginClose={this.loginHandleClose}
                    isAuthenticated={this.state.isAuthenticated}
                    showLoginModal={this.state.showLoginModal}
                    handleSearch={this.handleSearch}/>
                <Login
                    loginOpen={this.loginHandleOpen}
                    loginClose={this.loginHandleClose}
                    showLoginModal={this.state.showLoginModal} />
                
                <Container maxWidth="sm" style={{ marginTop: '100px', marginBottom: '90px'}}>
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
                    <Footer
                        checkoutOpen={this.checkoutHandleOpen}
                        checkoutClose={this.checkoutHandleClose}
                        showCheckoutModal={this.state.showCheckoutModal}
                        purchasedItem={this.state.purchasedItem}
                        totalPrice={this.state.totalPrice} />

                    : ""}
                <CheckoutDialog
                    checkoutOpen={this.checkoutHandleOpen}
                    checkoutClose={this.checkoutHandleClose}
                    showCheckoutModal={this.state.showCheckoutModal}
                    purchasedItem={this.state.purchasedItem}
                    totalPrice={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default Food;