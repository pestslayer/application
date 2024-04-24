import React, { useState } from 'react';

const Apply = () => {
  const [data, setData] = useState({
    service: '',
    name: '',
    discordName: '',
    department: '',
    experience: '',
    experienceLength: '',
    rpExperience: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const webhookURL = 'https://discord.com/api/webhooks/1232767275744891030/Ix8buesSlny9OzCUQJRb-qXC2lN-UeWJgo1Klep8DwinrN0ziUt5PoaKfolY7oNbd5Ql';
    const applicationMessage = `NEW APPLICATION:\nName: ${data.name}\nDiscord Name: ${data.discordName}\nType: ${data.service}\nDepartment: ${data.department}\nexperience: ${data.experience}\nExperience Length: ${data.experienceLength}\nWith SouthrnRP: ${data.rpExperience}\n\n`;

    try {
      await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: applicationMessage }),
      });
      alert('Application submitted successfully!');
      setData({ ...data, name: '', discordName: '', service: '',department: '', experience: '', experienceLength: '', rpExperience: ''});
    } catch (error) {
      console.error('Error sending application to Discord:', error);
      alert('Failed to submit application. Please try again later.');
    }
  };
    return (
        <>
             <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-8">
        <h1 className="text-2xl font-bold text-center mb-4">Service Application</h1>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
            <select id="service" name="service" value={data.service} onChange={handleChange} className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm">
              <option value="">Select a service</option>
              <option value="LEO">Law Enforcement Officer</option>
              <option value="FIRE">Firefighter</option>
              <option value="EMS">Emergency Medical Services</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={data.name} onChange={handleChange} className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm" required />
          </div>

          <div className="mb-4">
            <label htmlFor="discordName" className="block text-sm font-medium text-gray-700">Discord Name</label>
            <input type="text" id="discordName" name="discordName" value={data.discordName} onChange={handleChange} className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm" required />
          </div>

          {data.service === 'LEO' && (
            <div className="mb-4">
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
              <select id="department" name="department" value={data.department} onChange={handleChange} className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm">
                <option value="">Select a department</option>
                <option value="LSPD">Los Santos Police Department</option>
                <option value="BCSO">Blaine County Sheriff's Office</option>
                <option value="State">State Police</option>
              </select>
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Do you have experience in the field applying for?</label>
            <select id="experience" name="experience" value={data.experience} onChange={handleChange} className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {data.experience === 'Yes' && (
  <div className="mb-4">
    <label htmlFor="experienceLength" className="block text-sm font-medium text-gray-700">How long?</label>
    <input type="text" id="experienceLength" name="experienceLength" value={data.experienceLength} onChange={handleChange} className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm" />
  </div>
)}


          <div className="mb-4">
            <label htmlFor="rpExperience" className="block text-sm font-medium text-gray-700">How long have you been in Southern RP?</label>
            <input type="text" id="rpExperience" name="rpExperience" value={data.rpExperience} onChange={handleChange} className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm" />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}

export default Apply