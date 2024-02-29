import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/ServiceGrid.css';
const ServiceGrid = () =>{
    const serviceList = [{
        serviceName:"EV Charger",
        imageSRC: require('D:/React Projects/RD Mart Website/src/images/mock1.jpg'),
        serviceDescription: "Drive into the future with ease at our EV charging station. Power up your electric vehicle while you shop, ensuring you're always ready for the road ahead."
    },{
        serviceName:"Fountain Drinks",
        imageSRC: require('D:/React Projects/RD Mart Website/src/images/mock2.jpg'),
        price:{
            TwentyOz:"$1.99",
            ThirtyTwoOz:"$2.39"
        }
    },{
        serviceName:"Coffee Station",
        imageSRC: require('D:/React Projects/RD Mart Website/src/images/mock3.jpg'),
        price:{
            Refill:"$1.00",
            TwelveOz:"$1.00",
            SixteenOz:"$2.00"
        }
    },{
        serviceName:"Vaccum&Air",
        imageSRC: require('D:/React Projects/RD Mart Website/src/images/mock1.jpg'),
        price:{
            Vaccum:"$1.50",
            Air:"$1.50",
        }
    }];
    return(
        <div className = "ServiceGrid">
            <h1>Services</h1>
            {serviceList.map((service,index)=>(
                <div key={index} className = "Service">
                    <img src={service.imageSRC} alt={`${index+1}`}/>
                    <h2>{service.serviceName}</h2>
                    {service.serviceDescription&&(
                        <p>{service.serviceDescription}</p>
                    )}
                    {service.price&&(
                        <table>
                            <tbody>
                                {Object.entries(service.price).map(([item, price]) => (
                                    <tr key={item}>
                                        <td>{item}</td>
                                        <td>{price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            ))}
        </div>
    )
}
export default ServiceGrid;