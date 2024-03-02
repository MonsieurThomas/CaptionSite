import DemoSection from "@/components/DemoSection";
import PageHeader from "@/components/PageHeader";
import UploadForm from "@/components/UploadForm";
import UploadIcon from "@/components/UploadIcon";
import Image from "next/image";

export default function Home() {

  return (
      <>
        <PageHeader h1Text="Add Captions to your videos" h2Text="Just upload your video and we will do the rest"/>
        <div className="text-center">
          <UploadForm/>
        </div>
          <DemoSection/>
      </>
  );
}
