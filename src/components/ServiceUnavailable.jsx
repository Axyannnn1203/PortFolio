import React from "react";

const ServiceUnavailable = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600">Service Unavailable</h1>
      <p className="mt-2 text-lg text-gray-700">We're sorry, but the service is currently unavailable. Please try again later.</p>
    </div>
  );
};

export default ServiceUnavailable;
