import React from 'react';

export default function map() {
    return (
        <div className="flex flex-row items-center justify-center p-5 shadow-md">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1893.6362344358247!2d98.8170656012571!3d18.334849968781175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dbb903de457b15%3A0xade4cc5e472c4fdf!2sSS%20Com%20Service!5e0!3m2!1sth!2sth!4v1735791102936!5m2!1sth!2sth"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '6px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
