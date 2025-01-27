import { useState, useEffect } from 'react';
import JobListing from "./JobListing";
import Spinner from './Spinner';

// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = '/api/jobs' + (isHome ? '?_limit=3' : '');
  
      try {
        const result = await fetch(apiUrl);
        const data = await result.json();
        
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
      finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? 'Recent Jobs' : 'Browse Jobs' }
        </h2>
          { isLoading ? (
            <Spinner isLoading={isLoading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          )}
      </div>
    </section>
  );
};

export default JobListings;
