import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 text-white p-4 flex flex-col rounded-lg font-semibold'>
            <h2 className='text-center my-5 '>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl '>/mon</span>
            </h2>
            <h4 className='text-4xl mb-5'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Features
                        key={index}
                        feature={feature}>
                    </Features>)
                }
            </div>
            <button className='mt-5 text-xl bg-green-500 font-bold
             hover:bg-slate-300 p-4 rounded-xl w-full'>
                Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;