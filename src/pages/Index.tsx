import CVHeader from "@/components/cv/CVHeader";
import CVExperience from "@/components/cv/CVExperience";
import CVSkills from "@/components/cv/CVSkills";
import CVEducation from "@/components/cv/CVEducation";
import CVFooter from "@/components/cv/CVFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* CV Container */}
      <div className="max-w-3xl mx-auto px-8 py-3">
        <CVHeader />
        <CVExperience />
        <CVSkills />
        <CVEducation />
        <CVFooter />
      </div>
    </div>
  );
};

export default Index;
