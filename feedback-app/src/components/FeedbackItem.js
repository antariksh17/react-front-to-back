import React from 'react'
import  Card  from './shared/Card'
import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types';



export const FeedbackItem = ({item, handleDelete}) => {
  return (
    <Card reverse={true}>
        <div className='num-display'>{item.rating}</div>
        <button className='close' onClick={()=> handleDelete(item.id)}>
            <FaTimes color='purple'/>
        </button>

        <div className='text-display'>{item.text}</div>

    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}