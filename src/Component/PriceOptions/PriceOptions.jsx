import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to cardio and weightlifting equipment",
                "Unlimited use of the gym during regular hours",
                "Locker room and shower facilities",
                "Free fitness assessment upon signup",
                "Nutritional guidance and meal planning resources",
                "Discounts on gym merchandise"
            ]
        },
        {
            "id": 2,
            "name": "Student Membership",
            "price": 49.99,
            "features": [
                "All features of Basic Membership",
                "Access to group fitness classes (yoga, spin, HIIT, etc.)",
                "Personalized workout plans",
                "Discounts on personal training sessions",
                "Access to sauna and steam room",
                "Priority booking for group classes"
            ]
        },
        {
            "id": 1,
            "name": "Family Membership",
            "price": 79.99,
            "features": [
                "All features of Premium Membership",
                "Access for up to 4 family members",
                "Childcare services during workouts",
                "Guest passes for friends and family",
                "Monthly family fitness challenges",
                "Exclusive family events and workshops"
            ]
        }

    ];


    return (
        <div className="m-12">
            <h2 className="text-5xl text-black font-bold flex mb-5
            justify-center"> Best prices in the town</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {
                    priceOptions.map(option => <PriceOption key={option.id}
                        option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;