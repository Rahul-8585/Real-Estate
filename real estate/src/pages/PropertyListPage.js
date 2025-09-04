import React from 'react';
import PropertyCard from '../components/PropertyCard';
import './PropertyListPage.css';

// Mock data to represent property listings
const properties = [
  { id: 1, type: '2 BHK House for Sale', location: 'Banjara Hills, Hyderabad', price: '16.3 Lac', owner: 'Ramesh Kumar', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, type: '3 BHK House for Sale', location: 'Gachibowli, Hyderabad', price: '10 Lac', owner: 'Amit Singh', image: null },
  { id: 3, type: '1 BHK Floor for Sale', location: 'West Marredpally, Hyderabad', price: '32 Lac', owner: 'Sandeep Thakkar', image: null },
  { id: 4, type: '2 BHK House for Sale', location: 'Kukatpally, Hyderabad', price: '12.7 Lac', owner: 'Praveen Reddy', image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const PropertyListPage = () => {
  return (
    <div className="container page-layout">
      <div className="main-content">
        <div className="results-header">
          <h3>351 results | Residential Properties for Sale in Hyderabad</h3>
        </div>
        <div className="property-list">
          {properties.map(prop => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
      <aside className="sidebar">
        <div className="sidebar-card free-post-card">
          <h4>Sell/Rent your Property with us for <span>Free</span></h4>
          <p>Find Buyers & Tenants easily</p>
          <button>Post Property</button>
        </div>

        <div className="sidebar-card why-magicbricks">
          <h4>Here's why Magicbricks</h4>
          <ul>
            <li>Get access to 1.5 Lac+ Buyers</li>
            <li>Sell faster with genuine leads</li>
            <li>Get expert advice on property values & insights</li>
          </ul>
        </div>

        <div className="sidebar-card ad-card">
           <p className="exclusive-text">Exclusive Interest rate</p>
           <p className="rate">of 8.60% p.a.</p>
           <p className="product">+ Home Loan</p>
           <img src="https://images.livemint.com/img/2021/11/24/1600x900/Kotak_Mahindra_Bank_1637735394924_1637735395052.PNG" alt="Kotak Bank" className="bank-logo"/>
        </div>
      </aside>
    </div>
  );
};

export default PropertyListPage;