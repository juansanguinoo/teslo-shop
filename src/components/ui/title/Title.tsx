import { montserrat } from "@/config/font";

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${montserrat.className} antialiased text-4xl font-semibold my-8`}
      >
        {title}
      </h1>

      {subtitle && <h3 className="text-xl mb-5">{subtitle}</h3>}
    </div>
  );
};
