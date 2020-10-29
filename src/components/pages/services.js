import React from 'react'
import "../../assets/components/pages/services.scss"

function Services() {
    return (
        <div className="service-components">
            <div id="section-services" className="section-services">
                <div className="services">
                    <div className="service">
                        <span className="ti-server service-icon"></span>
                        <h4 className="service-title"> DESIGN + DEVELOPMENT</h4>
                        <p className="service-content">
                            Clean, modern designs -
                            optimized for performance,
                            search engines, and converting
                            users to customers.
                        </p>
                    </div>
                    <div className="service">
                        <span className="ti-shopping-cart-full service-icon"></span>
                        <h4 className="service-title">E-COMMERCE</h4>
                        <p className="service-content">
                            Integration of eCommerce
                            platforms, payment gateways,
                            custom product templates, and
                            more.
                        </p>
                    </div>
                    <div className="service">
                        <span className="ti-stats-up service-icon"></span>
                        <h4 className="service-title">ANALYTICS</h4>
                        <p className="service-content">
                            Get insights into who is
                            browsing your site so that you
                            can make smarter business
                            decisions.
                        </p>
                    </div>
                    <div className="service">
                        <span className="ti-mobile service-icon"></span>
                        <h4 className="service-title">MOBILE-FRIENDLY</h4>
                        <p className="service-content">
                            A responsive design makes your
                            website accessible to all users,
                            regardless of their device.
                        </p>
                    </div>
                    <div className="service">
                        <span className="ti-check-box service-icon"></span>
                        <h4 className="service-title">WEBSITE AUDIT</h4>
                        <p className="service-content">
                            Looking to improve your page
                            performance, SEO, or user
                            experience? Request a free site
                            audit.
                        </p>
                    </div>
                    <div className="service">
                        <span className="ti-pencil service-icon"></span>
                        <h4 className="service-title">CONTENT MANAGEMENT</h4>
                        <p className="service-content">
                            Custom WordPress theme and
                            plugin development. Easily
                            update content without knowing
                            how to code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services