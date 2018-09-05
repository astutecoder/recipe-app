import React from 'react';

export default (props) => {
    return(
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <img className="card-img-top text-center" src={'/storage/food_image/'+ props.recipe.image} alt="Card image cap" style={{width:'130px', }} />
                        <div className="card-body">
                            <h5 className="card-title">{props.recipe.title}</h5>
                            <p className="card-text">{props.recipe.steps}</p>
                            <a className="btn btn-primary">Check Details</a>
                        </div>
                </div>
            </div>
        </div>
    );
}
