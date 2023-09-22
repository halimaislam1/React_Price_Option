import PropTypes from 'prop-types'
import {IoCheckmarkCircle} from 'react-icons/io5';
const Features = ({feature}) => {
    return (
        <div>
            <p className='flex '>
                <IoCheckmarkCircle className='text-green-300 mr-3'></IoCheckmarkCircle> {feature}</p>
        </div>
    );
};
Features.propTypes ={
    feature: PropTypes.object
}
export default Features;