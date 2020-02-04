import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectOneAnimal } from '../../redux/animals/animals.selectors'

function AnimalDetail({ animal }) {
    AnimalDetail.propTypes = {
        animal: PropTypes.shape()
    }
    useEffect(() => {     
        console.log('MOUNTED')   // Specify how to clean up after this effect:
        return () => {
            console.log('UNMOUNTED')
            // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        }
    })

    return (
        <div>
            { animal.name }
            { animal.size }
            { animal.gender }
        </div>
    )
}

// TODO: unsubscribe dat
const mapStateToProps = createStructuredSelector({
	animal: selectOneAnimal
})
export default connect(mapStateToProps, null)(AnimalDetail)

