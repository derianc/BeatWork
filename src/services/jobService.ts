import { jobsData } from "@/data/jobsData";
import { JobDTO } from "@/data/job.dto";

export const jobService = () => {

  const get = async (): Promise<JobDTO[]> => {

    const jobs: JobDTO[] = jobsData.items.map((job: any) => ({
        employerName: job.employerName,
        jobTitle: job.jobTitle,
        jobDescription: job.jobDescription,
        jobAddress: job.jobAddress,
        jobStartDate: job.jobStartDate,
        jobStartTime: job.jobStartTime,
        jobEndDate: job.jobEndDate,
        jobEndTime: job.jobEndTime,
        jobPayRateHourly: job.jobPayRateHourly,
        jobPayRateDaily: job.jobPayRateDaily,
        jobIconUrl: job.jobIconUrl
    }))

    return jobs;
  };

  return {
    get,
  };
};
