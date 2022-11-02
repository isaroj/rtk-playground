import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {ordered, restocked} from '../cake/cakeSlice'

const CakeView = () => {
    const [orderCake, setorderCake] = useState(1);
    const [restockCake, setrestockCake] = useState(1);
    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()
    return (
      <div>
        <h1>No of cakes : {noOfCakes}</h1>
        <input
          type="number"
          onChange={(e) => setorderCake(e.target.value)}
          value={orderCake}
        />
        <button onClick={() => dispatch(ordered(orderCake))}>
          Order {orderCake} cake
        </button>
        <br />
        <input
          style={{marginTop: '1rem'}}
          type="number"
          onChange={(e) => setrestockCake(e.target.value)}
          value={restockCake}
        />
        <button onClick={() => dispatch(restocked(restockCake))}>
          Restock {restockCake} cake
        </button>
      </div>
    );
}

export default CakeView