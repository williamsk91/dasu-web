export const Steps = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl text-slate-600 text-center mb-4">
        Done In 3 Simple Steps
      </h2>
      <div className="flex flex-col gap-2 text-slate-700">
        <Step step={1} text="Get In Touch" />
        <Step step={2} text="Send Your Book (in your format)" />
        <Step step={3} text="Published Online" />
      </div>
    </div>
  );
};

interface StepProps {
  step: number;
  text: string;
}

const Step = ({ step, text }: StepProps) => {
  return (
    <div className="flex gap-2 items-center text-xl">
      <div className="flex items-center justify-center border w-10 h-10 p-1 rounded-lg">
        {step}
      </div>
      <div>{text}</div>
    </div>
  );
};
