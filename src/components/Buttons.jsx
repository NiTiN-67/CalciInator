import '../stylesheet/button.css'
export const Buttons = ({fn}) => {
    return (
         <div className="container text-center">
            <div className="row">
                <div className="col">
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1 darkbtn" value='('>(</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1 darkbtn" value=')'>)</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1 darkbtn" value='%'>%</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1 darkbtn" value='AC'>AC</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='7'>7</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='8'>8</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='9'>9</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1 darkbtn" value='/'>/</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='4'>4</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='5'>5</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='6'>6</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1 darkbtn" value='*'>*</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='1'>1</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='2'>2</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='3'>3</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1 darkbtn" value='-'>-</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='0'>0</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1" value='.'>.</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-primary m-1" value='='>=</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-light m-1 darkbtn" value='+'>+</button>
                </div>
            </div>
        </div>
    )
}