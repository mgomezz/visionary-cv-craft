import CVHeader from "@/components/cv/CVHeader";
import CVExperience from "@/components/cv/CVExperience";
import CVSkills from "@/components/cv/CVSkills";
import CVEducation from "@/components/cv/CVEducation";
import CVFooter from "@/components/cv/CVFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* CV Container */}
      <div className="max-w-6xl mx-auto px-4 py-8">
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
