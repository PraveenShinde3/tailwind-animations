import BasicAnimationGuide from "@/components/BasicAnimationGuide";
import CardHolder from "@/components/CardHolder";
import Settings from "@/components/Settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Main = () => {
  return (
    <div className="mx-auto w-full max-w[950px]">
      <Tabs
        className="flex flex-col justify-center items-center"
        defaultValue="basic"
      >
        <TabsList>
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          {/* <TabsTrigger value="ui">UI</TabsTrigger> */}
        </TabsList>
        <TabsContent value="basic">
          <div className="w-full flex flex-col gap-6 pt-4">
            <BasicAnimationGuide />
            <Settings />
            <CardHolder />
          </div>
        </TabsContent>
        <TabsContent value="typography">
          <div className="max-w-[600px] mx-auto py-4">
            <p>Coming Soon...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
