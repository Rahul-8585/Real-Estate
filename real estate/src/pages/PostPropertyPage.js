import React from 'react';
import './PostPropertyPage.css';

const PostPropertyPage = () => {
  return (
    <div className="container page-layout">
      <div className="main-content">
        <div className="form-container">
          <h2>Sell or Rent your Property</h2>
          <p className="free-tag">You are posting this property for <span>FREE!</span></p>

          <form>
            <fieldset>
              <legend>Personal Details</legend>
              <div className="form-group radio-group">
                <label>I am:</label>
                <input type="radio" id="owner" name="user_type" value="owner" defaultChecked />
                <label htmlFor="owner">Owner</label>
                <input type="radio" id="agent" name="user_type" value="agent" />
                <label htmlFor="agent">Agent</label>
                <input type="radio" id="builder" name="user_type" value="builder" />
                <label htmlFor="builder">Builder</label>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input type="tel" id="mobile" placeholder="Enter Your Mobile" />
              </div>
              <div className="form-group whatsapp-group">
                <input type="tel" id="whatsapp" placeholder="Enter your WhatsApp No. to get enquiries from Buyer/Tenant" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" />
              </div>
            </fieldset>

            <fieldset>
              <legend>Property Details</legend>
              <div className="form-group radio-group">
                <label>For:</label>
                <input type="radio" id="sale" name="listing_type" value="sale" defaultChecked />
                <label htmlFor="sale">Sale</label>
                <input type="radio" id="rent" name="listing_type" value="rent" />
                <label htmlFor="rent">Rent/Lease</label>
                <input type="radio" id="pg" name="listing_type" value="pg" />
                <label htmlFor="pg">PG/Hostel</label>
              </div>
              <div className="form-group">
                <label htmlFor="propertyType">Property Type</label>
                <select id="propertyType">
                  <option>Select Property Type</option>
                  <option>Apartment</option>
                  <option>Independent House/Villa</option>
                  <option>Plot/Land</option>
                </select>
              </div>
            </fieldset>

            <fieldset>
              <legend>Property Location</legend>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="Enter City" />
              </div>
              <div className="form-group">
                <label htmlFor="locality">Locality</label>
                <input type="text" id="locality" placeholder="Enter Locality" />
              </div>
            </fieldset>

            <div className="form-group checkbox-group">
              <input type="checkbox" id="exclusive" defaultChecked />
              <label htmlFor="exclusive">I am posting this property 'exclusively' on Magicbricks</label>
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" defaultChecked />
              <label htmlFor="terms">I agree to Magicbricks T&C, Privacy Policy, & Cookie Policy</label>
            </div>
          </form>
        </div>
      </div>
      <aside className="sidebar">
        <div className="sidebar-card info-card">
          <h4>How to find the right Tenant?</h4>
          <ul>
            <li>
              <h5>Respond to Tenant Enquiries</h5>
              <p>Connect with Tenants when they contact on your property. <strong>View upto 5 contact details for FREE!</strong></p>
            </li>
            <li>
              <h5>Connect with Matching Tenants</h5>
              <p>Actively check for matching Tenants & connect.</p>
            </li>
            <li>
              <h5>Download the App</h5>
              <p>Get notified on all new Tenant enquiries and connect instantly.</p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default PostPropertyPage;