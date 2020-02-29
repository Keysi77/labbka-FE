import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectOneAnimal } from '../../redux/animals/animals.selectors'

// TODO: spravit template detail zvieratka
function AnimalDetail({ animal }) {
    AnimalDetail.propTypes = {
        animal: PropTypes.shape(),
        unsibscribeOneAnimal: PropTypes.func
    }

    return (
        <div>
            aaa
            { animal.name }
            { animal.size }
            { animal.gender }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
	animal: selectOneAnimal
})
export default connect(mapStateToProps)(AnimalDetail)

