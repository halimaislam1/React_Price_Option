import { useEffect, useState } from "react";
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, } from 'recharts';
import { Audio, Circles } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const PhoneData = data.data.data;
                const PhonesWithFakeData = PhoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                // console.log(PhonesWithFakeData);
                setPhones(PhonesWithFakeData)
                setLoading(false)
            })
    }, [])


    return (
        <div>
            {loading && <div className="flex justify-center gap-5 pt-12">
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color='blue'
                    ariaLabel='three-dots-loading'
                    wrapperStyle
                    wrapperClass
                />
                <Circles
                    height="80"
                    width="80"
                    color="blue"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>}
            <h2 className="text-5xl">PHone:{phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;