import BasicCard from "@/components/basic-card";
import UploadForm from "@/components/request-upload-form";
import { config } from '@/util/site-config';

const Upload = () => {
  return (
    // container classes centered
    <div className="flex flex-row items-center justify-center mt-8">
      {/* make min width 400 */}
      <BasicCard
        className="w-[600px] p-4"
        title="Create Request"
        description="Create a balance verification request. This item will become publically available for other users to discover."
      >
        <UploadForm />
      </BasicCard>

      <BasicCard
        className="w-[300px] p-4 mx-4"
        title="Steps"
        description=""
      >
        {config.steps.map((step, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-lg font-bold">{index+1}. {step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))
        }

        </BasicCard>
    </div>
  );
};

export default Upload;
