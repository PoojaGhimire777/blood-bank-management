import React, { Component } from "react";
class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
          quantityAPostive : 1,
          show: true,
          max: 5,
          min: 0
        };
      }
    
      IncrementItem = () => {
          this.setState(prevState => {
            if(prevState.quantityAPostive < 9) {
              return {
                quantityAPostive: prevState.quantityAPostive + 1
              }
            } else {
              return null;
            }
          });
      }
      DecreaseItem = () => {
        this.setState(prevState => {
          if(prevState.quantityAPostive > 0) {
            return {
                quantityAPostive: prevState.quantityAPostive - 1
            }
          } else {
            return null;
          }
        });
      }
      ToggleClick = () => {
        this.setState({
          show: !this.state.show
        });
      }
      handleChange = (event) => {
        this.setState({quantityAPostive: event.target.value});
      }
      
    
      render() {
        return (<div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Adjust Stock</h2>
                        <div className="card-body">
                            <form>
                                <h2> A+</h2>
                                    <button onClick={this.IncrementItem}>+</button>
                                    <input className="inputne" value={this.state.quantityAPostive} onChange={this.UpdateValue} />
                                    <button onClick={this.DecreaseItem}>-</button>
                            </form>
                        </div>
                </div>
            </div>   
            

                    </div>
        </div>)

      }
}
export default Stock