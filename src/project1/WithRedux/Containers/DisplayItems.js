import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { updateUserActivity } from './SelectCategoryAction';
import updateWishListAction from './WishListAction';

class DisplayItems extends Component{

    constructor(props){
        super(props);
        this.l=[];
        this.handleAddClick=this.handleAddClick.bind(this);
    }

    handleAddClick(event){
       
        this.props.wishList(this.l[event.target.name]);
    }
    render(){

    this.l=this.props.dataItems.map((i,j)=>{
        
        return(<React.Fragment>
                <h2>{i.address}</h2>

                <DisplayImages listOfImgLinks={i.images}/><br/>
                
                Availability:           {i.occupancyAvailable}<br/>
                Rent Agreement validity:{(this.props.isFlatData?i.rentAgreementVldty:'NA')}<br/>
                Price:Rs.               {i.price}

                <input name={j} type='button' value='add' onClick={this.handleAddClick}/>
        </React.Fragment>
    )})
  
    return this.l;
    }
        
}

function DisplayImages(props){
    let ImageList=[];
    for(let i=0;i<props.listOfImgLinks.length;i++)
        ImageList.push(<img src={props.listOfImgLinks[i]}/>);

    return ImageList;
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({
      wishList:updateWishListAction
    },dispatch);
  }

export default connect(null,matchDispatchToProps)(DisplayItems);