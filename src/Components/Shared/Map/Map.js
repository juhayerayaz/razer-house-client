import React from 'react';
import './Map.css'
const Map = () => {
    const submitReview = event => {
        event.preventDefault()
    }
    return (
        <>
            <section className="mt-5 mb-5">
                <h1 className="fw-bold text-center mb-5">Get Direction</h1>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-evenly">
                    <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29209.889613704447!2d90.41293312341234!3d23.774601843786602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7fd0322b155%3A0x641996fab4728270!2sNational%20Warehouse!5e0!3m2!1sen!2sbd!4v1651997293435!5m2!1sen!2sbd" width="800" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <h2 className="fw-bold text-center">Leave A Comment</h2>
                        <form onSubmit={submitReview}>
                            <div className="form-outline mb-4">
                                <input type="text" id="form4Example1" class="form-control" />
                                <label className="form-label" for="form4Example1">Name</label>
                            </div>
                            <div className='form-outline mb-4'>
                                <input type="file" name="image" id="form4Example2" />
                            </div>
                            <div className="form-outline mb-4">
                                <textarea className="form-control" id="form4Example3" rows="6" ></textarea>
                                <label className="form-label" for="form4Example3">Message</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
                        </form>
                    </div>
                </div>
            </section>
            <div className='text-center mt-5 mb-5'>
                <h2 className='fw-bold'>All Comments</h2>
            </div>
        </>
    );
};

export default Map;