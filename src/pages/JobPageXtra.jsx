import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
   const { id } = useParams();
   const [job, setJob] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchJob = async () => {
         try {
            const result = await fetch(`/api/jobs/${id}`);
            const data = await result.json();
            
            setJob(data);
         } catch (error) {
         console.log('Error fetching data', error);
         }
         finally {
            setIsLoading(false);
         }
      }

      fetchJob();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      isLoading ? <Spinner /> : <h1>{job.title}</h1>
   );
};

//const jobLoader = async ({params})

export default JobPage;