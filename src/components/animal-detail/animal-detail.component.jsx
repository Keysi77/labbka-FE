import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectOneAnimal } from '../../redux/animals/animals.selectors'

function AnimalDetail({ animal }) {
    AnimalDetail.propTypes = {
    
    }
    return (
        <div>
            { animal.name }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
	animal: selectOneAnimal
})
export default connect(mapStateToProps, null)(AnimalDetail)

